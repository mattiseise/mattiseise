#!/usr/bin/env python3
"""Julkaisee sarjakuvaesitysmoottorin standalone-sivun seise.orgin esitykseksi.

Lähde on sarjakuvaesitys-repon `dist/<slug>/standalone.html` (yksi itsenäinen
tiedosto, sisältö ja puheraidat upotettuina). Skripti:

* lataa CDN-riippuvuudet (React UMD cdnjs:stä, Anton + Inter Google Fontsista)
  kansioon public/esitykset/<slug>/assets/, jotta kävijän selain ei ota yhteyttä
  kolmansiin osapuoliin (sama linja kuin rakenna-esitys.py:llä)
* lisää kanonisen osoitteen, Open Graph -tiedot ja faviconin
* kirjoittaa sivun tiedostoon public/esitykset/<slug>/index.html

Jakokuva og.jpg (1200×630) tehdään erikseen, ks. scripts/esitykset/README tai
esityksen JSON-asetus. Ajo repon juuresta:

    python3 -I scripts/julkaise-sarjakuva.py <standalone.html> scripts/esitykset/<slug>.json
"""
from __future__ import annotations

import hashlib
import html
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://seise.org"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")  # Google Fonts palauttaa woff2:n vain modernille selaimelle


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    src, conf_path = Path(sys.argv[1]), Path(sys.argv[2])
    conf = json.loads(conf_path.read_text(encoding="utf-8"))
    slug, title, desc = conf["slug"], conf["title"], conf["description"]
    base = f"/esitykset/{slug}/"
    out_dir = ROOT / "public" / "esitykset" / slug
    assets = out_dir / "assets"
    assets.mkdir(parents=True, exist_ok=True)
    page = src.read_text(encoding="utf-8")

    # 1) Skriptit cdnjs:stä omalle palvelimelle.
    def local_script(m: re.Match) -> str:
        url = m.group(1)
        name = url.rsplit("/", 1)[-1]
        (assets / name).write_bytes(fetch(url))
        return f'<script src="{base}assets/{name}"'
    page, n_js = re.subn(r'<script src="(https://cdnjs\.cloudflare\.com/[^"]+)"', local_script, page)

    # 2) Google Fonts -CSS ja fonttitiedostot omalle palvelimelle.
    def local_fonts(m: re.Match) -> str:
        css = fetch(m.group(1)).decode("utf-8")

        def local_font(fm: re.Match) -> str:
            url = fm.group(1)
            data = fetch(url)
            name = hashlib.sha256(url.encode()).hexdigest()[:10] + ".woff2"
            (assets / name).write_bytes(data)
            return f'url("{base}assets/{name}")'
        css = re.sub(r'url\((https://fonts\.gstatic\.com/[^)]+)\)', local_font, css)
        (assets / "fonts.css").write_text(css, encoding="utf-8")
        return f'@import url("{base}assets/fonts.css")'
    page, n_css = re.subn(r'@import url\("(https://fonts\.googleapis\.com/[^"]+)"\)', local_fonts, page)

    left = re.findall(r'https://(?:cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)[^"\')\s]*', page)
    if left:
        raise SystemExit(f"Ulkoisia latauksia jäi sivulle: {left[:3]}")

    # 3) Otsikko ja jakotiedot.
    canonical = f"{SITE}{base}"
    t, d = html.escape(title, quote=True), html.escape(desc, quote=True)
    page = re.sub(r"<title>[^<]*</title>", f"<title>{t} · Matti Seise</title>", page, count=1)
    page = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{d}">', page, count=1)
    page = page.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "")
    head_extra = "\n".join([
        f'<link rel="canonical" href="{canonical}">',
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
        '<meta name="theme-color" content="#080B16">',
        '<meta property="og:type" content="website">',
        '<meta property="og:locale" content="fi_FI">',
        '<meta property="og:site_name" content="Matti Seise">',
        f'<meta property="og:title" content="{t}">',
        f'<meta property="og:description" content="{d}">',
        f'<meta property="og:url" content="{canonical}">',
        f'<meta property="og:image" content="{canonical}og.jpg">',
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        '<meta name="twitter:card" content="summary_large_image">',
    ])
    page = page.replace("</title>\n", "</title>\n" + head_extra + "\n", 1)

    (out_dir / "index.html").write_text(page, encoding="utf-8")
    size = (out_dir / "index.html").stat().st_size
    print(f"{out_dir.relative_to(ROOT)}/index.html: {size / 1e6:.2f} Mt; skriptejä {n_js}, fonttitiedostoja {n_css} CSS")
    if not (out_dir / "og.jpg").exists():
        print("HUOM: og.jpg puuttuu (1200×630).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
