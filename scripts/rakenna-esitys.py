#!/usr/bin/env python3
"""Purkaa Claude Designin standalone-HTML-viennin staattiseksi esityssivuksi.

Käyttö (repon juuresta):
    python3 -I scripts/rakenna-esitys.py <vienti.html> scripts/esitykset/<slug>.json

Asetustiedosto (JSON): slug, title, description, skip (data-labelit, jotka
piilotetaan) ja replace ([vanha, uusi] -parit dioihin, esim. oikean henkilön
nimi pois julkiselta sivulta). Jokaisen korvattavan tekstin on löydyttävä
viennistä tasan kerran, muuten rakennus pysähtyy — näin muuttunut Claude
Design -lähde ei ohita korjausta hiljaa.

Tulos: public/esitykset/<slug>/index.html + assets/. Sivu toimii ilman
ulkoisia latauksia (React, fontit ja kuvat omasta kansiosta), puhujan
muistiinpanot poistetaan ja päälle
lisätään koko näytön painike, paluulinkki ja mobiilin kääntövihje
(scripts/esitys-ui/). Jakokuva og.jpg (1200×630) tehdään käsin ja säilyy
uudelleenrakennuksessa.

Vaatii: macOS sips, cwebp (brew install webp).
"""
import argparse
import base64
import gzip
import html
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path


REPO = Path(__file__).resolve().parent.parent
UI_DIR = Path(__file__).resolve().parent / "esitys-ui"

EXT_NAMES = {
    "https://unpkg.com/react@18.3.1/umd/react.production.min.js": "react.production.min.js",
    "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js": "react-dom.production.min.js",
}
MIME_EXT = {
    "image/png": ".png", "image/jpeg": ".jpg", "image/webp": ".webp", "image/svg+xml": ".svg",
    "text/javascript": ".js", "application/javascript": ".js", "text/css": ".css",
    "font/woff2": ".woff2", "font/woff": ".woff", "font/ttf": ".ttf",
}
# Kuvat isompia kuin tämä (tavua) muunnetaan WebP:ksi ja kavennetaan diakokoon.
WEBP_THRESHOLD = 150_000
MAX_W = 1920


def block(src: str, kind: str):
    m = re.search(r'<script type="__bundler/%s">\s*(.*?)\s*</script>' % re.escape(kind), src, re.S)
    if not m:
        sys.exit(f"bundle-lohko puuttuu: {kind}")
    return json.loads(m.group(1))


def js_name(data: bytes, uuid: str) -> str:
    head = data[:1500].decode("utf-8", "replace")
    if "dc-runtime" in head:
        return "dc-runtime.js"
    if "@ds-bundle" in head:
        return "design-system.js"
    if "<deck-stage>" in head or "deck-stage" in head:
        return "deck-stage.js"
    return uuid[:8] + ".js"


def to_webp(path: Path) -> Path:
    info = subprocess.run(["sips", "-g", "pixelWidth", "-g", "hasAlpha", str(path)],
                          check=True, capture_output=True, text=True).stdout
    width = int(re.search(r"pixelWidth: (\d+)", info).group(1))
    out = path.with_suffix(".webp")
    args = ["cwebp", "-quiet", "-q", "82", "-m", "6"]
    if width > MAX_W:
        args += ["-resize", str(MAX_W), "0"]
    if "hasAlpha: yes" in info:
        args += ["-alpha_q", "90"]
    subprocess.run(args + [str(path), "-o", str(out)], check=True)
    path.unlink()
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("bundle")
    ap.add_argument("config", help="scripts/esitykset/<slug>.json")
    args = ap.parse_args()
    cfg = json.loads(Path(args.config).read_text(encoding="utf-8"))
    slug = cfg["slug"]

    src = Path(args.bundle).read_text(encoding="utf-8")
    manifest = block(src, "manifest")
    template = block(src, "template")
    ext = {e["uuid"]: e["id"] for e in block(src, "ext_resources")}

    base = f"/esitykset/{slug}/"
    out = REPO / "public" / "esitykset" / slug
    # og.jpg on käsin tehty jakokuva — säilytetään, muu rakennetaan uusiksi.
    if (out / "assets").exists():
        shutil.rmtree(out / "assets")
    (out / "assets").mkdir(parents=True)

    urls, resources = {}, {}
    for uuid, entry in manifest.items():
        data = base64.b64decode(entry["data"])
        if entry.get("compressed"):
            data = gzip.decompress(data)
        mime = entry["mime"].split(";")[0]
        if uuid in ext:
            name = EXT_NAMES.get(ext[uuid], uuid[:8] + ".js")
        elif mime.endswith("javascript"):
            name = js_name(data, uuid)
        else:
            name = uuid[:8] + MIME_EXT.get(mime, ".bin")
        p = out / "assets" / name
        p.write_bytes(data)
        if mime in ("image/png", "image/jpeg") and len(data) > WEBP_THRESHOLD:
            p = to_webp(p)
        urls[uuid] = base + "assets/" + p.name
        if uuid in ext:
            resources[ext[uuid]] = urls[uuid]

    for uuid, url in urls.items():
        template = template.replace(uuid, url)

    # Puhujan muistiinpanot eivät kuulu julkiselle sivulle.
    template = re.sub(r'\s+data-speaker-notes="[^"]*"', "", template)
    template = re.sub(r'<script[^>]*id="speaker-notes".*?</script>', "", template, flags=re.S)
    for old, new in cfg.get("replace", []):
        n = template.count(old)
        if n != 1:
            sys.exit(f"korvattava teksti löytyi {n} kertaa (pitää olla 1): {old[:80]}")
        template = template.replace(old, new)
    for label in cfg.get("skip", []):
        needle = f'<section data-label="{label}"'
        if needle not in template:
            sys.exit(f"diaa ei löytynyt: {label}")
        template = template.replace(needle, needle + " data-deck-skip=\"\"", 1)

    t, d = html.escape(cfg["title"]), html.escape(cfg["description"])
    # Netlify ohjaa kansio-osoitteet loppukauttaviivaan (301), joten canonical on sen muotoinen.
    canonical = f"https://seise.org{base}"
    head = f"""<title>{t} · Matti Seise</title>
<meta name="description" content="{d}">
<link rel="canonical" href="{canonical}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#080B16">
<meta property="og:type" content="website">
<meta property="og:locale" content="fi_FI">
<meta property="og:site_name" content="Matti Seise">
<meta property="og:title" content="{t}">
<meta property="og:description" content="{d}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="https://seise.org{base}og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<script>window.__resources = {json.dumps(resources)};</script>
<link rel="stylesheet" href="{base}esitys-ui.css">
"""
    template = template.replace('<meta name="viewport" content="width=device-width, initial-scale=1">',
                                '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + head, 1)
    template = template.replace("<html>", '<html lang="fi">', 1)

    ui_html = (UI_DIR / "esitys-ui.html").read_text(encoding="utf-8")
    template = template.replace("</body>", ui_html + f'\n<script src="{base}esitys-ui.js" defer></script>\n</body>', 1)
    for f in ("esitys-ui.css", "esitys-ui.js"):
        shutil.copy(UI_DIR / f, out / f)

    (out / "index.html").write_text(template, encoding="utf-8")
    total = sum(f.stat().st_size for f in out.rglob("*") if f.is_file())
    print(f"{out.relative_to(REPO)}: {len(urls)} tiedostoa, yhteensä {total / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
