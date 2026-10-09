/* @ds-bundle: {"format":4,"namespace":"SinihetkiDesignSystem_72c0e6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Huom","sourcePath":"components/core/Huom.jsx"},{"name":"Kortti","sourcePath":"components/core/Kortti.jsx"},{"name":"Merkki","sourcePath":"components/core/Merkki.jsx"},{"name":"Koodi","sourcePath":"components/data/Koodi.jsx"},{"name":"Pala","sourcePath":"components/data/Koodi.jsx"},{"name":"Rivi","sourcePath":"components/data/Rivi.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Alatunniste","sourcePath":"components/layout/Alatunniste.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Navi","sourcePath":"components/layout/Navi.jsx"},{"name":"Osio","sourcePath":"components/layout/Osio.jsx"},{"name":"Kuvakaista","sourcePath":"components/media/Kuvakaista.jsx"},{"name":"Kuvakehys","sourcePath":"components/media/Kuvakehys.jsx"},{"name":"Kuvapaikka","sourcePath":"components/media/Kuvapaikka.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8e510ec82dd8","components/core/Button.jsx":"6e482e22b0bb","components/core/Eyebrow.jsx":"d468f605afad","components/core/Huom.jsx":"1f3d8b6af20a","components/core/Kortti.jsx":"72aba9f4df07","components/core/Merkki.jsx":"0b67cf922823","components/data/Koodi.jsx":"572c86060584","components/data/Rivi.jsx":"9199afc4b1a6","components/data/Stat.jsx":"396334b39ffb","components/layout/Alatunniste.jsx":"565134587bba","components/layout/Hero.jsx":"3dc45a5b84dc","components/layout/Navi.jsx":"66239d828e05","components/layout/Osio.jsx":"a7a114e1e675","components/media/Kuvakaista.jsx":"afbcab5905f2","components/media/Kuvakehys.jsx":"5a4e0310a9a0","components/media/Kuvapaikka.jsx":"3b4e6da5b41e","slides/Diat.jsx":"8790d5cf85b4","ui_kits/aiperusteet/Kurssietusivu.jsx":"b837c123f1ad","ui_kits/aiperusteet/Oppitunti.jsx":"89b853fc6bf1","ui_kits/seise-org/Blogiartikkeli.jsx":"d163e1f70e7c","ui_kits/seise-org/Etusivu.jsx":"11ce020aef3a","ui_kits/seise-org/Koulutussivu.jsx":"9b42e6c7469a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SinihetkiDesignSystem_72c0e6 = window.SinihetkiDesignSystem_72c0e6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tilamerkintä: lime = onnistuminen/"Tulossa", syaani = neutraali, kelta = varoitus. */
function Badge({
  savy = 'lime',
  children,
  style,
  ...rest
}) {
  const varit = {
    lime: 'var(--sh-lime)',
    syaani: 'var(--sh-syaani-teksti)',
    kelta: 'var(--sh-kelta)',
    magenta: 'var(--sh-magenta)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--sh-leipa)',
      fontSize: 11.5,
      fontWeight: 'var(--sh-paino-luku)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: varit[savy],
      border: `1px solid ${varit[savy]}`,
      borderRadius: 'var(--sh-r-pilleri)',
      padding: '4px 12px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sinihetki-painike. Ensisijainen on syaani→sini-liukuväri, toissijainen
 * hairline-reunallinen läpinäkyvä pilleri. Nosto hoverissa (-2px).
 */
function Button({
  variantti = 'ensisijainen',
  koko = 'normaali',
  href,
  disabled = false,
  ikoni,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const padding = koko === 'pieni' ? '9px 16px' : koko === 'iso' ? '15px 28px' : '12px 22px';
  const fontSize = koko === 'pieni' ? 13 : koko === 'iso' ? 16 : 14.5;
  const perus = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    borderRadius: 'var(--sh-r-pilleri)',
    padding,
    fontSize,
    fontWeight: 'var(--sh-paino-ui)',
    fontFamily: 'var(--sh-leipa)',
    textDecoration: 'none',
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    lineHeight: 1.2,
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--sh-nopea) var(--sh-easing),box-shadow .25s,border-color .25s,color .25s',
    transform: hover && !disabled ? 'var(--sh-nosto)' : 'none',
    boxShadow: hover && !disabled ? 'var(--sh-varjo-nosto)' : 'none'
  };
  const variantit = {
    ensisijainen: {
      background: 'var(--sh-cta)',
      color: 'var(--sh-teksti-kaanteinen)'
    },
    toissijainen: {
      background: 'transparent',
      border: `1.5px solid ${hover && !disabled ? 'var(--sh-syaani)' : 'var(--sh-viiva-2)'}`,
      color: hover && !disabled ? 'var(--sh-syaani-teksti)' : 'var(--sh-teksti)'
    },
    haamu: {
      background: 'transparent',
      border: 0,
      color: hover && !disabled ? 'var(--sh-syaani-teksti)' : 'var(--sh-himmea)',
      padding: koko === 'pieni' ? '9px 10px' : '12px 12px'
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...perus,
      ...variantit[variantti],
      ...style
    }
  }, rest), ikoni, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 12 px versaali eyebrow, välistys .16em. Oletusväri syaani; magenta joka toiseen. */
function Eyebrow({
  vari = 'syaani',
  numero,
  children,
  style,
  ...rest
}) {
  const varit = {
    syaani: 'var(--sh-syaani-teksti)',
    magenta: 'var(--sh-magenta)',
    himmea: 'var(--sh-himmea)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--sh-leipa)',
      fontSize: 'var(--sh-eyebrow)',
      letterSpacing: 'var(--sh-eyebrow-ls)',
      textTransform: 'uppercase',
      fontWeight: 'var(--sh-paino-ui)',
      color: varit[vari],
      ...style
    }
  }, rest), numero ? `${numero} · ` : '', children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Huom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Huomiolaatikko: syaani 3px vasen reuna, muuten hairline. Enintään ~70ch. */
function Huom({
  otsikko,
  savy = 'syaani',
  children,
  style,
  ...rest
}) {
  const varit = {
    syaani: 'var(--sh-syaani)',
    magenta: 'var(--sh-magenta)',
    kelta: 'var(--sh-kelta)',
    lime: 'var(--sh-lime)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--sh-viiva-2)',
      borderLeft: `3px solid ${varit[savy]}`,
      borderRadius: '0 var(--sh-r-kortti) var(--sh-r-kortti) 0',
      background: 'var(--sh-pinta)',
      padding: '16px 20px',
      maxWidth: '70ch',
      fontFamily: 'var(--sh-leipa)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--sh-himmea)',
      ...style
    }
  }, rest), otsikko && /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--sh-teksti)'
    }
  }, otsikko, " "), children);
}
Object.assign(__ds_scope, { Huom });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Huom.jsx", error: String((e && e.message) || e) }); }

// components/core/Kortti.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kohotettu pinta: --sh-pinta, hairline-reuna, 16 px kulmat, valinnainen hehku. */
function Kortti({
  hehku,
  nosto = false,
  radius = 'kortti',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const hehkuvari = hehku && {
    syaani: 'var(--sh-syaani)',
    sini: 'var(--sh-sini)',
    indigo: 'var(--sh-indigo)',
    magenta: 'var(--sh-magenta)',
    lime: 'var(--sh-lime)'
  }[hehku];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sh-pinta)',
      border: `1px solid ${hover && nosto ? 'var(--sh-viiva-2)' : 'var(--sh-viiva)'}`,
      borderRadius: radius === 'iso' ? 'var(--sh-r-iso)' : 'var(--sh-r-kortti)',
      padding: 20,
      fontFamily: 'var(--sh-leipa)',
      color: 'var(--sh-teksti)',
      transition: 'transform var(--sh-keski) var(--sh-easing),border-color .25s',
      transform: hover && nosto ? 'var(--sh-nosto-iso)' : 'none',
      ...style
    }
  }, rest), hehkuvari && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto -30% -70% -30%',
      height: 130,
      background: hehkuvari,
      filter: 'blur(var(--sh-hehku-blur))',
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Kortti });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kortti.jsx", error: String((e && e.message) || e) }); }

// components/core/Merkki.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hairline-pilleri (chip). Hoverissa reuna ja teksti syaaniksi. */
function Merkki({
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: `1px solid ${hover ? 'var(--sh-syaani)' : 'var(--sh-viiva-2)'}`,
      borderRadius: 'var(--sh-r-pilleri)',
      padding: '6px 14px',
      fontFamily: 'var(--sh-leipa)',
      fontSize: 12.5,
      color: hover ? 'var(--sh-syaani-teksti)' : 'var(--sh-himmea)',
      transition: 'var(--sh-nopea)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Merkki });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Merkki.jsx", error: String((e && e.message) || e) }); }

// components/data/Koodi.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Koodilohko JetBrains Monolla. Aina tumma pohja — myös Päivä-tilassa. */
function Koodi({
  kieli,
  rivit = [],
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("pre", _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--sh-mono)',
      fontSize: 13.5,
      lineHeight: 1.65,
      background: '#080B16',
      color: '#EAF0FF',
      border: '1px solid #EAF0FF14',
      borderRadius: 'var(--sh-r-koodi)',
      padding: '14px 16px',
      overflowX: 'auto',
      ...style
    }
  }, rest), kieli && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#94A3C4',
      marginBottom: 8
    }
  }, kieli), children ?? rivit.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, r)));
}

/** Väritetty pala koodilohkon sisällä: avainsana, merkkijono, muuttuja, kommentti. */
function Pala({
  laji = 'k',
  children
}) {
  const varit = {
    k: '#22D3EE',
    s: '#A3E635',
    m: '#F0459B',
    kommentti: '#EAF0FF80'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: varit[laji]
    }
  }, children);
}
Object.assign(__ds_scope, { Koodi, Pala });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Koodi.jsx", error: String((e && e.message) || e) }); }

// components/data/Rivi.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Listarivi: Anton-numero, otsikko + alaotsikko, oikealla pvm tai badge. */
function Rivi({
  nro,
  otsikko,
  alaotsikko,
  oikea,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '16px 4px',
      borderBottom: '1px solid var(--sh-viiva)',
      textDecoration: 'none',
      fontFamily: 'var(--sh-leipa)',
      color: 'var(--sh-teksti)',
      background: hover ? 'var(--sh-pinta)' : 'transparent',
      transition: 'background var(--sh-nopea)',
      ...style
    }
  }, rest), nro && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sh-display)',
      fontSize: 20,
      width: 34,
      flexShrink: 0,
      color: hover ? 'var(--sh-syaani-teksti)' : 'var(--sh-himmea)',
      transition: 'color var(--sh-nopea)'
    }
  }, nro), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--sh-paino-ui)'
    }
  }, otsikko), alaotsikko && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--sh-himmea)'
    }
  }, alaotsikko)), oikea && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      color: 'var(--sh-himmea)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, oikea));
}
Object.assign(__ds_scope, { Rivi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Rivi.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tilastokortti: Anton-lukuarvo + selite, alahehku. Käytä 3–4 rivissä. */
function Stat({
  arvo,
  selite,
  hehku = 'syaani',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const varit = {
    syaani: 'var(--sh-syaani)',
    sini: 'var(--sh-sini)',
    indigo: 'var(--sh-indigo)',
    magenta: 'var(--sh-magenta)',
    lime: 'var(--sh-lime)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--sh-pinta)',
      border: `1px solid ${hover ? 'var(--sh-viiva-2)' : 'var(--sh-viiva)'}`,
      borderRadius: 'var(--sh-r-kortti)',
      padding: 20,
      fontFamily: 'var(--sh-leipa)',
      transition: 'transform var(--sh-keski) var(--sh-easing),border-color .25s',
      transform: hover ? 'var(--sh-nosto-iso)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto -30% -70% -30%',
      height: 130,
      background: varit[hehku],
      filter: 'blur(var(--sh-hehku-blur))',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--sh-display)',
      fontSize: 34,
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: 'var(--sh-display-ls)',
      color: 'var(--sh-teksti)'
    }
  }, arvo), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 8,
      fontSize: 12.8,
      lineHeight: 1.4,
      color: 'var(--sh-himmea)'
    }
  }, selite));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/layout/Alatunniste.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Alatunniste: hairline yläreuna, himmeä 13.5px teksti. */
function Alatunniste({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      padding: '40px 0 60px',
      borderTop: '1px solid var(--sh-viiva)',
      color: 'var(--sh-himmea)',
      fontSize: 13.5,
      fontFamily: 'var(--sh-leipa)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--sh-wrap)',
      margin: '0 auto',
      padding: '0 22px'
    }
  }, children));
}
Object.assign(__ds_scope, { Alatunniste });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Alatunniste.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hero: keskisävypesu + kolme blur-hehkupilveä (syaani, indigo, magenta).
 * Syaani on suurin ja kirkkain — ylivaltasääntö.
 */
function Hero({
  eyebrow,
  otsikko,
  lead,
  napit,
  oikea,
  alaosa,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '84px 0 60px',
      background: 'linear-gradient(180deg,#0C1226,#080B16)',
      fontFamily: 'var(--sh-leipa)',
      color: 'var(--sh-teksti)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(1200px 820px at 62% 32%,#1B2A5E80,transparent 72%),radial-gradient(900px 500px at 18% 88%,#14204A73,transparent 75%)'
    }
  }), [{
    w: 680,
    h: 680,
    c: 'var(--sh-syaani)',
    top: -220,
    right: -160,
    o: 0.55
  }, {
    w: 560,
    h: 560,
    c: 'var(--sh-indigo)',
    top: 20,
    left: -200,
    o: 0.62
  }, {
    w: 420,
    h: 420,
    c: 'var(--sh-magenta)',
    bottom: -190,
    left: '38%',
    o: 0.32
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: p.w,
      height: p.h,
      background: p.c,
      opacity: p.o,
      top: p.top,
      right: p.right,
      left: p.left,
      bottom: p.bottom,
      borderRadius: '50%',
      filter: 'blur(var(--sh-hehku-blur-iso))',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--sh-wrap)',
      margin: '0 auto',
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: oikea ? '1.15fr .85fr' : '1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--sh-eyebrow)',
      letterSpacing: 'var(--sh-eyebrow-ls)',
      textTransform: 'uppercase',
      fontWeight: 'var(--sh-paino-ui)',
      color: 'var(--sh-syaani-teksti)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--sh-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 'var(--sh-display-ls)',
      lineHeight: 'var(--sh-display-lh)',
      fontSize: 'var(--sh-h1)',
      maxWidth: '14ch',
      color: '#CFDCF4'
    }
  }, otsikko), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--sh-lead)',
      color: 'var(--sh-himmea)',
      maxWidth: '54ch',
      margin: '24px 0 30px'
    }
  }, lead), napit && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 30
    }
  }, napit), alaosa), oikea)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Navi.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sticky-navigaatio: läpinäkyvä pohja + blur 16px, hairline alareunassa.
 * Brändi on tekstilogo — järjestelmässä ei ole logotiedostoa.
 */
function Navi({
  brandi = 'Sinihetki',
  korostus = 'hetki',
  linkit = [],
  oikea,
  style,
  ...rest
}) {
  const [i, setI] = React.useState(null);
  const nimi = korostus && brandi.includes(korostus) ? [brandi.slice(0, brandi.indexOf(korostus)), korostus, brandi.slice(brandi.indexOf(korostus) + korostus.length)] : [brandi, '', ''];
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb,var(--sh-pohja) 85%,transparent)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--sh-viiva)',
      fontFamily: 'var(--sh-leipa)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--sh-wrap)',
      margin: '0 auto',
      padding: '14px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sh-display)',
      fontSize: 19,
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      color: 'var(--sh-teksti)'
    }
  }, nimi[0], /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sh-syaani-teksti)'
    }
  }, nimi[1]), nimi[2]), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 14
    }
  }, linkit.map((l, n) => /*#__PURE__*/React.createElement("a", {
    key: l.teksti,
    href: l.href,
    onMouseEnter: () => setI(n),
    onMouseLeave: () => setI(null),
    style: {
      textDecoration: 'none',
      fontWeight: 'var(--sh-paino-nosto)',
      color: l.aktiivinen || i === n ? 'var(--sh-syaani-teksti)' : 'var(--sh-himmea)',
      transition: 'color var(--sh-nopea)'
    }
  }, l.teksti))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--sh-himmea)'
    }
  }, oikea)));
}
Object.assign(__ds_scope, { Navi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Navi.jsx", error: String((e && e.message) || e) }); }

// components/layout/Osio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Osio: 84 px pystyväli, hairline yläreunassa, eyebrow + H2 + johdanto. */
function Osio({
  numero,
  eyebrow,
  otsikko,
  johdanto,
  eyebrowVari = 'syaani',
  leveys,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      padding: 'var(--sh-osio) 0',
      borderTop: '1px solid var(--sh-viiva)',
      fontFamily: 'var(--sh-leipa)',
      color: 'var(--sh-teksti)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: leveys || 'var(--sh-wrap)',
      margin: '0 auto',
      padding: '0 22px'
    }
  }, (eyebrow || numero) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--sh-eyebrow)',
      letterSpacing: 'var(--sh-eyebrow-ls)',
      textTransform: 'uppercase',
      fontWeight: 'var(--sh-paino-ui)',
      color: eyebrowVari === 'magenta' ? 'var(--sh-magenta)' : 'var(--sh-syaani-teksti)'
    }
  }, numero ? `${numero} · ` : '', eyebrow), otsikko && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--sh-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 'var(--sh-display-ls)',
      lineHeight: 'var(--sh-display-lh)',
      fontSize: 'var(--sh-h2)'
    }
  }, otsikko), johdanto && /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '58ch',
      margin: '16px 0 0',
      color: 'var(--sh-himmea)',
      fontSize: 16.5,
      lineHeight: 1.6
    }
  }, johdanto), children));
}
Object.assign(__ds_scope, { Osio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Osio.jsx", error: String((e && e.message) || e) }); }

// components/media/Kuvapaikka.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kuvapaikka — paikanvaraaja oikealle valokuvalle. Järjestelmässä ei ole
 * kuvatiedostoja (omat kuvat: mattiseise/public/images/, generoitu pankki:
 * /Volumes/Tallennus/webimages/), joten mockit merkitään näkyvästi.
 */
function Kuvapaikka({
  nimi = 'kuvapaikka',
  suhde = '16/9',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      aspectRatio: suhde,
      width: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(160deg,#0C1226,#0F1424 55%,#111A34)',
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(70% 60% at 30% 20%,#22D3EE1F,transparent 70%),radial-gradient(60% 50% at 80% 90%,#6366F12E,transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--sh-mono)',
      fontSize: 11.5,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#EAF0FF66',
      border: '1px dashed #EAF0FF2B',
      borderRadius: 'var(--sh-r-pilleri)',
      padding: '5px 12px'
    }
  }, nimi));
}
Object.assign(__ds_scope, { Kuvapaikka });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Kuvapaikka.jsx", error: String((e && e.message) || e) }); }

// components/media/Kuvakaista.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Täysleveä kuvakaista otsikolla. Scrim tekstin puolelle JA tekstikerrokselle
 * z-index 2 — ilman sitä kalvo maalataan tekstin päälle ja otsikko harmaantuu.
 */
function Kuvakaista({
  src,
  alt = '',
  polttopiste = '50% 50%',
  korkeus = 280,
  eyebrow,
  otsikko,
  paikkanimi,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      height: korkeus,
      overflow: 'hidden',
      borderRadius: 'var(--sh-r-iso)',
      fontFamily: 'var(--sh-leipa)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      objectPosition: polttopiste,
      filter: 'saturate(.9)'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Kuvapaikka, {
    nimi: paikkanimi || alt || 'kuvakaista',
    suhde: "auto",
    style: {
      height: '100%',
      aspectRatio: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'linear-gradient(90deg,var(--sh-scrim) 0%,color-mix(in srgb,var(--sh-scrim) 78%,transparent) 42%,transparent 70%),linear-gradient(180deg,#22D3EE1A,transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--sh-wrap)',
      margin: '0 auto',
      padding: '0 22px',
      width: '100%'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--sh-eyebrow)',
      letterSpacing: 'var(--sh-eyebrow-ls)',
      textTransform: 'uppercase',
      fontWeight: 'var(--sh-paino-ui)',
      color: 'var(--sh-syaani)'
    }
  }, eyebrow), otsikko && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--sh-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 'var(--sh-display-ls)',
      lineHeight: 'var(--sh-display-lh)',
      fontSize: 'clamp(28px,4.6vw,52px)',
      maxWidth: '16ch',
      color: '#EAF0FF',
      textShadow: '0 2px 16px #080B16CC'
    }
  }, otsikko), children)));
}
Object.assign(__ds_scope, { Kuvakaista });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Kuvakaista.jsx", error: String((e && e.message) || e) }); }

// components/media/Kuvakehys.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kuvakehys — 22 px kulmat, hairline-reuna, hidas zoom hoverissa.
 * sidottu=true lisää sinihetki-kalvon (saturate .85 contrast 1.06 + syaani→indigo),
 * joka sitoo lämpimät kuvat palettiin. Viileät kuvat käyvät ilman.
 */
function Kuvakehys({
  src,
  alt = '',
  polttopiste = '50% 50%',
  suhde = '16/9',
  sidottu = false,
  kuvateksti,
  paikkanimi,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      background: 'var(--sh-pinta)',
      border: '1px solid var(--sh-viiva)',
      borderRadius: 'var(--sh-r-iso)',
      overflow: 'hidden',
      fontFamily: 'var(--sh-leipa)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: suhde,
      overflow: 'hidden'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      objectPosition: polttopiste,
      filter: sidottu ? 'var(--sh-kuva-filtteri)' : 'saturate(.95) contrast(.98)',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform var(--sh-hidas) var(--sh-easing)'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Kuvapaikka, {
    nimi: paikkanimi || alt || 'kuvapaikka',
    suhde: suhde,
    style: {
      height: '100%'
    }
  }), sidottu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--sh-kuva-kalvo)',
      pointerEvents: 'none'
    }
  })), kuvateksti && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: '14px 18px',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--sh-himmea)'
    }
  }, kuvateksti));
}
Object.assign(__ds_scope, { Kuvakehys });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Kuvakehys.jsx", error: String((e && e.message) || e) }); }

// slides/Diat.jsx
try { (() => {
const {
  Kuvapaikka,
  Kuvakehys,
  Koodi,
  Pala,
  Badge,
  Merkki,
  Stat
} = window.SinihetkiDesignSystem_72c0e6;
const DIA = {
  width: 1280,
  height: 720,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'var(--sh-leipa)'
};
const OTSIKKO = {
  fontFamily: 'var(--sh-display)',
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '.01em',
  lineHeight: 1.06,
  margin: 0
};
const EYEBROW = {
  fontSize: 18,
  letterSpacing: '.16em',
  textTransform: 'uppercase',
  fontWeight: 600
};
function Hehkut() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 720,
      height: 720,
      borderRadius: '50%',
      background: 'var(--sh-syaani)',
      filter: 'blur(110px)',
      opacity: .5,
      top: -260,
      right: -180
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 560,
      height: 560,
      borderRadius: '50%',
      background: 'var(--sh-indigo)',
      filter: 'blur(110px)',
      opacity: .55,
      bottom: -240,
      left: -160
    }
  }));
}

/** Kansidia — Yö-tila, sinihetki-kuva puolikkaana kaistana. */
function Kansidia() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...DIA,
      background: 'linear-gradient(180deg,#0C1226,#080B16)',
      color: '#EAF0FF',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr'
    }
  }, /*#__PURE__*/React.createElement(Hehkut, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '72px 0 72px 72px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani)'
    }
  }, "Matti Seise \xB7 koulutus 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...OTSIKKO,
      fontSize: 86,
      marginTop: 22,
      maxWidth: '13ch'
    }
  }, "Oman AI-", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sh-syaani)'
    }
  }, "agentin"), " rakentaminen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      color: 'var(--sh-himmea)',
      marginTop: 26,
      maxWidth: '28ch',
      lineHeight: 1.5
    }
  }, "6-osainen sarja \xB7 osa 1: mit\xE4 agentti on ja mit\xE4 se ei ole"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Merkki, {
    style: {
      fontSize: 16,
      padding: '8px 18px'
    }
  }, "90 min"), /*#__PURE__*/React.createElement(Merkki, {
    style: {
      fontSize: 16,
      padding: '8px 18px'
    }
  }, "verkko"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Kuvapaikka, {
    nimi: "sinihetki \xB7 lumipelto",
    suhde: "auto",
    style: {
      height: '100%',
      aspectRatio: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,#080B16 0%,#080B1600 38%),linear-gradient(140deg,#22D3EE2E,transparent 55%,#6366F14D)'
    }
  })));
}

/** Välidia — Yö-tila, iso numero ja jakson nimi. */
function Validia() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...DIA,
      background: 'linear-gradient(180deg,#0C1226,#080B16)',
      color: '#EAF0FF',
      display: 'flex',
      alignItems: 'center',
      padding: '0 72px'
    }
  }, /*#__PURE__*/React.createElement(Hehkut, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-magenta)'
    }
  }, "Osa 03"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 58,
      marginTop: 20,
      maxWidth: '20ch'
    }
  }, "Ohjeistus ja rajat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      color: 'var(--sh-himmea)',
      marginTop: 22,
      maxWidth: '40ch',
      lineHeight: 1.5
    }
  }, "Agentin ohjeistus on tekstitiedosto, ei asetusvalikko \u2014 ja siksi se luetaan yhdess\xE4 \xE4\xE4neen.")));
}

/** Sisältödia — Päivä-tila, otsikko + kolme nostoa. */
function Sisaltodia() {
  const kohdat = [['Rajaa tehtävä', 'Agentti tekee yhden asian kerrallaan. Laaja tehtävä tuottaa laajaa sotkua.'], ['Kirjoita kielto ensin', 'Se mitä ei saa tehdä on tärkeämpää kuin se mitä saa.'], ['Testaa oikealla työllä', 'Keksitty esimerkki toimii aina; oma viikko ei.']];
  return /*#__PURE__*/React.createElement("div", {
    "data-tila": "paiva",
    style: {
      ...DIA,
      background: 'var(--sh-pohja)',
      color: 'var(--sh-teksti)',
      padding: '64px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani-teksti)',
      fontSize: 17
    }
  }, "Osa 03 \xB7 Ohjeistus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 40,
      marginTop: 16,
      maxWidth: '24ch'
    }
  }, "Kolme s\xE4\xE4nt\xF6\xE4 hyv\xE4\xE4n ohjeistukseen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22,
      marginTop: 44
    }
  }, kohdat.map(([o, s], i) => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      background: 'var(--sh-pinta)',
      border: '1px solid var(--sh-viiva)',
      borderRadius: 16,
      padding: 26,
      position: 'relative',
      overflow: 'hidden'
    }
  }, i === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto -30% -70% -30%',
      height: 160,
      background: 'var(--sh-syaani)',
      filter: 'blur(48px)',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--sh-display)',
      fontSize: 30,
      color: 'var(--sh-syaani-teksti)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontWeight: 600,
      fontSize: 24,
      marginTop: 12
    }
  }, o), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontSize: 22,
      color: 'var(--sh-himmea)',
      marginTop: 10,
      lineHeight: 1.5
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      bottom: 40,
      fontSize: 17,
      color: 'var(--sh-himmea)',
      fontFamily: 'var(--sh-mono)'
    }
  }, "aiperusteet.fi \xB7 Sinihetki v1"));
}

/** Koodidia — Päivä-tila, koodi tummalla kortilla. */
function Koodidia() {
  return /*#__PURE__*/React.createElement("div", {
    "data-tila": "paiva",
    style: {
      ...DIA,
      background: 'var(--sh-pohja)',
      color: 'var(--sh-teksti)',
      padding: '64px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani-teksti)',
      fontSize: 17
    }
  }, "Osa 03 \xB7 Esimerkki"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 40,
      marginTop: 16
    }
  }, "Ohjeistus tiedostona"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr .75fr',
      gap: 34,
      marginTop: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Koodi, {
    kieli: "agentti.md",
    style: {
      fontSize: 22,
      lineHeight: 1.7,
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# Teht\xE4v\xE4"), '\n', "Tiivist\xE4 muistiinpanot kolmeen kohtaan.", '\n\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# Rajat"), '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "\xC4l\xE4"), " tallenna nimi\xE4.", '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "Kysy"), " tarkennus, jos konteksti puuttuu.", '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "Vastaa"), " aina ", /*#__PURE__*/React.createElement(Pala, {
    laji: "s"
  }, "suomeksi"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      lineHeight: 1.6,
      color: 'var(--sh-himmea)'
    }
  }, "Kolme rivi\xE4 kieltoa s\xE4\xE4st\xE4\xE4 enemm\xE4n aikaa kuin kolme sivua ohjeita.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    savy: "lime"
  }, "Kokeiltu luokassa")))));
}

/** Kuvadia — täysleveä kuvakaista, otsikko scrimin päällä. */
function Kuvadia() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...DIA,
      background: '#080B16',
      color: '#EAF0FF'
    }
  }, /*#__PURE__*/React.createElement(Kuvapaikka, {
    nimi: "helsinki \xB7 sinihetki",
    suhde: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      height: '100%',
      aspectRatio: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,#080B16E6 0%,#080B16B8 42%,transparent 72%),linear-gradient(180deg,#22D3EE1A,transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      padding: '0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani)'
    }
  }, "V\xE4liaika"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 58,
      marginTop: 18,
      maxWidth: '16ch',
      textShadow: '0 2px 16px #080B16CC'
    }
  }, "Jatkamme 15 minuutin kuluttua"))));
}

/** Vertailudia — Päivä-tila, kaksi puolta hairline-erottimella. */
function Vertailudia() {
  const puoli = (otsikko, vari, rivit) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: vari,
      fontSize: 17
    }
  }, otsikko), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      marginTop: 22
    }
  }, rivit.map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 12,
      fontSize: 23,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--sh-mono)',
      color: vari,
      flexShrink: 0
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, r)))));
  return /*#__PURE__*/React.createElement("div", {
    "data-tila": "paiva",
    style: {
      ...DIA,
      background: 'var(--sh-pohja)',
      color: 'var(--sh-teksti)',
      padding: '64px 42px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani-teksti)',
      fontSize: 17
    }
  }, "Osa 01"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 40,
      marginTop: 16
    }
  }, "Mihin agentti kelpaa \u2014 ja mihin ei")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: 0,
      marginTop: 44
    }
  }, puoli('Kelpaa', 'var(--sh-syaani-teksti)', ['Toistuvien tekstien luonnostelu', 'Muistiinpanojen tiivistäminen', 'Materiaalin eriyttäminen kahdelle tasolle']), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--sh-viiva-2)'
    }
  }), puoli('Ei kelpaa', 'var(--sh-magenta)', ['Oppilastietojen käsittely', 'Arvosanan päättäminen', 'Lähteiden tarkistaminen ilman ihmistä'])));
}

/** Lukudia — statistiikkarivi, tiheä pinta. */
function Lukudia() {
  return /*#__PURE__*/React.createElement("div", {
    "data-tila": "paiva",
    style: {
      ...DIA,
      background: 'var(--sh-pohja)',
      color: 'var(--sh-teksti)',
      padding: '64px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...EYEBROW,
      color: 'var(--sh-syaani-teksti)',
      fontSize: 17
    }
  }, "Kysely 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...OTSIKKO,
      fontSize: 40,
      marginTop: 16,
      maxWidth: '26ch'
    }
  }, "Mit\xE4 opettajat sanoivat kokeilun j\xE4lkeen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    arvo: "78 %",
    selite: "k\xE4ytti ty\xF6kalua uudelleen kahden viikon sis\xE4ll\xE4",
    style: {
      padding: 26
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "12 h",
    selite: "arvioitu s\xE4\xE4st\xF6 kuukaudessa",
    hehku: "sini",
    style: {
      padding: 26
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "3/4",
    selite: "halusi jatkokoulutusta",
    hehku: "magenta",
    style: {
      padding: 26
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "0",
    selite: "oppilastietoa sy\xF6tettiin malliin",
    hehku: "lime",
    style: {
      padding: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      fontSize: 22,
      color: 'var(--sh-himmea)',
      maxWidth: '60ch',
      lineHeight: 1.55
    }
  }, "Luvut ovat esimerkki\xE4 diapohjan mitoitusta varten \u2014 oikea aineisto tulee kyselyn tuloksista."));
}
Object.assign(window, {
  Kansidia,
  Validia,
  Sisaltodia,
  Koodidia,
  Kuvadia,
  Vertailudia,
  Lukudia
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Diat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aiperusteet/Kurssietusivu.jsx
try { (() => {
const {
  Hero,
  Osio,
  Button,
  Merkki,
  Stat,
  Rivi,
  Badge,
  Kortti,
  Huom
} = window.SinihetkiDesignSystem_72c0e6;
function Kurssietusivu({
  avaa
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "aiperusteet.fi \xB7 avoin verkkokurssi",
    otsikko: /*#__PURE__*/React.createElement(React.Fragment, null, "Teko\xE4lyn ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sh-syaani-teksti)'
      }
    }, "perusteet"), " opettajalle"),
    lead: "Kuusi osaa, jokainen luettavissa yhden v\xE4litunnin aikana. Ei koodausta, ei hype\xE4 \u2014 vain se mit\xE4 opetusty\xF6ss\xE4 kannattaa tiet\xE4\xE4.",
    napit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => avaa('oppitunti')
    }, "Aloita osa 1"), /*#__PURE__*/React.createElement(Button, {
      variantti: "toissijainen",
      onClick: () => avaa('oppitunti')
    }, "Selaa sis\xE4lt\xF6\xE4")),
    alaosa: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 9,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Merkki, null, "maksuton"), /*#__PURE__*/React.createElement(Merkki, null, "ei kirjautumista"), /*#__PURE__*/React.createElement(Merkki, null, "p\xE4ivitetty 2026-08"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--sh-wrap)',
      margin: '-28px auto 0',
      padding: '0 22px',
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    arvo: "6",
    selite: "osaa, noin 15 min kappale"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "0 \u20AC",
    selite: "maksuton ja avoin",
    hehku: "sini"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "18",
    selite: "harjoitusta omaan ty\xF6h\xF6n",
    hehku: "magenta"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "AA",
    selite: "saavutettavuustaso",
    hehku: "lime"
  }))), /*#__PURE__*/React.createElement(Osio, {
    numero: "01",
    eyebrow: "Sis\xE4lt\xF6",
    otsikko: "Kuusi osaa j\xE4rjestyksess\xE4",
    johdanto: "Osat rakentuvat p\xE4\xE4llekk\xE4in. Voit hyp\xE4t\xE4 suoraan kiinnostavaan, mutta j\xE4rjestys on mietitty."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      borderTop: '1px solid var(--sh-viiva)'
    }
  }, /*#__PURE__*/React.createElement(Rivi, {
    nro: "01",
    otsikko: "Mit\xE4 kielimalli tekee",
    alaotsikko: "15 min \xB7 perusteet",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Valmis"),
    href: "#",
    onClick: () => avaa('oppitunti')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "02",
    otsikko: "Kehotteet ja tarkennukset",
    alaotsikko: "15 min",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Valmis"),
    href: "#",
    onClick: () => avaa('oppitunti')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "03",
    otsikko: "Tietosuoja ja oppilastiedot",
    alaotsikko: "20 min \xB7 pakollinen",
    oikea: "kesken",
    href: "#",
    onClick: () => avaa('oppitunti')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "04",
    otsikko: "Eriytt\xE4minen k\xE4yt\xE4nn\xF6ss\xE4",
    alaotsikko: "15 min",
    oikea: "\u2014",
    href: "#",
    onClick: () => avaa('oppitunti')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "05",
    otsikko: "Arviointi ja palaute",
    alaotsikko: "15 min",
    oikea: "\u2014",
    href: "#",
    onClick: () => avaa('oppitunti')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "06",
    otsikko: "Mihin teko\xE4ly ei kelpaa",
    alaotsikko: "10 min",
    oikea: "\u2014",
    href: "#",
    onClick: () => avaa('oppitunti')
  })), /*#__PURE__*/React.createElement(Huom, {
    otsikko: "Miksi P\xE4iv\xE4-tila sis\xE4lt\xF6sivuilla.",
    style: {
      marginTop: 26
    }
  }, "Kurssia luetaan valoisissa luokissa ja projisoidaan sein\xE4lle. Sis\xE4lt\xF6sivut ovat siksi vaaleita, ja etusivu sek\xE4 kannet pysyv\xE4t Y\xF6-tilassa.")), /*#__PURE__*/React.createElement(Osio, {
    numero: "02",
    eyebrow: "Kohderyhm\xE4",
    eyebrowVari: "magenta",
    otsikko: "Kenelle t\xE4m\xE4 on"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginTop: 26
    }
  }, [['Luokanopettaja', 'Arjen työkalut: eriyttäminen, materiaalit, viestintä.'], ['Erityisopettaja', 'Tukitoimien kirjaaminen ja HOJKS-työn valmistelu.'], ['Rehtori', 'Mitä koulussa pitää sopia ennen kuin työkalut otetaan käyttöön.']].map(([o, s], i) => /*#__PURE__*/React.createElement(Kortti, {
    key: o,
    nosto: true,
    hehku: i === 0 ? 'syaani' : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sh-display)',
      fontSize: 22,
      textTransform: 'uppercase',
      lineHeight: 1.06
    }
  }, o), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--sh-himmea)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, s))))));
}
window.Kurssietusivu = Kurssietusivu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aiperusteet/Kurssietusivu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aiperusteet/Oppitunti.jsx
try { (() => {
const {
  Button,
  Badge,
  Merkki,
  Kortti,
  Huom,
  Koodi,
  Pala,
  Kuvakehys
} = window.SinihetkiDesignSystem_72c0e6;
const OSAT = [['01', 'Mitä kielimalli tekee', 'valmis'], ['02', 'Kehotteet ja tarkennukset', 'valmis'], ['03', 'Tietosuoja ja oppilastiedot', 'kesken'], ['04', 'Eriyttäminen käytännössä', ''], ['05', 'Arviointi ja palaute', ''], ['06', 'Mihin tekoäly ei kelpaa', '']];
function Oppitunti({
  avaa
}) {
  const [valittu, setValittu] = React.useState('03');
  return /*#__PURE__*/React.createElement("div", {
    "data-tila": "paiva",
    style: {
      background: 'var(--sh-pohja)',
      color: 'var(--sh-teksti)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '34px 22px 84px',
      display: 'grid',
      gridTemplateColumns: '270px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 82
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-syaani-teksti)'
    }
  }, "Kurssin osat"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      borderTop: '1px solid var(--sh-viiva)'
    }
  }, OSAT.map(([nro, nimi, tila]) => {
    const on = valittu === nro;
    return /*#__PURE__*/React.createElement("button", {
      key: nro,
      onClick: () => setValittu(nro),
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'baseline',
        width: '100%',
        textAlign: 'left',
        padding: '11px 10px',
        border: 0,
        borderBottom: '1px solid var(--sh-viiva)',
        background: on ? 'var(--sh-pinta)' : 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--sh-leipa)',
        fontSize: 14,
        color: on ? 'var(--sh-teksti)' : 'var(--sh-himmea)',
        borderLeft: on ? '3px solid var(--sh-syaani)' : '3px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--sh-mono)',
        fontSize: 12,
        color: on ? 'var(--sh-syaani-teksti)' : 'var(--sh-himmea)'
      }
    }, nro), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: on ? 600 : 400,
        flex: 1
      }
    }, nimi), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--sh-mono)',
        fontSize: 12,
        color: tila === 'valmis' ? 'var(--sh-lime)' : 'var(--sh-himmea)'
      }
    }, tila === 'valmis' ? '✓' : tila === 'kesken' ? '·' : ''));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontSize: 12.5,
      color: 'var(--sh-himmea)'
    }
  }, "Edistyminen 2/6"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 99,
      background: 'var(--sh-pinta-2)',
      marginTop: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '33%',
      height: '100%',
      background: 'linear-gradient(95deg,var(--sh-syaani),var(--sh-sini))'
    }
  }))), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: '72ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-syaani-teksti)'
    }
  }, "Osa 03 \xB7 20 min"), /*#__PURE__*/React.createElement(Badge, {
    savy: "kelta"
  }, "Pakollinen")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--sh-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      lineHeight: 1.06,
      fontSize: 'clamp(38px,5vw,62px)'
    }
  }, "Tietosuoja ja oppilastiedot"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--sh-himmea)',
      margin: '20px 0 0',
      lineHeight: 1.65
    }
  }, "T\xE4m\xE4 osa k\xE4yd\xE4\xE4n l\xE4pi ennen kuin mit\xE4\xE4n ty\xF6kalua k\xE4ytet\xE4\xE4n oppilaiden kanssa. S\xE4\xE4nt\xF6 on yksinkertainen, mutta sen soveltaminen ei aina ole."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginTop: 26,
      fontSize: 16.5,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Oppilaan nimi, syntym\xE4aika, diagnoosi tai tukitoimi ei mene kaupalliseen kielimalliin. K\xE4yt\xE4nn\xF6ss\xE4 t\xE4m\xE4 tarkoittaa, ett\xE4 aineisto anonymisoidaan ennen sy\xF6tt\xE4mist\xE4 \u2014 ja ett\xE4 anonymisointi tehd\xE4\xE4n k\xE4sin, ei mallilla."), /*#__PURE__*/React.createElement(Huom, {
    otsikko: "Muista."
  }, "Jos et voisi l\xE4hett\xE4\xE4 samaa teksti\xE4 s\xE4hk\xF6postilla ulkopuoliselle, sit\xE4 ei sy\xF6tet\xE4 malliin."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--sh-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      lineHeight: 1.06,
      fontSize: 30
    }
  }, "Anonymisointi k\xE4yt\xE4nn\xF6ss\xE4"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Korvaa nimet rooleilla ja poista tunnisteet. Alla oleva pohja riitt\xE4\xE4 useimpiin tilanteisiin."), /*#__PURE__*/React.createElement(Koodi, {
    kieli: "pohja"
  }, /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# Ennen"), '\n', "Mikael, 4A, lukemisen tuki, HOJKS 2026", '\n\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# J\xE4lkeen"), '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "Oppilas A"), ", ", /*#__PURE__*/React.createElement(Pala, {
    laji: "s"
  }, "alakoulu"), ", tuen tarve: ", /*#__PURE__*/React.createElement(Pala, {
    laji: "m"
  }, "lukeminen")), /*#__PURE__*/React.createElement(Kuvakehys, {
    suhde: "16/9",
    paikkanimi: "luokkatilanne \xB7 p\xE4iv\xE4valo",
    sidottu: true,
    kuvateksti: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Kuvan paikka"), " \u2014 oikea valokuva puuttuu; polttopiste asetetaan kuvaa katsomalla.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Merkki, null, "tietosuoja"), /*#__PURE__*/React.createElement(Merkki, null, "anonymisointi"), /*#__PURE__*/React.createElement(Merkki, null, "HOJKS"))), /*#__PURE__*/React.createElement(Kortti, {
    style: {
      marginTop: 26,
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-syaani-teksti)'
    }
  }, "Teht\xE4v\xE4"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 16px',
      fontSize: 15.5,
      lineHeight: 1.65
    }
  }, "Ota yksi oma teksti, anonymisoi se pohjan mukaan ja vertaa: muuttuiko sis\xE4lt\xF6 niin ett\xE4 sit\xE4 ei voi en\xE4\xE4 k\xE4ytt\xE4\xE4?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    koko: "pieni"
  }, "Merkitse tehdyksi"), /*#__PURE__*/React.createElement(Button, {
    koko: "pieni",
    variantti: "toissijainen",
    onClick: () => avaa('etusivu')
  }, "Takaisin kurssin etusivulle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 26,
      borderTop: '1px solid var(--sh-viiva)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variantti: "haamu",
    koko: "pieni"
  }, "\u2190 Osa 02"), /*#__PURE__*/React.createElement(Button, {
    variantti: "haamu",
    koko: "pieni"
  }, "Osa 04 \u2192")))));
}
window.Oppitunti = Oppitunti;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aiperusteet/Oppitunti.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seise-org/Blogiartikkeli.jsx
try { (() => {
const {
  Osio,
  Merkki,
  Huom,
  Koodi,
  Pala,
  Kuvakehys,
  Button
} = window.SinihetkiDesignSystem_72c0e6;
function Blogiartikkeli({
  avaa
}) {
  return /*#__PURE__*/React.createElement(Osio, {
    numero: "",
    eyebrow: "Blogi \xB7 2026-08-04",
    otsikko: "Mit\xE4 106 arviota kertoi mausta",
    leveys: "880px",
    johdanto: "Arvioin 106 verkkosivua itse ja ajoin niist\xE4 piirreanalyysin. Kolme s\xE4\xE4nt\xF6\xE4 ylitti kohinan \u2014 loput ovat suuntaa antavia."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Merkki, null, "taste-engine"), /*#__PURE__*/React.createElement(Merkki, null, "menetelm\xE4"), /*#__PURE__*/React.createElement(Merkki, null, "2 \xB7 SE")), /*#__PURE__*/React.createElement(Kuvakehys, {
    style: {
      marginTop: 26
    },
    suhde: "16/9",
    paikkanimi: "mittausajon tuloste",
    sidottu: true,
    kuvateksti: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Piirreanalyysin tuloste"), " \u2014 kyll\xE4isyys, s\xE4vy, tiheys ja kontrasti per kortti.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginTop: 26,
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--sh-himmea)',
      maxWidth: '68ch'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "L\xE4ht\xF6kohta oli ep\xE4luulo omaa makuani kohtaan. Jos suosikkini ovat sattumaa, mik\xE4\xE4n ohje ei kanna \u2014 joten arvioin kortit ensin ja katsoin vasta sitten mit\xE4 niiss\xE4 oli yhteist\xE4."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--sh-teksti)',
      fontWeight: 500
    }
  }, "Kolme piirrett\xE4 laski arvion merkitsev\xE4sti: hillitty v\xE4ri (\u22120,49), harmaas\xE4vyisyys (\u22120,38) ja niukka sommittelu (\u22120,35)."), /*#__PURE__*/React.createElement(Koodi, {
    kieli: "bash"
  }, "python3 tools/facets.py --one ", /*#__PURE__*/React.createElement(Pala, {
    laji: "s"
  }, "screenshot.png"), '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# \u2192 tumma / keskitaso / voimakas / viile\xE4 sininen / laaja / tihe\xE4")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Tumma pohja toimii vain kyll\xE4isen ja laajan paletin kanssa. Tumma ja harmaa on mittarin pahin yhdistelm\xE4, ja se selitt\xE4\xE4 miksi useimmat \"hillityt\" tummat sivut j\xE4iv\xE4t h\xE4nnille."), /*#__PURE__*/React.createElement(Huom, {
    otsikko: "Mit\xE4 t\xE4st\xE4 seurasi."
  }, "Syaani sai ylivallan ja muut s\xE4vyt j\xE4iv\xE4t mausteiksi. S\xE4\xE4nt\xF6 on tokeneissa, ei muistin varassa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variantti: "toissijainen",
    onClick: () => avaa('etusivu')
  }, "\u2190 Takaisin etusivulle")));
}
window.Blogiartikkeli = Blogiartikkeli;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seise-org/Blogiartikkeli.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seise-org/Etusivu.jsx
try { (() => {
const {
  Hero,
  Osio,
  Button,
  Merkki,
  Stat,
  Rivi,
  Badge,
  Kortti,
  Kuvakehys,
  Kuvakaista,
  Huom
} = window.SinihetkiDesignSystem_72c0e6;
function Etusivu({
  avaa
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Matti Seise \xB7 erityisopettaja \xB7 koulutukset",
    otsikko: /*#__PURE__*/React.createElement(React.Fragment, null, "Sini", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sh-syaani-teksti)'
      }
    }, "hetki"), " on tapa n\xE4ytt\xE4\xE4 samalta kaikkialla"),
    lead: "Koulutuksia teko\xE4lyst\xE4 opetusty\xF6ss\xE4, kirjoituksia oppimisesta ja materiaalit joita voi k\xE4ytt\xE4\xE4 sellaisenaan. Tumma pohja, viile\xE4 paletti, ei koristelua joka kilpailee sis\xE4ll\xF6n kanssa.",
    napit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => avaa('koulutus')
    }, "Katso koulutukset"), /*#__PURE__*/React.createElement(Button, {
      variantti: "toissijainen",
      onClick: () => avaa('blogi')
    }, "Lue blogia")),
    alaosa: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 9,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Merkki, null, "erityisopetus"), /*#__PURE__*/React.createElement(Merkki, null, "teko\xE4ly opetusty\xF6ss\xE4"), /*#__PURE__*/React.createElement(Merkki, null, "aiperusteet.fi")),
    oikea: /*#__PURE__*/React.createElement(Kuvakehys, {
      suhde: "4/5",
      paikkanimi: "sinihetki \xB7 lumipelto",
      style: {
        background: 'transparent',
        border: '1px solid var(--sh-viiva-2)'
      }
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--sh-wrap)',
      margin: '-28px auto 0',
      padding: '0 22px',
      position: 'relative',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    arvo: "12",
    selite: "pidetty\xE4 koulutusta 2026"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "6",
    selite: "osaa AI-agenttisarjassa",
    hehku: "sini"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "900+",
    selite: "opettajaa kursseilla",
    hehku: "magenta"
  }), /*#__PURE__*/React.createElement(Stat, {
    arvo: "2",
    selite: "avointa verkkokurssia",
    hehku: "lime"
  }))), /*#__PURE__*/React.createElement(Osio, {
    numero: "01",
    eyebrow: "Koulutukset",
    otsikko: "Sis\xE4lt\xF6\xE4 joka on kokeiltu luokassa",
    johdanto: "Jokainen koulutus on ajettu l\xE4pi oikeassa ryhm\xE4ss\xE4 ennen kuin se tarjotaan. Materiaalit tulevat mukana."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      borderTop: '1px solid var(--sh-viiva)'
    }
  }, /*#__PURE__*/React.createElement(Rivi, {
    nro: "01",
    otsikko: "Oman AI-agentin rakentaminen",
    alaotsikko: "6-osainen sarja \xB7 verkko",
    oikea: "2026",
    href: "#",
    onClick: () => avaa('koulutus')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "02",
    otsikko: "Teko\xE4ly opettajan hallintoty\xF6ss\xE4",
    alaotsikko: "90 min \xB7 l\xE4hi tai verkko",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Tulossa"),
    href: "#",
    onClick: () => avaa('koulutus')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "03",
    otsikko: "Eriytt\xE4minen ja teko\xE4ly",
    alaotsikko: "puolikas p\xE4iv\xE4 \xB7 l\xE4hi",
    oikea: "2026",
    href: "#",
    onClick: () => avaa('koulutus')
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "04",
    otsikko: "aiperusteet.fi opettajan ty\xF6kaluna",
    alaotsikko: "45 min \xB7 verkko",
    oikea: "2025",
    href: "#",
    onClick: () => avaa('koulutus')
  }))), /*#__PURE__*/React.createElement(Osio, {
    numero: "02",
    eyebrow: "Kirjoitukset",
    eyebrowVari: "magenta",
    otsikko: "Blogi",
    johdanto: "Muistiinpanoja siit\xE4 mik\xE4 toimi ja mik\xE4 ei. Ei ennustuksia, vain se mit\xE4 tapahtui."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Kortti, {
    hehku: "syaani",
    nosto: true,
    style: {
      cursor: 'pointer'
    },
    onClick: () => avaa('artikkeli')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-syaani-teksti)'
    }
  }, "2026-08"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sh-display)',
      fontSize: 26,
      textTransform: 'uppercase',
      lineHeight: 1.06,
      margin: '10px 0 8px'
    }
  }, "Mit\xE4 106 arviota kertoi mausta"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--sh-himmea)',
      lineHeight: 1.6
    }
  }, "Mittasin oman makuni sen sijaan ett\xE4 arvasin sen. Kolme s\xE4\xE4nt\xF6\xE4 ylitti kohinan.")), /*#__PURE__*/React.createElement(Kortti, {
    nosto: true,
    style: {
      cursor: 'pointer'
    },
    onClick: () => avaa('artikkeli')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-magenta)'
    }
  }, "2026-06"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--sh-display)',
      fontSize: 26,
      textTransform: 'uppercase',
      lineHeight: 1.06,
      margin: '10px 0 8px'
    }
  }, "Agentti joka lukee HOJKSin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--sh-himmea)',
      lineHeight: 1.6
    }
  }, "Kokeilu, jossa kielimalli tiivisti tukitoimet \u2014 ja miss\xE4 se meni pieleen.")))), /*#__PURE__*/React.createElement(Osio, {
    numero: "03",
    eyebrow: "Materiaalit",
    otsikko: "Kaikki mit\xE4 koulutuksissa k\xE4ytet\xE4\xE4n"
  }, /*#__PURE__*/React.createElement(Kuvakaista, {
    korkeus: 280,
    style: {
      marginTop: 26
    },
    eyebrow: "Diat ja teht\xE4v\xE4t",
    otsikko: "Materiaalit sellaisenaan k\xE4ytt\xF6\xF6n",
    paikkanimi: "helsinki \xB7 sinihetki 3:1"
  }), /*#__PURE__*/React.createElement(Huom, {
    otsikko: "K\xE4ytt\xF6oikeus.",
    style: {
      marginTop: 26
    }
  }, "Materiaalit ovat vapaasti k\xE4ytett\xE4viss\xE4 omassa opetuksessa. L\xE4hde mainitaan, muokkaukset saa tehd\xE4.")));
}
window.Etusivu = Etusivu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seise-org/Etusivu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/seise-org/Koulutussivu.jsx
try { (() => {
const {
  Osio,
  Button,
  Badge,
  Merkki,
  Kortti,
  Rivi,
  Kuvakaista,
  Huom,
  Koodi,
  Pala
} = window.SinihetkiDesignSystem_72c0e6;
function Koulutussivu({
  avaa
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kuvakaista, {
    korkeus: 340,
    style: {
      borderRadius: 0
    },
    eyebrow: "Koulutus \xB7 6-osainen sarja",
    otsikko: "Oman AI-agentin rakentaminen",
    paikkanimi: "sinihetki \xB7 ty\xF6p\xF6yt\xE4"
  }), /*#__PURE__*/React.createElement(Osio, {
    numero: "",
    eyebrow: "Sis\xE4lt\xF6",
    otsikko: "Kuusi tapaamista, yksi valmis agentti",
    johdanto: "Sarja rakentaa osallistujan kanssa toimivan agentin omaan ty\xF6h\xF6n: mit\xE4 se tekee, mihin se ei kelpaa ja miten se pidet\xE4\xE4n turvallisena."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 26,
      marginTop: 26,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--sh-viiva)'
    }
  }, /*#__PURE__*/React.createElement(Rivi, {
    nro: "01",
    otsikko: "Mit\xE4 agentti on ja mit\xE4 se ei ole",
    alaotsikko: "90 min",
    oikea: "valmis"
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "02",
    otsikko: "Ty\xF6kalut ja rajapinnat",
    alaotsikko: "90 min",
    oikea: "valmis"
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "03",
    otsikko: "Ohjeistus ja rajat",
    alaotsikko: "90 min",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Tulossa")
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "04",
    otsikko: "Tietoturva ja oppilastiedot",
    alaotsikko: "90 min",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Tulossa")
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "05",
    otsikko: "Agentti omaan ty\xF6nkulkuun",
    alaotsikko: "90 min",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Tulossa")
  }), /*#__PURE__*/React.createElement(Rivi, {
    nro: "06",
    otsikko: "Yll\xE4pito ja arviointi",
    alaotsikko: "90 min",
    oikea: /*#__PURE__*/React.createElement(Badge, null, "Tulossa")
  })), /*#__PURE__*/React.createElement(Kortti, {
    hehku: "syaani",
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--sh-syaani-teksti)'
    }
  }, "K\xE4yt\xE4nn\xF6t"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      margin: '14px 0 18px',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sh-himmea)'
    }
  }, "Kesto"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "6 \xD7 90 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sh-himmea)'
    }
  }, "Ryhm\xE4"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "enint\xE4\xE4n 16")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sh-himmea)'
    }
  }, "Tila"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "verkko"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: '100%'
    },
    onClick: () => avaa('etusivu')
  }, "Kysy vapaista ajoista"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Merkki, null, "materiaalit mukana"), /*#__PURE__*/React.createElement(Merkki, null, "ei ennakkotietoja")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      display: 'grid',
      gap: 14,
      maxWidth: '74ch'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16.5,
      lineHeight: 1.7,
      color: 'var(--sh-himmea)'
    }
  }, "Kolmannessa tapaamisessa kirjoitetaan agentin ohjeistus. Se on tekstitiedosto, ei asetusvalikko \u2014 ja siksi se my\xF6s luetaan yhdess\xE4 l\xE4pi \xE4\xE4neen."), /*#__PURE__*/React.createElement(Koodi, {
    kieli: "agentti.md"
  }, /*#__PURE__*/React.createElement(Pala, {
    laji: "kommentti"
  }, "# Rajat"), '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "\xC4l\xE4"), " koskaan tallenna oppilaan nime\xE4.", '\n', /*#__PURE__*/React.createElement(Pala, {
    laji: "k"
  }, "Kysy"), " tarkennus, jos konteksti puuttuu."), /*#__PURE__*/React.createElement(Huom, {
    otsikko: "Tietoturva."
  }, "Oppilastietoja ei sy\xF6tet\xE4 malleihin. Harjoitukset tehd\xE4\xE4n keksityll\xE4 aineistolla, jonka saa mukaan."))));
}
window.Koulutussivu = Koulutussivu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/seise-org/Koulutussivu.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Huom = __ds_scope.Huom;

__ds_ns.Kortti = __ds_scope.Kortti;

__ds_ns.Merkki = __ds_scope.Merkki;

__ds_ns.Koodi = __ds_scope.Koodi;

__ds_ns.Pala = __ds_scope.Pala;

__ds_ns.Rivi = __ds_scope.Rivi;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alatunniste = __ds_scope.Alatunniste;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Navi = __ds_scope.Navi;

__ds_ns.Osio = __ds_scope.Osio;

__ds_ns.Kuvakaista = __ds_scope.Kuvakaista;

__ds_ns.Kuvakehys = __ds_scope.Kuvakehys;

__ds_ns.Kuvapaikka = __ds_scope.Kuvapaikka;

})();
