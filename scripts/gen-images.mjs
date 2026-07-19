// 브랜드 일러스트(WebP ~30KB) 생성 스크립트
// SVG를 sharp로 래스터화하여 public/images/에 저장합니다.
// 실제 사진으로 교체하려면 같은 파일명으로 public/images/에 덮어쓰면 됩니다.
import sharp from "sharp";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/images");
mkdirSync(OUT, { recursive: true });

// ---- 팔레트 ----
const C = {
  blue: "#2456d9",
  blueD: "#1a3fa6",
  blueDD: "#12295f",
  blueL: "#4f83ea",
  sky1: "#2a63ee",
  sky2: "#12295f",
  orange: "#f97316",
  orangeD: "#e05f08",
  orangeDD: "#6e3400",
  ink: "#0f1b2e",
  cream: "#fff4e8",
  white: "#ffffff",
  box: "#f6b465",
  boxD: "#e08b3c",
};

// ---- 공통 SVG 조각 ----
const cloud = (x, y, s, o = 0.9) => `
  <g transform="translate(${x},${y}) scale(${s})" fill="#ffffff" opacity="${o}">
    <ellipse cx="0" cy="0" rx="46" ry="26"/>
    <ellipse cx="38" cy="6" rx="34" ry="22"/>
    <ellipse cx="-36" cy="8" rx="30" ry="18"/>
  </g>`;

const box = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) scale(${s}) rotate(${rot})">
    <rect x="-26" y="-26" width="52" height="52" rx="5" fill="${C.box}"/>
    <rect x="-26" y="-26" width="52" height="52" rx="5" fill="none" stroke="${C.boxD}" stroke-width="3"/>
    <path d="M-26 -4 H26" stroke="${C.boxD}" stroke-width="3"/>
    <path d="M0 -26 V-4" stroke="${C.boxD}" stroke-width="3"/>
    <rect x="-9" y="-26" width="18" height="10" fill="${C.orange}" opacity="0.85"/>
  </g>`;

// 배송 스쿠터 (측면), 색상 지정 가능
const scooter = (x, y, s = 1, body = C.orange, bodyD = C.orangeD) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <!-- 그림자 -->
    <ellipse cx="0" cy="86" rx="150" ry="16" fill="#000000" opacity="0.12"/>
    <!-- 뒷 배송박스 -->
    <rect x="-135" y="-70" width="70" height="66" rx="8" fill="${C.box}"/>
    <rect x="-135" y="-70" width="70" height="66" rx="8" fill="none" stroke="${C.boxD}" stroke-width="4"/>
    <rect x="-118" y="-70" width="36" height="14" rx="3" fill="${bodyD}"/>
    <!-- 바퀴 -->
    <g>
      <circle cx="-92" cy="70" r="40" fill="#22303f"/>
      <circle cx="-92" cy="70" r="20" fill="#54677a"/>
      <circle cx="-92" cy="70" r="7" fill="#cdd7e2"/>
      <circle cx="92" cy="70" r="40" fill="#22303f"/>
      <circle cx="92" cy="70" r="20" fill="#54677a"/>
      <circle cx="92" cy="70" r="7" fill="#cdd7e2"/>
    </g>
    <!-- 본체 -->
    <path d="M-118 40 Q-120 4 -80 4 L60 4 Q96 4 104 44 L120 60 Q92 40 60 44 L-60 44 Q-104 44 -118 40 Z" fill="${body}"/>
    <path d="M-70 4 Q-56 -46 -6 -44 L44 -44 Q40 -8 20 4 Z" fill="${bodyD}"/>
    <!-- 앞 실드/핸들 -->
    <path d="M60 4 Q78 -60 104 -66" stroke="${bodyD}" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M92 -66 L128 -66" stroke="#22303f" stroke-width="10" stroke-linecap="round"/>
    <circle cx="112" cy="18" r="10" fill="#ffd76a"/>
    <!-- 라이더 실루엣 -->
    <g fill="${C.blueDD}">
      <circle cx="-18" cy="-92" r="26"/>
      <path d="M-40 -66 Q-18 -84 6 -66 L18 -12 -52 -12 Q-52 -46 -40 -66 Z"/>
    </g>
    <circle cx="-18" cy="-96" r="27" fill="none" stroke="${C.white}" stroke-width="4" opacity="0.5"/>
  </g>`;

// 간단한 트럭 (측면). cab/body 크기 조절
const truck = (x, y, s, w, h, body, cab = C.blueD) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="${h / 2 + 30}" rx="${w * 0.62}" ry="16" fill="#000000" opacity="0.12"/>
    <!-- 적재함 -->
    <rect x="${-w / 2}" y="${-h / 2}" width="${w * 0.6}" height="${h}" rx="8" fill="${body}"/>
    <rect x="${-w / 2}" y="${-h / 2}" width="${w * 0.6}" height="${h}" rx="8" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="4"/>
    <path d="M${-w / 2 + 8} ${-h / 2 + 14} H${-w / 2 + w * 0.6 - 8}" stroke="rgba(255,255,255,0.4)" stroke-width="4"/>
    <!-- 운전석 -->
    <path d="M${w * 0.1} ${-h / 2 + 8} h${w * 0.28} q14 0 18 16 l6 ${h - 24} h${-w * 0.34} Z" fill="${cab}"/>
    <rect x="${w * 0.16}" y="${-h / 2 + 16}" width="${w * 0.18}" height="${h * 0.36}" rx="4" fill="#bfe0ff"/>
    <!-- 바퀴 -->
    <g fill="#22303f">
      <circle cx="${-w * 0.28}" cy="${h / 2 + 18}" r="30"/>
      <circle cx="${w * 0.24}" cy="${h / 2 + 18}" r="30"/>
    </g>
    <g fill="#54677a">
      <circle cx="${-w * 0.28}" cy="${h / 2 + 18}" r="14"/>
      <circle cx="${w * 0.24}" cy="${h / 2 + 18}" r="14"/>
    </g>
  </g>`;

// 도시 스카이라인
const skyline = (y, w, color, o = 1) => {
  let r = `<g opacity="${o}" fill="${color}">`;
  let x = -20;
  const seed = [110, 70, 150, 90, 130, 60, 170, 100, 120, 80, 140, 95, 160, 75];
  let i = 0;
  while (x < w + 20) {
    const bw = 46 + (seed[i % seed.length] % 30);
    const bh = seed[i % seed.length];
    r += `<rect x="${x}" y="${y - bh}" width="${bw}" height="${bh}" rx="3"/>`;
    // 창문
    for (let wx = x + 8; wx < x + bw - 8; wx += 16) {
      for (let wy = y - bh + 12; wy < y - 12; wy += 20) {
        r += `<rect x="${wx}" y="${wy}" width="7" height="9" fill="rgba(255,255,255,0.18)"/>`;
      }
    }
    x += bw + 10;
    i++;
  }
  r += `</g>`;
  return r;
};

const pin = (x, y, s, fill = C.orange) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M0 0 C-18 -26 -22 -40 -22 -52 A22 22 0 1 1 22 -52 C22 -40 18 -26 0 0 Z" fill="${fill}"/>
    <circle cx="0" cy="-52" r="9" fill="#ffffff"/>
  </g>`;

const wrap = (w, h, inner, defs = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${defs}${inner}</svg>`;

// 대한민국 실루엣 (양식화된 근사 형태)
const koreaPath =
  "M300 40 L360 70 L380 120 L430 130 L470 110 L500 150 L470 200 L500 250 L470 320 L500 380 L470 450 L430 520 L380 600 L340 660 L300 700 L270 660 L250 600 L230 560 L200 540 L180 500 L210 460 L190 420 L220 380 L200 330 L230 290 L210 240 L250 200 L230 150 L270 110 L260 70 Z";

// ---------- 씬 정의 ----------
const scenes = {};

// 홈 히어로
scenes["hero-home"] = wrap(1600, 900,
  `<rect width="1600" height="900" fill="url(#sky)"/>
   ${cloud(300, 160, 1.4, 0.55)}${cloud(1150, 120, 1.8, 0.5)}${cloud(760, 220, 1.1, 0.4)}
   <circle cx="1330" cy="200" r="120" fill="#ff7a1a" opacity="0.18"/>
   ${skyline(640, 1600, C.blueDD, 0.55)}
   ${skyline(680, 1600, "#0b2352", 0.9)}
   <rect x="0" y="686" width="1600" height="214" fill="#0a1c40"/>
   <rect x="0" y="700" width="1600" height="14" fill="#2b4a86"/>
   <g stroke="#ffd76a" stroke-width="7" stroke-dasharray="46 40" opacity="0.85"><path d="M0 792 H1600"/></g>
   ${box(300, 560, 1.0, -8)}${box(1230, 600, 0.8, 10)}
   ${pin(1120, 470, 1.5, C.orange)}${pin(430, 430, 1.2, "#ffffff")}
   <path d="M430 470 Q760 560 1120 500" stroke="#ffffff" stroke-width="4" stroke-dasharray="10 12" fill="none" opacity="0.6"/>
   ${scooter(720, 720, 1.5, C.orange, C.orangeD)}`,
  `<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
     <stop offset="0" stop-color="#1b4fbf"/><stop offset="0.55" stop-color="${C.sky1}"/><stop offset="1" stop-color="#1a53c8"/>
   </linearGradient></defs>`);

// 기사 모집 히어로 (주황)
scenes["hero-rider"] = wrap(1600, 900,
  `<rect width="1600" height="900" fill="url(#osky)"/>
   ${cloud(360, 150, 1.4, 0.35)}${cloud(1180, 130, 1.7, 0.3)}
   <circle cx="260" cy="220" r="140" fill="#ffffff" opacity="0.12"/>
   ${skyline(660, 1600, "#5a2b00", 0.6)}
   <rect x="0" y="700" width="1600" height="200" fill="#3d1d00"/>
   <g stroke="#ffe0a6" stroke-width="7" stroke-dasharray="46 40" opacity="0.8"><path d="M0 800 H1600"/></g>
   ${pin(1180, 470, 1.4, "#ffffff")}${pin(360, 470, 1.4, "#ffd76a")}
   <path d="M360 500 Q760 600 1180 500" stroke="#ffffff" stroke-width="4" stroke-dasharray="10 12" fill="none" opacity="0.5"/>
   ${scooter(760, 730, 1.7, "#ffb15c", C.orangeD)}`,
  `<defs><linearGradient id="osky" x1="0" y1="0" x2="1" y2="1">
     <stop offset="0" stop-color="${C.orangeDD}"/><stop offset="0.6" stop-color="${C.orange}"/><stop offset="1" stop-color="#ff9440"/>
   </linearGradient></defs>`);

// 차량 일러스트 (카드용) - 부드러운 배경 + 차량
const vehicleCard = (inner, bg1 = "#eaf1fd", bg2 = "#d6e4fb") =>
  wrap(900, 640,
    `<rect width="900" height="640" fill="url(#vg)"/>
     <circle cx="720" cy="150" r="120" fill="#ffffff" opacity="0.5"/>
     <rect x="0" y="470" width="900" height="170" fill="rgba(16,48,111,0.06)"/>
     <g stroke="${C.blue}" stroke-width="6" stroke-dasharray="34 30" opacity="0.28"><path d="M0 540 H900"/></g>
     ${inner}`,
    `<defs><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient></defs>`);

scenes["vehicle-motorcycle"] = vehicleCard(`${box(250, 250, 0.7, -6)}${scooter(470, 430, 1.55, C.blue, C.blueD)}`);
scenes["vehicle-damas"] = vehicleCard(`${box(230, 250, 0.7, 8)}${truck(470, 380, 1.5, 300, 150, "#7fb0f0", C.blueD)}`);
scenes["vehicle-labo"] = vehicleCard(
  `${truck(460, 380, 1.5, 320, 130, "#9ec6f5", C.blueD)}${box(360, 300, 0.6, -4)}${box(430, 300, 0.6, 6)}${box(500, 300, 0.6, 0)}`);
scenes["vehicle-1ton"] = vehicleCard(`${truck(460, 360, 1.7, 360, 180, C.blueL, C.blueDD)}`, "#e6effe", "#cfe0fb");
scenes["vehicle-truck"] = vehicleCard(`${truck(450, 340, 1.9, 420, 210, "#3f77dc", C.blueDD)}`, "#e6effe", "#c7dcfb");

// 빠른 접수 / 온라인 접수 - 휴대폰 UI
scenes["service-quick"] = wrap(1000, 800,
  `<rect width="1000" height="800" fill="url(#qg)"/>
   <circle cx="820" cy="180" r="140" fill="#ffffff" opacity="0.5"/>
   ${pin(250, 250, 1.6, C.orange)}
   <path d="M250 250 Q520 360 720 250" stroke="${C.blue}" stroke-width="5" stroke-dasharray="10 12" fill="none" opacity="0.5"/>
   ${pin(720, 240, 1.3, C.blue)}
   <!-- phone -->
   <g transform="translate(560,300)">
     <rect x="0" y="0" width="300" height="470" rx="34" fill="#ffffff" stroke="#dbe4f0" stroke-width="4"/>
     <rect x="24" y="40" width="252" height="70" rx="12" fill="${C.blue}"/>
     <rect x="44" y="62" width="150" height="12" rx="6" fill="#ffffff" opacity="0.9"/>
     <rect x="44" y="84" width="90" height="10" rx="5" fill="#ffffff" opacity="0.6"/>
     <rect x="24" y="132" width="252" height="46" rx="10" fill="#eef3fb"/>
     <rect x="24" y="190" width="252" height="46" rx="10" fill="#eef3fb"/>
     <rect x="24" y="248" width="252" height="46" rx="10" fill="#eef3fb"/>
     <rect x="24" y="330" width="252" height="54" rx="12" fill="${C.orange}"/>
     <rect x="118" y="350" width="64" height="14" rx="7" fill="#ffffff"/>
   </g>
   ${scooter(300, 640, 1.15, C.orange, C.orangeD)}`,
  `<defs><linearGradient id="qg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf1fd"/><stop offset="1" stop-color="#dbe8fc"/></linearGradient></defs>`);

// 전국 지도
scenes["map-nationwide"] = wrap(1000, 900,
  `<rect width="1000" height="900" fill="url(#mg)"/>
   <g transform="translate(220,80)">
     <path d="${koreaPath}" fill="#dbe8fc" stroke="${C.blue}" stroke-width="4"/>
     <path d="${koreaPath}" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
   </g>
   <!-- 연결선 -->
   <g stroke="${C.blue}" stroke-width="3" stroke-dasharray="8 10" opacity="0.5" fill="none">
     <path d="M470 260 L560 470"/><path d="M470 260 L430 560"/><path d="M560 470 L640 620"/><path d="M430 560 L560 470"/>
   </g>
   ${pin(470, 300, 1.25, C.orange)}${pin(560, 500, 1.05, C.blue)}${pin(430, 590, 1.05, C.blue)}
   ${pin(640, 650, 1.0, C.blue)}${pin(560, 700, 0.95, C.blue)}${pin(700, 420, 0.95, C.blue)}
   <circle cx="470" cy="300" r="60" fill="none" stroke="${C.orange}" stroke-width="3" opacity="0.4"/>`,
  `<defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fe"/><stop offset="1" stop-color="#e0eafb"/></linearGradient></defs>`);

// 기업 배송 - 빌딩 + 상자 + 인보이스
scenes["business"] = wrap(1000, 800,
  `<rect width="1000" height="800" fill="url(#bg2)"/>
   <circle cx="800" cy="180" r="130" fill="#ffffff" opacity="0.5"/>
   ${skyline(560, 1000, "#cfe0fb", 1)}
   <g transform="translate(120,300)">
     <rect x="0" y="0" width="220" height="320" rx="10" fill="${C.blue}"/>
     <rect x="0" y="0" width="220" height="320" rx="10" fill="none" stroke="${C.blueD}" stroke-width="4"/>
     ${Array.from({ length: 5 }).map((_, r) => Array.from({ length: 4 }).map((_, c) => `<rect x="${24 + c * 46}" y="${28 + r * 54}" width="30" height="34" rx="4" fill="#bfe0ff"/>`).join("")).join("")}
   </g>
   ${box(560, 540, 1.0, -6)}${box(650, 560, 0.85, 8)}${box(600, 470, 0.7, 0)}
   <!-- 인보이스 -->
   <g transform="translate(640,250) rotate(-6)">
     <rect x="0" y="0" width="230" height="290" rx="10" fill="#ffffff" stroke="#dbe4f0" stroke-width="3"/>
     <rect x="24" y="28" width="120" height="16" rx="6" fill="${C.blue}"/>
     ${Array.from({ length: 6 }).map((_, i) => `<rect x="24" y="${72 + i * 30}" width="${182 - (i % 3) * 40}" height="10" rx="5" fill="#e4ebf5"/>`).join("")}
     <rect x="120" y="250" width="86" height="20" rx="6" fill="${C.orange}"/>
   </g>`,
  `<defs><linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fe"/><stop offset="1" stop-color="#dde9fb"/></linearGradient></defs>`);

// 요금/이용안내 - 가격표 + 서류
scenes["guide"] = wrap(1000, 800,
  `<rect width="1000" height="800" fill="url(#gg)"/>
   <circle cx="800" cy="180" r="120" fill="#ffffff" opacity="0.5"/>
   <g transform="translate(300,180)">
     <rect x="0" y="0" width="400" height="440" rx="18" fill="#ffffff" stroke="#dbe4f0" stroke-width="4"/>
     <rect x="0" y="0" width="400" height="90" rx="18" fill="${C.blue}"/>
     <rect x="40" y="34" width="180" height="22" rx="8" fill="#ffffff"/>
     ${Array.from({ length: 5 }).map((_, i) => `<g><rect x="40" y="${130 + i * 56}" width="180" height="14" rx="7" fill="#e4ebf5"/><rect x="280" y="${128 + i * 56}" width="80" height="18" rx="8" fill="${i === 0 ? C.orange : "#cfe0fb"}"/></g>`).join("")}
   </g>
   <g transform="translate(150,470) rotate(-10)">
     <circle cx="60" cy="60" r="60" fill="${C.orange}"/>
     <text x="60" y="52" font-family="sans-serif" font-size="28" font-weight="700" fill="#fff" text-anchor="middle">요금</text>
     <text x="60" y="84" font-family="sans-serif" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">문의</text>
   </g>`,
  `<defs><linearGradient id="gg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fe"/><stop offset="1" stop-color="#dde9fb"/></linearGradient></defs>`);

// 고객지원 - 헤드셋 + 말풍선
scenes["support"] = wrap(1000, 800,
  `<rect width="1000" height="800" fill="url(#sg)"/>
   <circle cx="500" cy="400" r="230" fill="#ffffff" opacity="0.55"/>
   <g transform="translate(500,410)">
     <circle cx="0" cy="0" r="150" fill="${C.blue}"/>
     <path d="M-96 10 A96 96 0 0 1 96 10 V56 A20 20 0 0 1 76 76 H64 V-4 H40 V88 H-40 V-4 H-64 V44 A20 20 0 0 1 -84 64 H-96 Z" fill="#ffffff"/>
     <rect x="-96" y="10" width="30" height="70" rx="12" fill="#ffffff"/>
     <rect x="66" y="10" width="30" height="70" rx="12" fill="#ffffff"/>
   </g>
   <g transform="translate(230,210)"><rect x="0" y="0" width="180" height="110" rx="20" fill="#ffffff"/><path d="M40 108 L40 150 L84 108 Z" fill="#ffffff"/><rect x="28" y="34" width="124" height="14" rx="7" fill="#cfe0fb"/><rect x="28" y="62" width="90" height="14" rx="7" fill="#e4ebf5"/></g>
   <g transform="translate(600,210)"><rect x="0" y="0" width="180" height="110" rx="20" fill="${C.orange}"/><path d="M140 108 L140 150 L96 108 Z" fill="${C.orange}"/><rect x="28" y="34" width="124" height="14" rx="7" fill="#ffffff" opacity="0.95"/><rect x="28" y="62" width="70" height="14" rx="7" fill="#ffffff" opacity="0.7"/></g>`,
  `<defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fe"/><stop offset="1" stop-color="#dde9fb"/></linearGradient></defs>`);

// 회사소개 - 네트워크 노드 지도
scenes["company"] = wrap(1000, 800,
  `<rect width="1000" height="800" fill="url(#cg)"/>
   <g transform="translate(250,120) scale(0.78)">
     <path d="${koreaPath}" fill="#d3e2fb" stroke="${C.blue}" stroke-width="4"/>
   </g>
   <g stroke="${C.blue}" stroke-width="2.5" opacity="0.45" fill="none">
     <path d="M470 260 L600 400"/><path d="M600 400 L470 520"/><path d="M470 260 L470 520"/><path d="M600 400 L700 560"/><path d="M470 520 L620 600"/>
   </g>
   ${[[470, 260, 14], [600, 400, 11], [470, 520, 11], [700, 560, 9], [620, 600, 9], [400, 380, 8]].map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${i === 0 ? C.orange : C.blue}"/><circle cx="${x}" cy="${y}" r="${r + 10}" fill="none" stroke="${i === 0 ? C.orange : C.blue}" stroke-width="2" opacity="0.35"/>`).join("")}`,
  `<defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4fe"/><stop offset="1" stop-color="#dde9fb"/></linearGradient></defs>`);

// 내부 페이지 히어로 배경 텍스처 (블루) - 가로 긴 배너
scenes["hero-tex"] = wrap(1600, 460,
  `<rect width="1600" height="460" fill="url(#htx)"/>
   <circle cx="1400" cy="120" r="150" fill="#ffffff" opacity="0.06"/>
   <circle cx="1180" cy="360" r="90" fill="${C.orange}" opacity="0.14"/>
   ${skyline(360, 1600, "#0b2352", 0.4)}
   <g stroke="#ffffff" stroke-width="4" stroke-dasharray="14 16" opacity="0.12"><path d="M0 300 Q400 250 800 300 T1600 300"/></g>
   ${box(1300, 250, 0.7, -8, )}
   ${scooter(1150, 340, 0.85, C.orange, C.orangeD)}`,
  `<defs><linearGradient id="htx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.blueD}"/><stop offset="1" stop-color="${C.blue}"/></linearGradient></defs>`);

// 내부 페이지 히어로 배경 텍스처 (주황) - 기사용
scenes["hero-tex-rider"] = wrap(1600, 460,
  `<rect width="1600" height="460" fill="url(#htxo)"/>
   <circle cx="240" cy="120" r="150" fill="#ffffff" opacity="0.10"/>
   ${skyline(360, 1600, "#5a2b00", 0.35)}
   <g stroke="#ffffff" stroke-width="4" stroke-dasharray="14 16" opacity="0.16"><path d="M0 300 Q400 250 800 300 T1600 300"/></g>
   ${scooter(1150, 340, 0.9, "#ffb15c", C.orangeD)}`,
  `<defs><linearGradient id="htxo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.orangeDD}"/><stop offset="1" stop-color="${C.orange}"/></linearGradient></defs>`);

// CTA 밴드 텍스처
scenes["cta-tex"] = wrap(1600, 500,
  `<rect width="1600" height="500" fill="url(#ctx)"/>
   <circle cx="1350" cy="120" r="160" fill="${C.orange}" opacity="0.16"/>
   <circle cx="200" cy="400" r="120" fill="${C.blue}" opacity="0.20"/>
   <g stroke="#ffd76a" stroke-width="6" stroke-dasharray="40 36" opacity="0.30"><path d="M0 250 H1600"/></g>
   <g stroke="#ffffff" stroke-width="3" stroke-dasharray="10 14" opacity="0.10" fill="none"><path d="M0 150 Q400 100 800 150 T1600 150"/><path d="M0 360 Q400 410 800 360 T1600 360"/></g>`,
  `<defs><linearGradient id="ctx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16202e"/><stop offset="1" stop-color="#1b3358"/></linearGradient></defs>`);

// ---------- 렌더 ----------
const sizes = {
  "hero-home": 1600, "hero-rider": 1600, "hero-tex": 1600, "hero-tex-rider": 1600, "cta-tex": 1600,
};
let total = 0;
for (const [name, svg] of Object.entries(scenes)) {
  const width = sizes[name] || (name.startsWith("vehicle") ? 900 : 1000);
  // 품질을 조절해 ~30KB 이하를 목표로 함
  let q = 82;
  let buf = await sharp(Buffer.from(svg)).resize({ width }).webp({ quality: q, effort: 6 }).toBuffer();
  while (buf.length > 31000 && q > 40) {
    q -= 6;
    buf = await sharp(Buffer.from(svg)).resize({ width }).webp({ quality: q, effort: 6 }).toBuffer();
  }
  await sharp(buf).toFile(resolve(OUT, `${name}.webp`));
  total += buf.length;
  console.log(`${name}.webp  ${(buf.length / 1024).toFixed(1)}KB  q${q}`);
}
console.log(`\n총 ${Object.keys(scenes).length}개, 합계 ${(total / 1024).toFixed(1)}KB`);
