// 워크플로우가 생성한 지역/차량 JSON을 읽어 app/data 모듈로 조립
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GEN = "/tmp/claude-0/-home-user-BikeExpress/76778d41-1bdf-5345-be96-bfc34520b796/scratchpad/gen";
const DATA = resolve(__dirname, "../app/data");

function loadDir(sub) {
  const dir = `${GEN}/${sub}`;
  if (!existsSync(dir)) {
    console.error(`디렉터리 없음: ${dir}`);
    return {};
  }
  const out = {};
  let ok = 0, fail = 0;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    const slug = f.replace(/\.json$/, "");
    try {
      const obj = JSON.parse(readFileSync(`${dir}/${f}`, "utf8"));
      out[slug] = obj;
      ok++;
    } catch (e) {
      fail++;
      console.error(`  JSON 파싱 실패: ${sub}/${f} — ${e.message}`);
    }
  }
  console.log(`${sub}: ${ok}개 로드${fail ? `, ${fail}개 실패` : ""}`);
  return out;
}

const regions = loadDir("regions");
const vehicles = loadDir("vehicles");

writeFileSync(
  resolve(DATA, "regionContent.js"),
  "// 자동 생성 (scripts/assemble-content.mjs) — 지역별 고유 콘텐츠\n" +
    "export const regionContent = " + JSON.stringify(regions, null, 2) + ";\n"
);
writeFileSync(
  resolve(DATA, "vehicleContent.js"),
  "// 자동 생성 (scripts/assemble-content.mjs) — 차량별 고유 콘텐츠\n" +
    "export const vehicleContent = " + JSON.stringify(vehicles, null, 2) + ";\n"
);

console.log(`\n조립 완료: regionContent(${Object.keys(regions).length}), vehicleContent(${Object.keys(vehicles).length})`);
