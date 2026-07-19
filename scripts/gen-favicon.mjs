// 파비콘/앱 아이콘 생성 — 브랜드 로고(파란 라운드 사각형 + 흰 B + 오렌지 핀 도트)
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = resolve(__dirname, "../app");
const PREV = "/tmp/claude-0/-home-user-BikeExpress/76778d41-1bdf-5345-be96-bfc34520b796/scratchpad";
mkdirSync(APP, { recursive: true });

// 굵은 'B'를 패스로 직접 그려 렌더러/폰트에 의존하지 않게 함
// 좌표계: 512x512
const bPath = `
M181 132
H300
C349 132 383 163 383 208
C383 236 369 258 344 269
C376 279 396 304 396 340
C396 389 359 422 305 422
H181 Z
M239 183
V255
H296
C319 255 333 241 333 219
C333 197 319 183 296 183 Z
M239 305
V371
H301
C326 371 341 356 341 333
C341 310 326 305 301 305 Z
`;

const svg = ({ pin = true } = {}) => `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2a63ee"/>
      <stop offset="1" stop-color="#173a91"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="118" fill="url(#g)"/>
  <path d="${bPath.replace(/\s+/g, " ").trim()}" fill="#ffffff"/>
  ${pin ? `<circle cx="372" cy="146" r="54" fill="#f97316"/><circle cx="372" cy="146" r="20" fill="#ffffff"/>` : ""}
</svg>`;

// 1) app/icon.svg (모던 브라우저용 벡터 파비콘)
writeFileSync(resolve(APP, "icon.svg"), svg({ pin: true }));

// 2) app/apple-icon.png (180x180, iOS 홈화면)
await sharp(Buffer.from(svg({ pin: true }))).resize(180, 180).png().toFile(resolve(APP, "apple-icon.png"));

// 3) app/icon.png (라스터 폴백, 192)
await sharp(Buffer.from(svg({ pin: true }))).resize(192, 192).png().toFile(resolve(APP, "icon.png"));

// 미리보기 (16/32/48/180)
for (const s of [16, 32, 48, 180]) {
  await sharp(Buffer.from(svg({ pin: true }))).resize(s, s).png().toFile(`${PREV}/fav-${s}.png`);
}
console.log("favicon 생성 완료: app/icon.svg, app/icon.png(192), app/apple-icon.png(180)");
