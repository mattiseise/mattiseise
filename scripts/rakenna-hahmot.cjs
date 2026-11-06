#!/usr/bin/env node
/*
 * Piirtää sarjakuvaesitysten hahmot seise.orgin kuviksi (public/hahmot/*.svg).
 *
 * Hahmot tulevat suoraan sarjakuvamoottorista (mattiseise/sarjakuvaesitys, engine/core.js), joten sivuston
 * ravut ja opettaja ovat samat kuin esityksissä. Aja uudelleen, kun hahmojen ulkonäkö muuttuu moottorissa:
 *
 *   node scripts/rakenna-hahmot.cjs ~/Projektit/web/sarjakuvaesitys
 *
 * Jokaiseen SVG:hen upotetaan pieni tyyli (räpyttely, keinunta, vilkuilu), joka toimii myös <img>-kuvana.
 * Vähennetty liike pysäyttää animaatiot.
 */
const fs = require('fs');
const path = require('path');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const repo = process.argv[2];
if (!repo || !fs.existsSync(path.join(repo, 'engine/core.js'))) {
  console.error('Käyttö: node scripts/rakenna-hahmot.cjs <sarjakuvaesitys-repon polku>');
  process.exit(1);
}
const out = path.join(__dirname, '..', 'public', 'hahmot');
fs.mkdirSync(out, { recursive: true });

global.window = global;
global.document = { addEventListener() {}, removeEventListener() {} };
global.localStorage = { getItem() { return null; }, setItem() {} };
let src = fs.readFileSync(path.join(repo, 'engine/core.js'), 'utf8');
// bot() piirtää koko hahmon; ydin ei vie sitä ulos, joten se lisätään palautukseen tätä ajoa varten.
src = src.replace(/return \{\n\s+Theater,/, 'return { bot, Theater,');
const core = new Function(src + '\nreturn createSarjakuva;')()({ React, theme: { display: 'Anton' } });

const cast = {};
for (const slug of ['agenttiputki', 'opettajan-apurit', 'esteiden-raivaajat']) {
  const d = JSON.parse(fs.readFileSync(path.join(repo, 'esitykset', slug, 'content.json'), 'utf8'));
  const { byId } = core.prepCast(d);
  for (const [id, a] of Object.entries(byId)) if (a && a.look && !cast[id]) cast[id] = { a, byId };
}

const STYLE = `<style>
.agx-float{animation:agxBob 3.2s ease-in-out infinite}
.agx-eyes{transform-box:fill-box;transform-origin:center;animation:var(--agx-blink,agxBlinkB 4.3s) var(--agx-blink-d,0s) infinite}
.agx-look{animation:agxLook 3.4s ease-in-out infinite}
.agx-wave{animation:agxWave 1.1s ease-in-out infinite alternate}
.agx-conduct{animation:agxConduct 1.2s ease-in-out infinite alternate}
.agx-glow{opacity:0;animation:agxGlow 2.4s ease-in-out infinite}
.agx-led{animation:agxLed 1.6s steps(2,jump-none) infinite}
@keyframes agxBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes agxBlinkA{0%,95.3%,100%{transform:scaleY(1)}97.7%{transform:scaleY(.1)}}
@keyframes agxBlinkB{0%,96.5%,100%{transform:scaleY(1)}98.3%{transform:scaleY(.1)}}
@keyframes agxBlinkC{0%,97.3%,100%{transform:scaleY(1)}98.6%{transform:scaleY(.1)}}
@keyframes agxBlinkD{0%,97.8%,100%{transform:scaleY(1)}98.9%{transform:scaleY(.1)}}
@keyframes agxLook{0%,40%{transform:translate(0,0)}50%,70%{transform:translate(-12px,2px)}80%,100%{transform:translate(4px,-4px)}}
@keyframes agxWave{from{transform:rotate(-10deg)}to{transform:rotate(14deg)}}
@keyframes agxConduct{from{transform:rotate(-22deg)}to{transform:rotate(16deg)}}
@keyframes agxGlow{0%,100%{opacity:.1}50%{opacity:.45}}
@keyframes agxLed{0%{opacity:1}50%{opacity:.35}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
</style>`;

const h = React.createElement;
const finish = (svg) => svg
  .replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ')
  .replace(/^(<svg[^>]*>)/, `$1${STYLE}`);

// Pääkuvat (avatarit): moottorin oma rajaus.
const AVATARS = ['claus', 'opettaja', 'sune', 'rasmus', 'viggo', 'oskar', 'ingrid', 'linnea', 'wilhelm', 'alfred', 'borje',
  'eriyttaja', 'viikkopolku', 'nayttoprojekti', 'es-korostin', 'sarakevalitsin', 'muokkaaja'];
for (const id of AVATARS) {
  const c = cast[id];
  if (!c) { console.warn('puuttuu:', id); continue; }
  const svg = renderToStaticMarkup(h(core.Avatar, { a: c.a, size: 240, byId: c.byId }))
    .replace(/ width="240" height="240"/, '').replace(/ aria-hidden="true"| focusable="false"| class="agx-avatar"/g, '');
  fs.writeFileSync(path.join(out, `${id}.svg`), finish(svg));
}

// Kokovartalot heroon ja osioihin. Rajaus on mitattu selaimessa (getBBox) + väljyys heiluvalle kädelle.
const FULL = [
  ['claus', 'wave', '-380 -520 760 540'],
  ['claus', 'point', '-380 -520 780 540'],
  ['opettaja', 'wave', '-200 -440 430 440'],
  ['opettaja', 'rest', '-200 -440 400 440'],
  ['sune', 'wave', '-380 -530 760 550'],
  ['linnea', 'rest', '-380 -660 760 680'],
  ['wilhelm', 'rest', '-380 -540 760 560'],
  ['borje', 'wave', '-380 -520 760 540'],
];
for (const [id, pose, box] of FULL) {
  const a = cast[id].a;
  const svg = renderToStaticMarkup(h('svg', { viewBox: box, style: { '--c': a.color } },
    core.bot(a, { x: 0, y: 0, s: 1, mood: 'happy', pose })));
  fs.writeFileSync(path.join(out, `${id}-${pose}.svg`), finish(svg));
}
console.log('valmis:', fs.readdirSync(out).length, 'kuvaa →', path.relative(process.cwd(), out));
