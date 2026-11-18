import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#070B12"/>
      <stop offset="0.55" stop-color="#05060A"/>
      <stop offset="1" stop-color="#0B0713"/>
    </linearGradient>
    <linearGradient id="accent" x1="80" y1="80" x2="620" y2="320" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4EE1D0"/>
      <stop offset="0.55" stop-color="#7C5CFF"/>
      <stop offset="1" stop-color="#FF5AC8"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0" cy="0" r="1" gradientTransform="translate(180 110) rotate(45) scale(480 380)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4EE1D0" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#4EE1D0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0" cy="0" r="1" gradientTransform="translate(1050 520) rotate(-135) scale(520 420)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF5AC8" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#FF5AC8" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" stroke="white" stroke-opacity="0.045"/>
    </pattern>
    <filter id="blur"><feGaussianBlur stdDeviation="36"/></filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glowA)"/>
  <rect width="1200" height="630" fill="url(#glowB)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <g opacity="0.9">
    <path d="M84 78 116 144H52L84 78Z" fill="url(#accent)"/>
    <path d="M84 100 103 139H65L84 100Z" fill="#05060A"/>
    <circle cx="84" cy="126" r="4" fill="#EAEEF7"/>
  </g>
  <text x="140" y="122" fill="#EAEEF7" font-family="sans-serif" font-size="28" font-weight="700" letter-spacing="-0.5">SPACECH.OS</text>
  <text x="140" y="150" fill="#93A0B8" font-family="monospace" font-size="13" letter-spacing="3">v2.6 “TANDIL” — PORTFOLIO</text>

  <text x="80" y="300" fill="#EAEEF7" font-family="sans-serif" font-size="84" font-weight="700" letter-spacing="-3">Matias Spacech</text>
  <text x="82" y="350" fill="url(#accent)" font-family="monospace" font-size="20" letter-spacing="2">DESARROLLADOR WEB · EGRESADO DE TUDAI</text>

  <text x="82" y="416" fill="#93A0B8" font-family="sans-serif" font-size="22">Interfaces rápidas, accesibles y con personalidad.</text>
  <text x="82" y="452" fill="#93A0B8" font-family="sans-serif" font-size="22">Aplicaciones web y móviles de punta a punta.</text>

  <g transform="translate(760 210)">
    <rect width="356" height="250" rx="16" fill="#0A0D14" fill-opacity="0.9" stroke="white" stroke-opacity="0.14"/>
    <circle cx="24" cy="24" r="4" fill="#FF5F57"/>
    <circle cx="40" cy="24" r="4" fill="#FFC857"/>
    <circle cx="56" cy="24" r="4" fill="#3DDC97"/>
    <text x="178" y="28" fill="#93A0B8" font-family="monospace" font-size="10" text-anchor="middle" letter-spacing="2">INICIO</text>
    <line x1="0" y1="46" x2="356" y2="46" stroke="white" stroke-opacity="0.1"/>
    <text x="24" y="80" fill="#4EE1D0" font-family="monospace" font-size="11">matias@spacech.os:~$</text>
    <text x="24" y="104" fill="#EAEEF7" font-family="monospace" font-size="13">whoami</text>
    <text x="24" y="130" fill="#93A0B8" font-family="monospace" font-size="11">Desarrollador Web</text>
    <text x="24" y="150" fill="#93A0B8" font-family="monospace" font-size="11">TUDAI · UNICEN · Argentina</text>
    <text x="24" y="190" fill="#4EE1D0" font-family="monospace" font-size="11">[ OK ] disponible para trabajar</text>
    <rect x="24" y="214" width="308" height="1" fill="white" fill-opacity="0.1"/>
    <text x="24" y="238" fill="#93A0B8" font-family="monospace" font-size="10">github.com/MatiasSpacech</text>
  </g>

  <text x="82" y="574" fill="#93A0B8" font-family="monospace" font-size="13" letter-spacing="2">MATIASSPACECH.GITHUB.IO</text>
  <text x="1118" y="574" fill="#93A0B8" font-family="monospace" font-size="13" text-anchor="end" letter-spacing="2">SPACECH.OS</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('OG image generada en public/og.png');
