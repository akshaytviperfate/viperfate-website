// VIPERFATE — Next-Gen Gaming Hardware Engine

// ==========================================
// 1. PRODUCT CATALOG WITH GAMIFIED STAT RATINGS
// ==========================================
const PRODUCTS = [
  // --- KEYBOARDS ---
  {
    id: "vf-kb-01",
    model: "VF-01",
    name: "VENOM 68%",
    category: "keyboards",
    layout: "68% MECHANICAL",
    tag: "68% OPTICAL",
    badge: "8000Hz POLLING",
    desc: "Ultra-compact 68% competitive keyboard featuring Gen-3 optical red switches, aircraft aluminum top plate, and sound-dampening acoustic foam.",
    switch: "VIPER Optical Red (45g Linear)",
    response: "0.12 ms",
    conn: "2.4GHz Wireless / USB-C",
    weight: "640g",
    speed: 98, precision: 96, durability: 99,
    svgType: "keyboard-venom68"
  },
  {
    id: "vf-kb-02",
    model: "VF-02",
    name: "VENOM PRO 75%",
    category: "keyboards",
    layout: "75% GASKET",
    tag: "75% PERFORMANCE",
    badge: "OLED & KNOB",
    desc: "75% gasket-mounted mechanical keyboard with OLED telemetry display, rotary knob, and hot-swappable optical switches.",
    switch: "VIPER Optical Speed (40g Linear)",
    response: "0.10 ms",
    conn: "Tri-Mode (2.4G / BT / USB-C)",
    weight: "780g",
    speed: 99, precision: 98, durability: 97,
    svgType: "keyboard-venom75"
  },
  {
    id: "vf-kb-03",
    model: "VF-03",
    name: "NAAGA TKL",
    category: "keyboards",
    layout: "TKL PRECISION",
    tag: "TENKEYLESS",
    badge: "SILENT OPTICAL",
    desc: "Tenkeyless esports keyboard engineered with silent dampened optical switches and per-key macro recording.",
    switch: "VIPER Silent Linear (45g)",
    response: "0.15 ms",
    conn: "Detachable Braided USB-C",
    weight: "890g",
    speed: 94, precision: 97, durability: 99,
    svgType: "keyboard-naagatkl"
  },
  {
    id: "vf-kb-04",
    model: "VF-04",
    name: "STING 75%",
    category: "keyboards",
    layout: "75% COMPETITIVE",
    tag: "RAPID TRIGGER",
    badge: "MAGNETIC HALL",
    desc: "Ultra-responsive rapid trigger magnetic optical keyboard with 0.1mm actuation point adjustment.",
    switch: "VIPER Magnetic Hall-Effect",
    response: "0.08 ms",
    conn: "2.4GHz Ultra Speed",
    weight: "720g",
    speed: 100, precision: 99, durability: 98,
    svgType: "keyboard-sting75"
  },

  // --- MICE ---
  {
    id: "vf-ms-01",
    model: "VF-M1",
    name: "FANG ULTRALIGHT",
    category: "mice",
    layout: "ULTRALIGHT 8K",
    tag: "49 GRAMS",
    badge: "32,000 DPI",
    desc: "Sub-50 gram wireless mouse with 8000Hz polling rate and PixArt 3395 optical sensor for pin-point accuracy.",
    switch: "VIPER Optical Micro Switches",
    response: "0.10 ms",
    conn: "2.4GHz Wireless 8K",
    weight: "49g",
    speed: 100, precision: 99, durability: 96,
    svgType: "mouse-fang"
  },
  {
    id: "vf-ms-02",
    model: "VF-M2",
    name: "STRIKE ERGO",
    category: "mice",
    layout: "ERGONOMIC 8K",
    tag: "PALM / CLAW",
    badge: "8000Hz WIRELESS",
    desc: "Ergonomically tuned right-handed mouse built for long tournament play with textured side grips.",
    switch: "VIPER Gen-2 Optical",
    response: "0.12 ms",
    conn: "2.4GHz Wireless / USB-C",
    weight: "58g",
    speed: 96, precision: 98, durability: 98,
    svgType: "mouse-ergo"
  },
  {
    id: "vf-ms-03",
    model: "VF-M3",
    name: "VIPER SWIFT",
    category: "mice",
    layout: "SYMMETRIC 8K",
    tag: "AMBIDEXTROUS",
    badge: "8000Hz POLLING",
    desc: "Symmetrical ultralight chassis designed for aggressive claw and fingertip grip styles.",
    switch: "VIPER Optical Switches",
    response: "0.10 ms",
    conn: "2.4GHz Wireless",
    weight: "52g",
    speed: 98, precision: 97, durability: 97,
    svgType: "mouse-swift"
  },

  // --- HEADSETS (EXACTLY 3 UNIQUE ITEMS) ---
  {
    id: "vf-hs-01",
    model: "VF-H1",
    name: "RATTLE WIRELESS",
    category: "headsets",
    layout: "SPATIAL AUDIO",
    tag: "50MM GRAPHENE",
    badge: "RED RGB HALO",
    desc: "Lossless 2.4GHz wireless spatial gaming headset with 50mm custom Graphene drivers, RGB halo rings, and noise-canceling mic.",
    switch: "50mm Graphene Drivers",
    response: "< 15ms Audio Latency",
    conn: "2.4GHz Wireless / Bluetooth",
    weight: "285g",
    speed: 95, precision: 98, durability: 97,
    svgType: "headset-rattle"
  },
  {
    id: "vf-hs-02",
    model: "VF-H2",
    name: "HISS PRO 7.1",
    category: "headsets",
    layout: "7.1 SURROUND",
    tag: "HONEYCOMB GRILL",
    badge: "CYAN CHROMA",
    desc: "7.1 Surround Sound headset with metal honeycomb mesh earcups, glowing cyan Viper Fangs emblem, and memory foam padding.",
    switch: "53mm Neodymium Drivers",
    response: "Full Frequency Spectrum",
    conn: "USB DAC / 3.5mm Jack",
    weight: "310g",
    speed: 92, precision: 99, durability: 98,
    svgType: "headset-hiss"
  },
  {
    id: "vf-hs-03",
    model: "VF-H3",
    name: "HOWL ULTRA SPATIAL",
    category: "headsets",
    layout: "CYBER SPATIAL",
    tag: "HEXAGONAL CHASSIS",
    badge: "PURPLE NEON",
    desc: "Futuristic esports spatial headset with cyber hexagonal earcups, addressable purple/magenta Chroma strip, and suspension headband.",
    switch: "50mm Titanium Composite",
    response: "3D Spatial Audio Engine",
    conn: "Ultra Wireless 2.4GHz",
    weight: "275g",
    speed: 97, precision: 99, durability: 96,
    svgType: "headset-howl"
  },

  // --- PC CASES / RGB CABINETS (EXACTLY 3 UNIQUE ITEMS) ---
  {
    id: "vf-cs-01",
    model: "VF-C1",
    name: "APEX FLOW GLASS",
    category: "cases",
    layout: "ATX DUAL GLASS",
    tag: "3 FRONT ARGB FANS",
    badge: "VERTICAL GPU",
    desc: "High-airflow ATX chassis with dual tempered glass panels, 3 front ARGB halo fans, and vertical GPU bracket.",
    switch: "Supports 360mm Rads",
    response: "High Thermal Dissipation",
    conn: "Type-C Front I/O",
    weight: "9.5 kg",
    speed: 96, precision: 95, durability: 100,
    svgType: "case-apex"
  },
  {
    id: "vf-cs-02",
    model: "VF-C2",
    name: "COBRA X PANORAMIC",
    category: "cases",
    layout: "PILLARLESS GLASS",
    tag: "6 ARGB DUAL-TONE",
    badge: "INFINITY SHROUD",
    desc: "Pillarless seamless panoramic glass chassis with 6 ARGB fans (cyan/magenta dual-tone) and infinity mirror PSU shroud.",
    switch: "Supports E-ATX / ATX",
    response: "360 Panoramic View",
    conn: "USB 3.2 Gen 2 Type-C",
    weight: "11.2 kg",
    speed: 98, precision: 96, durability: 100,
    svgType: "case-cobra"
  },
  {
    id: "vf-cs-03",
    model: "VF-C3",
    name: "VENOM GLASS CHAMBER",
    category: "cases",
    layout: "DUAL CHAMBER CUBE",
    tag: "9 HALO ARGB FANS",
    badge: "LCD PANEL SYNC",
    desc: "Dual-chamber cube showcase chassis with 9 halo ARGB fans (Venom green/crimson gradient) and front LCD telemetry display.",
    switch: "Dual Chamber System",
    response: "Max Liquid Cooling",
    conn: "Dual USB-C / ARGB Hub",
    weight: "12.8 kg",
    speed: 99, precision: 98, durability: 100,
    svgType: "case-venom"
  },

  // --- LIQUID COOLERS (EXACTLY 3 UNIQUE ITEMS) ---
  {
    id: "vf-cl-01",
    model: "VF-L1",
    name: "FROSTBITE 240 AIO",
    category: "cooling",
    layout: "240MM LIQUID",
    tag: "CIRCULAR LCD TEMP",
    badge: "2 ARGB FANS",
    desc: "240mm AIO liquid cooler with 2 ARGB high-static pressure fans and circular LCD pump block displaying live CPU temperature (38°C).",
    switch: "240mm Aluminum Rad",
    response: "Sub-40°C Load Temp",
    conn: "4-Pin PWM + ARGB Sync",
    weight: "1.4 kg",
    speed: 97, precision: 96, durability: 98,
    svgType: "cooler-frost240"
  },
  {
    id: "vf-cl-02",
    model: "VF-L2",
    name: "HYDRA FLOW 360 AIO",
    category: "cooling",
    layout: "360MM LIQUID",
    tag: "INFINITY MIRROR PUMP",
    badge: "3 DUAL-ZONE ARGB",
    desc: "360mm AIO liquid cooler with 3 dual-zone ARGB fans and a 3D infinity mirror pump block showcasing a glowing Viper Fate mark.",
    switch: "360mm Heavy Radiator",
    response: "Extreme Overclock Cooling",
    conn: "ARGB Sync + Software Hub",
    weight: "1.9 kg",
    speed: 99, precision: 98, durability: 99,
    svgType: "cooler-hydra360"
  },
  {
    id: "vf-cl-03",
    model: "VF-L3",
    name: "COILCORE 360 FLAGSHIP",
    category: "cooling",
    layout: "360MM FLAGSHIP",
    tag: "SQUARE IPS LCD",
    badge: "3 DAISY-CHAIN ARGB",
    desc: "Flagship 360mm AIO liquid cooler featuring 3 magnetic daisy-chain ARGB fans and square IPS LCD telemetry screen (34°C / 2400 RPM).",
    switch: "Custom Copper Coldplate",
    response: "Ultra Silent Pump Engine",
    conn: "VIPER Command Hub",
    weight: "2.1 kg",
    speed: 100, precision: 99, durability: 100,
    svgType: "cooler-coilcore360"
  },

  // --- KEYCAPS ---
  {
    id: "vf-kc-01",
    model: "VF-K1",
    name: "NEON OPS PBT",
    category: "keycaps",
    layout: "DOUBLESHOT PBT",
    tag: "CYBERPUNK SET",
    badge: "CHERRY PROFILE",
    desc: "Premium double-shot PBT keycap set with translucent neon legend side-print legends for RGB pass-through.",
    switch: "MX Stem Compatible",
    response: "Thick 1.5mm PBT",
    conn: "Universal Keyboards",
    weight: "320g",
    speed: 95, precision: 98, durability: 100,
    svgType: "keycaps-neon"
  },
  {
    id: "vf-kc-02",
    model: "VF-K2",
    name: "CYBER FANG PBT",
    category: "keycaps",
    layout: "DYE-SUB PBT",
    tag: "VIPER EDITION",
    badge: "OEM PROFILE",
    desc: "Custom dye-sublimated PBT keycaps featuring Viper fang novelties and crimson accent keycaps.",
    switch: "MX Stem Compatible",
    response: "Durable Textured PBT",
    conn: "60% / 75% / TKL / Full",
    weight: "340g",
    speed: 96, precision: 97, durability: 100,
    svgType: "keycaps-fang"
  },
  {
    id: "vf-kc-03",
    model: "VF-K3",
    name: "TACTICAL RED PBT",
    category: "keycaps",
    layout: "MIL-SPEC PBT",
    tag: "STEALTH RED",
    badge: "KAT PROFILE",
    desc: "Tactical matte black keycaps with crisp laser-engraved crimson legend caps for competitive stealth builds.",
    switch: "MX Stem Compatible",
    response: "Anti-Shine PBT",
    conn: "Universal Fit",
    weight: "310g",
    speed: 94, precision: 99, durability: 100,
    svgType: "keycaps-red"
  }
];

// ==========================================
// 2. ULTRA-REALISTIC RGB VECTOR SVG GENERATOR
// ==========================================
function getProductSVG(type) {
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || '#ff2018';
  
  // --- REALISTIC RGB GAMING KEYBOARDS ---
  if (type.startsWith("keyboard")) {
    return `
      <svg class="product-svg" viewBox="0 0 320 180">
        <defs>
          <!-- Per-Key Spectrum RGB Gradient -->
          <linearGradient id="chromaSpectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff2018"/>
            <stop offset="20%" stop-color="#ff7a18"/>
            <stop offset="40%" stop-color="#ffea00"/>
            <stop offset="60%" stop-color="#39ff14"/>
            <stop offset="80%" stop-color="#00f0ff"/>
            <stop offset="100%" stop-color="#bf00ff"/>
          </linearGradient>
          <filter id="rgbGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Keyboard Angled Chassis -->
        <polygon points="20,30 300,30 292,155 28,155" fill="#121216" stroke="#2c2c38" stroke-width="2.5"/>
        <polygon points="26,36 294,36 288,149 32,149" fill="#070709"/>

        <!-- Rainbow Chroma Backlight Plate underneath Keycaps -->
        <polygon points="30,40 290,40 285,145 35,145" fill="url(#chromaSpectrum)" opacity="0.85" filter="url(#rgbGlow)"/>

        <!-- Keycaps Layout (Realistic keycap caps with spacing & legends) -->
        <g fill="#181820" stroke="#252530" stroke-width="1" rx="2">
          <!-- Row 1: Function / Num Keys -->
          <rect x="36" y="44" width="16" height="15"/>
          <rect x="55" y="44" width="16" height="15"/>
          <rect x="74" y="44" width="16" height="15"/>
          <rect x="93" y="44" width="16" height="15"/>
          <rect x="112" y="44" width="16" height="15"/>
          <rect x="131" y="44" width="16" height="15"/>
          <rect x="150" y="44" width="16" height="15"/>
          <rect x="169" y="44" width="16" height="15"/>
          <rect x="188" y="44" width="16" height="15"/>
          <rect x="207" y="44" width="16" height="15"/>
          <rect x="226" y="44" width="16" height="15"/>
          <rect x="245" y="44" width="38" height="15" fill="#2a1215" stroke="${primaryColor}"/>

          <!-- Row 2: QWERTY -->
          <rect x="36" y="62" width="22" height="16"/>
          <rect x="61" y="62" width="16" height="16"/>
          <rect x="80" y="62" width="16" height="16"/>
          <rect x="99" y="62" width="16" height="16" fill="${primaryColor}" opacity="0.9"/>
          <rect x="118" y="62" width="16" height="16"/>
          <rect x="137" y="62" width="16" height="16"/>
          <rect x="156" y="62" width="16" height="16"/>
          <rect x="175" y="62" width="16" height="16"/>
          <rect x="194" y="62" width="16" height="16"/>
          <rect x="213" y="62" width="16" height="16"/>
          <rect x="232" y="62" width="50" height="16"/>

          <!-- Row 3: ASDF (WASD Highlighted in Crimson) -->
          <rect x="36" y="81" width="26" height="16"/>
          <rect x="65" y="81" width="16" height="16" fill="${primaryColor}"/>
          <rect x="84" y="81" width="16" height="16" fill="${primaryColor}"/>
          <rect x="103" y="81" width="16" height="16" fill="${primaryColor}"/>
          <rect x="122" y="81" width="16" height="16"/>
          <rect x="141" y="81" width="16" height="16"/>
          <rect x="160" y="81" width="16" height="16"/>
          <rect x="179" y="81" width="16" height="16"/>
          <rect x="198" y="81" width="16" height="16"/>
          <rect x="217" y="81" width="63" height="16" fill="#252535"/>

          <!-- Row 4: ZXCV -->
          <rect x="36" y="100" width="34" height="16"/>
          <rect x="73" y="100" width="16" height="16"/>
          <rect x="92" y="100" width="16" height="16"/>
          <rect x="111" y="100" width="16" height="16"/>
          <rect x="130" y="100" width="16" height="16"/>
          <rect x="149" y="100" width="16" height="16"/>
          <rect x="168" y="100" width="16" height="16"/>
          <rect x="187" y="100" width="16" height="16"/>
          <rect x="206" y="100" width="72" height="16"/>

          <!-- Row 5: Spacebar & Modifiers -->
          <rect x="36" y="119" width="24" height="18"/>
          <rect x="63" y="119" width="22" height="18"/>
          <rect x="88" y="119" width="22" height="18"/>
          <rect x="113" y="119" width="98" height="18" fill="#22222d" stroke="${primaryColor}" stroke-width="1.5"/>
          <rect x="214" y="119" width="20" height="18"/>
          <rect x="237" y="119" width="20" height="18"/>
          <rect x="260" y="119" width="20" height="18"/>
        </g>

        <!-- Side Edge RGB Underglow Strip -->
        <path d="M28 155 L292 155" stroke="url(#chromaSpectrum)" stroke-width="3" filter="url(#rgbGlow)"/>
      </svg>
    `;
  }

  // --- REALISTIC GAMING MICE ---
  if (type.startsWith("mouse")) {
    return `
      <svg class="product-svg" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="mouseGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#00f0ff"/>
            <stop offset="50%" stop-color="#ff2018"/>
            <stop offset="100%" stop-color="#bf00ff"/>
          </linearGradient>
        </defs>
        <!-- Mouse Shell -->
        <path d="M68 35 C68 12, 132 12, 132 35 L137 122 C137 172, 63 172, 63 122 Z" fill="#111116" stroke="#2a2a36" stroke-width="2.5"/>
        <path d="M72 40 L98 40 L98 75 L72 75 Z" fill="#181822"/>
        <path d="M102 40 L128 40 L128 75 L102 75 Z" fill="#181822"/>
        
        <!-- Illuminated Scroll Wheel -->
        <rect x="94" y="32" width="12" height="30" rx="4" fill="#09090c" stroke="${primaryColor}" stroke-width="2" filter="drop-shadow(0 0 5px ${primaryColor})"/>
        
        <!-- RGB Side Contour Lines -->
        <path d="M65 58 Q 60 95 65 130" stroke="url(#mouseGlow)" stroke-width="3" fill="none"/>
        <path d="M135 58 Q 140 95 135 130" stroke="url(#mouseGlow)" stroke-width="3" fill="none"/>
        
        <!-- Glowing Viper Fangs Logo on Palm Rest -->
        <path d="M90 135 L100 155 L110 135 M100 155 L100 162" stroke="${primaryColor}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0 0 8px ${primaryColor})"/>
      </svg>
    `;
  }

  // --- REALISTIC GAMING HEADSETS (3 UNIQUE DESIGNS) ---
  if (type === "headset-rattle") {
    // 1. RATTLE SPATIAL: Red RGB Halo Ring
    return `
      <svg class="product-svg" viewBox="0 0 220 220">
        <path d="M40 115 C40 38, 180 38, 180 115" fill="none" stroke="#252532" stroke-width="16" stroke-linecap="round"/>
        <path d="M50 105 C50 48, 170 48, 170 105" fill="none" stroke="${primaryColor}" stroke-width="3" opacity="0.8"/>
        <!-- Left Cup -->
        <circle cx="45" cy="135" r="34" fill="#111116" stroke="#333342" stroke-width="2"/>
        <circle cx="45" cy="135" r="26" fill="none" stroke="${primaryColor}" stroke-width="3" filter="drop-shadow(0 0 8px ${primaryColor})"/>
        <!-- Right Cup -->
        <circle cx="175" cy="135" r="34" fill="#111116" stroke="#333342" stroke-width="2"/>
        <circle cx="175" cy="135" r="26" fill="none" stroke="${primaryColor}" stroke-width="3" filter="drop-shadow(0 0 8px ${primaryColor})"/>
        <!-- Mic Boom -->
        <path d="M40 160 Q 30 190 70 195" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round"/>
        <circle cx="72" cy="195" r="6" fill="${primaryColor}"/>
      </svg>
    `;
  } else if (type === "headset-hiss") {
    // 2. HISS PRO 7.1: Cyan Honeycomb Mesh Grill & Fangs Logo
    return `
      <svg class="product-svg" viewBox="0 0 220 220">
        <path d="M38 120 C38 35, 182 35, 182 120" fill="none" stroke="#1a1a24" stroke-width="16" stroke-linecap="round"/>
        <!-- Left Oval Cup -->
        <rect x="20" y="100" width="38" height="74" rx="19" fill="#0d0d12" stroke="#2c2c38" stroke-width="2"/>
        <path d="M28 115 L48 155 M28 125 L48 145 M28 135 L48 135" stroke="#00f0ff" stroke-width="1.5" opacity="0.8"/>
        <!-- Right Oval Cup -->
        <rect x="162" y="100" width="38" height="74" rx="19" fill="#0d0d12" stroke="#2c2c38" stroke-width="2"/>
        <path d="M170 115 L190 155 M170 125 L190 145 M170 135 L190 135" stroke="#00f0ff" stroke-width="1.5" opacity="0.8"/>
        <!-- Cyan Fangs Mark -->
        <path d="M30 137 L39 147 L48 137" stroke="#00f0ff" stroke-width="2.5" fill="none" filter="drop-shadow(0 0 6px #00f0ff)"/>
        <path d="M172 137 L181 147 L190 137" stroke="#00f0ff" stroke-width="2.5" fill="none" filter="drop-shadow(0 0 6px #00f0ff)"/>
      </svg>
    `;
  } else if (type === "headset-howl") {
    // 3. HOWL ULTRA SPATIAL: Hexagonal Cyber Cup with Purple Chroma
    return `
      <svg class="product-svg" viewBox="0 0 220 220">
        <path d="M30 110 C30 25, 190 25, 190 110" fill="none" stroke="#bf00ff" stroke-width="3.5" filter="drop-shadow(0 0 8px #bf00ff)"/>
        <path d="M40 115 C40 45, 180 45, 180 115" fill="none" stroke="#252532" stroke-width="8" stroke-linecap="round"/>
        <!-- Left Hexagon Cup -->
        <polygon points="40,105 58,120 58,155 40,170 22,155 22,120" fill="#121018" stroke="#332542" stroke-width="2"/>
        <polygon points="38,110 54,123 54,152 38,165 24,152 24,123" fill="none" stroke="#bf00ff" stroke-width="2.5"/>
        <!-- Right Hexagon Cup -->
        <polygon points="180,105 198,120 198,155 180,170 162,155 162,120" fill="#121018" stroke="#332542" stroke-width="2"/>
        <polygon points="182,110 196,123 196,152 182,165 168,152 168,123" fill="none" stroke="#bf00ff" stroke-width="2.5"/>
      </svg>
    `;
  }

  // --- REALISTIC RGB PC CASES / CABINETS (3 UNIQUE DESIGNS) ---
  if (type === "case-apex") {
    // 1. APEX FLOW GLASS: Dual Glass Panels, 3 Front Red ARGB Fans & Vertical GPU
    return `
      <svg class="product-svg" viewBox="0 0 200 220">
        <rect x="35" y="15" width="130" height="190" rx="6" fill="#0e0e14" stroke="#2b2b38" stroke-width="2.5"/>
        <rect x="45" y="25" width="110" height="140" rx="3" fill="#050508" stroke="${primaryColor}" stroke-width="1.5" opacity="0.9"/>
        <!-- Internal GPU & Liquid Tubes -->
        <rect x="55" y="85" width="90" height="25" rx="4" fill="#1c1c28" stroke="${primaryColor}" stroke-width="1.5"/>
        <line x1="75" y1="50" x2="75" y2="85" stroke="${primaryColor}" stroke-width="2"/>
        <line x1="125" y1="50" x2="125" y2="85" stroke="${primaryColor}" stroke-width="2"/>
        <!-- 3 Front ARGB Halo Fans -->
        <rect x="45" y="175" width="110" height="20" fill="#14141f"/>
        <circle cx="65" cy="185" r="7" fill="none" stroke="${primaryColor}" stroke-width="2.5" filter="drop-shadow(0 0 5px ${primaryColor})"/>
        <circle cx="100" cy="185" r="7" fill="none" stroke="${primaryColor}" stroke-width="2.5" filter="drop-shadow(0 0 5px ${primaryColor})"/>
        <circle cx="135" cy="185" r="7" fill="none" stroke="${primaryColor}" stroke-width="2.5" filter="drop-shadow(0 0 5px ${primaryColor})"/>
      </svg>
    `;
  } else if (type === "case-cobra") {
    // 2. COBRA X PANORAMIC: Pillarless Seamless Glass with Cyan/Magenta ARGB Fans
    return `
      <svg class="product-svg" viewBox="0 0 200 220">
        <rect x="30" y="15" width="140" height="190" rx="4" fill="#0b0b10" stroke="#252535" stroke-width="2.5"/>
        <path d="M40 25 L160 25 L160 165 L40 165 Z" fill="#050509" stroke="#00f0ff" stroke-width="1.5"/>
        <!-- Top 3 Cyan Fans -->
        <circle cx="60" cy="35" r="6" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <circle cx="100" cy="35" r="6" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <circle cx="140" cy="35" r="6" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <!-- Side 3 Magenta Fans -->
        <circle cx="148" cy="70" r="7" fill="none" stroke="#bf00ff" stroke-width="2"/>
        <circle cx="148" cy="100" r="7" fill="none" stroke="#bf00ff" stroke-width="2"/>
        <circle cx="148" cy="130" r="7" fill="none" stroke="#bf00ff" stroke-width="2"/>
        <rect x="40" y="165" width="120" height="28" fill="#141420" stroke="#00f0ff" stroke-width="1"/>
        <line x1="50" y1="179" x2="150" y2="179" stroke="#bf00ff" stroke-width="2" filter="drop-shadow(0 0 6px #bf00ff)"/>
      </svg>
    `;
  } else if (type === "case-venom") {
    // 3. VENOM GLASS CHAMBER: Cube Chassis with 9 Halo ARGB Fans & Front LCD Display
    return `
      <svg class="product-svg" viewBox="0 0 220 220">
        <rect x="25" y="20" width="170" height="180" rx="8" fill="#0e1014" stroke="#253028" stroke-width="2.5"/>
        <rect x="35" y="30" width="150" height="130" rx="4" fill="#060806" stroke="#39ff14" stroke-width="1.5"/>
        <!-- 9 ARGB Halo Fans Grid (3x3) -->
        <g stroke="#39ff14" stroke-width="2" fill="none">
          <circle cx="55" cy="55" r="8"/><circle cx="110" cy="55" r="8"/><circle cx="165" cy="55" r="8"/>
          <circle cx="55" cy="95" r="8"/><circle cx="110" cy="95" r="8"/><circle cx="165" cy="95" r="8"/>
          <circle cx="55" cy="135" r="8"/><circle cx="110" cy="135" r="8"/><circle cx="165" cy="135" r="8"/>
        </g>
        <rect x="35" y="168" width="150" height="24" fill="#121814" stroke="${primaryColor}" stroke-width="1"/>
        <text x="110" y="184" font-size="10" fill="#39ff14" font-family="Rajdhani" font-weight="bold" text-anchor="middle">VF-CHAMBER • 32°C</text>
      </svg>
    `;
  }

  // --- REALISTIC LIQUID COOLERS (3 UNIQUE DESIGNS) ---
  if (type === "cooler-frost240") {
    // 1. FROSTBITE 240 AIO: 240mm Radiator with 2 ARGB Fans & Circular LCD Pump Block
    return `
      <svg class="product-svg" viewBox="0 0 220 180">
        <rect x="30" y="20" width="160" height="50" rx="4" fill="#15151c" stroke="#333" stroke-width="2"/>
        <circle cx="70" cy="45" r="18" fill="none" stroke="${primaryColor}" stroke-width="2.5" filter="drop-shadow(0 0 6px ${primaryColor})"/>
        <circle cx="150" cy="45" r="18" fill="none" stroke="${primaryColor}" stroke-width="2.5" filter="drop-shadow(0 0 6px ${primaryColor})"/>
        <path d="M85 70 Q 85 120 110 120" fill="none" stroke="#252532" stroke-width="6"/>
        <path d="M135 70 Q 135 120 110 120" fill="none" stroke="#252532" stroke-width="6"/>
        <circle cx="110" cy="130" r="30" fill="#09090c" stroke="${primaryColor}" stroke-width="3" filter="drop-shadow(0 0 8px ${primaryColor})"/>
        <circle cx="110" cy="130" r="20" fill="#151520"/>
        <text x="110" y="134" font-size="11" fill="#fff" font-family="Rajdhani" font-weight="bold" text-anchor="middle">38°C</text>
      </svg>
    `;
  } else if (type === "cooler-hydra360") {
    // 2. HYDRA FLOW 360 AIO: 360mm Radiator with 3 Cyan/Crimson Fans & 3D Infinity Mirror Pump
    return `
      <svg class="product-svg" viewBox="0 0 230 180">
        <rect x="15" y="20" width="200" height="48" rx="4" fill="#12121a" stroke="#2c2c3a" stroke-width="2"/>
        <circle cx="50" cy="44" r="17" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <circle cx="115" cy="44" r="17" fill="none" stroke="${primaryColor}" stroke-width="2"/>
        <circle cx="180" cy="44" r="17" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <path d="M80 68 Q 80 120 115 120" fill="none" stroke="#333342" stroke-width="7"/>
        <path d="M150 68 Q 150 120 115 120" fill="none" stroke="#333342" stroke-width="7"/>
        <circle cx="115" cy="132" r="32" fill="#08080d" stroke="#00f0ff" stroke-width="2.5" filter="drop-shadow(0 0 8px #00f0ff)"/>
        <circle cx="115" cy="132" r="22" fill="none" stroke="${primaryColor}" stroke-width="2"/>
        <path d="M108 126 L115 140 L122 126" stroke="${primaryColor}" stroke-width="3" fill="none" filter="drop-shadow(0 0 6px ${primaryColor})"/>
      </svg>
    `;
  } else if (type === "cooler-coilcore360") {
    // 3. COILCORE 360 FLAGSHIP: 360mm Radiator with 3 Green ARGB Fans & Square IPS LCD Screen
    return `
      <svg class="product-svg" viewBox="0 0 230 180">
        <rect x="15" y="18" width="200" height="52" rx="4" fill="#181822" stroke="#38384a" stroke-width="2"/>
        <g stroke="#39ff14" stroke-width="2" fill="none">
          <circle cx="50" cy="44" r="18"/><circle cx="115" cy="44" r="18"/><circle cx="180" cy="44" r="18"/>
        </g>
        <path d="M80 70 Q 80 118 115 118" fill="none" stroke="#252532" stroke-width="7"/>
        <path d="M150 70 Q 150 118 115 118" fill="none" stroke="#252532" stroke-width="7"/>
        <rect x="88" y="105" width="54" height="54" rx="8" fill="#0d0d12" stroke="#39ff14" stroke-width="2.5" filter="drop-shadow(0 0 8px #39ff14)"/>
        <rect x="94" y="111" width="42" height="42" rx="4" fill="#14141d"/>
        <text x="115" y="130" font-size="11" fill="#fff" font-family="Rajdhani" font-weight="bold" text-anchor="middle">34°C</text>
        <text x="115" y="144" font-size="9" fill="#39ff14" font-family="Rajdhani" font-weight="bold" text-anchor="middle">2400 RPM</text>
      </svg>
    `;
  }

  // --- KEYCAPS ---
  if (type.startsWith("keycaps")) {
    return `
      <svg class="product-svg" viewBox="0 0 200 180">
        <g transform="translate(30, 20)">
          <path d="M10 20 L25 5 L65 5 L80 20 L75 65 L15 65 Z" fill="#181820" stroke="${primaryColor}" stroke-width="2"/>
          <text x="45" y="42" font-size="18" fill="${primaryColor}" font-family="Rajdhani" font-weight="bold" text-anchor="middle">W</text>
          <path d="M70 80 L85 65 L125 65 L140 80 L135 125 L75 125 Z" fill="#181820" stroke="#333" stroke-width="2"/>
          <text x="105" y="102" font-size="18" fill="#fff" font-family="Rajdhani" font-weight="bold" text-anchor="middle">VF</text>
        </g>
      </svg>
    `;
  }

  return `
    <svg class="product-svg" viewBox="0 0 200 200">
      <rect x="30" y="30" width="140" height="140" rx="10" fill="#121217" stroke="${primaryColor}" stroke-width="2"/>
    </svg>
  `;
}

// ==========================================
// 3. RENDER PRODUCTS WITH GAMIFIED STATS & BUY BUTTONS
// ==========================================
let currentCategory = "all";
let searchQuery = "";

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = currentCategory === "all" || p.category === currentCategory;
    const matchesSearch = searchQuery === "" || 
      p.name.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery) ||
      p.layout.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--muted);">
        <h3 style="font-family: var(--font-heading); font-size: 28px; margin-bottom: 10px;">NO GEAR MATCHED YOUR SEARCH</h3>
        <p>Try clearing filters or search terms.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-art-wrapper">
        <span class="product-tag">${p.tag}</span>
        <span class="render-badge">${p.badge}</span>
        ${getProductSVG(p.svgType)}
      </div>
      <div class="product-info">
        <div>
          <span class="product-model-code">${p.model} / ${p.category.toUpperCase()}</span>
          <h3>${p.name}</h3>
          <p class="product-spec-line">${p.layout}</p>
        </div>

        <div class="card-stats-preview">
          <div class="card-stat-row">
            <span>SPEED ⚡</span>
            <div class="stat-bar-mini"><div class="stat-fill" style="width:${p.speed}%"></div></div>
            <strong>${p.speed}%</strong>
          </div>
          <div class="card-stat-row">
            <span>PRECISION 🎯</span>
            <div class="stat-bar-mini"><div class="stat-fill" style="width:${p.precision}%"></div></div>
            <strong>${p.precision}%</strong>
          </div>
          <div class="card-stat-row">
            <span>DURABILITY 🛡️</span>
            <div class="stat-bar-mini"><div class="stat-fill" style="width:${p.durability}%"></div></div>
            <strong>${p.durability}%</strong>
          </div>
        </div>

        <div class="product-card-actions">
          <button class="card-btn primary-card-btn" onclick="openProductModal('${p.id}')">SPECS →</button>
          <button class="card-btn" onclick="openWaitlist()">BUY (COMING SOON)</button>
        </div>
      </div>
    </article>
  `).join('');
}

function setCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderProducts();
}

function filterProducts() {
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchQuery = searchInput.value.trim().toLowerCase();
    renderProducts();
  }
}

// ==========================================
// 4. TACTICAL LOADOUT BUILDER
// ==========================================
function calculateLoadout() {
  const kb = document.getElementById("loadout-kb")?.value;
  const ms = document.getElementById("loadout-ms")?.value;
  
  let score = 99.8;
  let latency = "0.10 ms";
  let weight = "974g (Gear)";
  let polling = "8000 Hz";

  if (kb === "sting75") {
    score = 99.9;
    latency = "0.08 ms";
  } else if (kb === "naagatkl") {
    score = 98.6;
    latency = "0.15 ms";
  }

  if (ms === "fang8k") {
    weight = "689g (Gear)";
  } else if (ms === "strikeergo") {
    weight = "698g (Gear)";
  }

  document.getElementById("loadout-score").textContent = `${score} / 100`;
  document.getElementById("loadout-latency").textContent = latency;
  document.getElementById("loadout-polling").textContent = polling;
  document.getElementById("loadout-weight").textContent = weight;
}

// ==========================================
// 5. PRODUCT QUICK-VIEW MODAL
// ==========================================
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  document.getElementById("modal-product-model").textContent = `${product.model} / ${product.category.toUpperCase()}`;
  document.getElementById("modal-product-title").textContent = product.name;
  document.getElementById("modal-product-tag").textContent = product.tag;
  document.getElementById("modal-product-badge").textContent = product.badge;
  document.getElementById("modal-product-desc").textContent = product.desc;
  
  document.getElementById("spec-switch").textContent = product.switch;
  document.getElementById("spec-response").textContent = product.response;
  document.getElementById("spec-conn").textContent = product.conn;
  document.getElementById("spec-weight").textContent = product.weight;

  document.getElementById("modal-product-art").innerHTML = getProductSVG(product.svgType);

  const modal = document.getElementById("product-modal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================
// 6. WEBAUDIO SWITCH SOUND SYNTHESIZER
// ==========================================
let audioCtx = null;
let currentSwitchType = "optical";

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSwitchSound() {
  initAudio();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  if (currentSwitchType === "optical") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
  } else if (currentSwitchType === "clicky") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
  } else {
    osc.type = "sine";
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.05);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
  }

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.09);
}

function selectSwitch(type, btn) {
  currentSwitchType = type;
  document.querySelectorAll(".synth-switch-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  playSwitchSound();
}

window.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  playSwitchSound();
});

// ==========================================
// 7. DYNAMIC RGB THEME ENGINE
// ==========================================
const RGB_PRESETS = {
  crimson: { color: "#ff2018", glow: "rgba(255, 32, 24, 0.3)", label: "CRIMSON VIPER (#FF2018)" },
  cyan: { color: "#00f0ff", glow: "rgba(0, 240, 255, 0.3)", label: "CYBER PULSE (#00F0FF)" },
  purple: { color: "#bf00ff", glow: "rgba(191, 0, 255, 0.3)", label: "VOID NEON (#BF00FF)" },
  green: { color: "#39ff14", glow: "rgba(57, 255, 20, 0.3)", label: "VENOM GREEN (#39FF14)" },
  orange: { color: "#ff7a18", glow: "rgba(255, 122, 24, 0.3)", label: "SOLAR FLARE (#FF7A18)" }
};

function setThemeRGB(presetKey, btn) {
  const preset = RGB_PRESETS[presetKey];
  if (!preset) return;

  document.documentElement.style.setProperty('--red', preset.color);
  document.documentElement.style.setProperty('--red-glow', preset.glow);

  const labelEl = document.getElementById("active-rgb-label");
  if (labelEl) labelEl.textContent = preset.label;

  document.querySelectorAll(".rgb-preset-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  renderProducts();
}

// ==========================================
// 8. TELEMETRY CANVAS ENGINE
// ==========================================
let canvas, ctx;
let pollingHz = 8000;
let points = [];

function initTelemetryCanvas() {
  canvas = document.getElementById("telemetry-canvas");
  if (!canvas) return;
  
  ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  for (let i = 0; i < 60; i++) {
    points.push(Math.random() * 40 + 20);
  }

  drawTelemetry();
}

function drawTelemetry() {
  if (!ctx || !canvas) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let y = 0; y < canvas.height; y += 20) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  points.shift();
  const variance = pollingHz === 8000 ? 10 : pollingHz === 4000 ? 25 : 45;
  const newY = (canvas.height / 2) + (Math.random() - 0.5) * variance;
  points.push(newY);

  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || '#ff2018';
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  ctx.shadowColor = accentColor;
  ctx.shadowBlur = 8;

  ctx.beginPath();
  const step = canvas.width / (points.length - 1);
  for (let i = 0; i < points.length; i++) {
    const x = i * step;
    if (i === 0) ctx.moveTo(x, points[i]);
    else ctx.lineTo(x, points[i]);
  }
  ctx.stroke();

  requestAnimationFrame(drawTelemetry);
}

function setPolling(hz, btn) {
  pollingHz = hz;
  document.querySelectorAll(".poll-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const respEl = document.getElementById("metric-response");
  if (respEl) {
    respEl.textContent = hz === 8000 ? "0.12 ms" : hz === 4000 ? "0.25 ms" : "1.00 ms";
  }
}

function switchDashTab(tab, btn) {
  document.querySelectorAll(".dash-nav-item").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

// ==========================================
// 9. CLEAN BACKGROUND CANVAS
// ==========================================
function initBackgroundEffects() {
  const bgCanvas = document.getElementById("bg-canvas");
  if (!bgCanvas) return;
  const bgCtx = bgCanvas.getContext("2d");

  function resizeBg() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
  }
  resizeBg();
  window.addEventListener("resize", resizeBg);

  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.4 + 0.1
  }));

  function animateBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || '#ff2018';

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = bgCanvas.width;
      if (p.x > bgCanvas.width) p.x = 0;
      if (p.y < 0) p.y = bgCanvas.height;
      if (p.y > bgCanvas.height) p.y = 0;

      bgCtx.fillStyle = accentColor;
      bgCtx.globalAlpha = p.alpha;
      bgCtx.beginPath();
      bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      bgCtx.fill();
    });

    requestAnimationFrame(animateBg);
  }
  animateBg();
}

// ==========================================
// 10. MODAL & SCROLL HANDLERS
// ==========================================
function openWaitlist() {
  const modal = document.getElementById("waitlist-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeWaitlist() {
  const modal = document.getElementById("waitlist-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function submitWaitlist(e) {
  e.preventDefault();
  const feedback = document.getElementById("form-msg");
  if (feedback) {
    feedback.textContent = "✔ NOTIFICATION SET. YOU'LL BE NOTIFIED THE INSTANT PRODUCTS DROP!";
  }
  e.target.reset();
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) drawer.classList.toggle("open");
}

window.addEventListener("click", (e) => {
  if (e.target.id === "waitlist-modal") closeWaitlist();
  if (e.target.id === "product-modal") closeProductModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeWaitlist();
    closeProductModal();
  }
});

function setupScrollReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupScrollReveals();
  initBackgroundEffects();
  initTelemetryCanvas();
});
