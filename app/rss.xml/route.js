import { SITE_URL, company } from "@/app/data/site";

export const dynamic = "force-static";

// RSS 항목 (공지/주요 콘텐츠). 새 소식이 생기면 상단에 추가하세요.
const items = [
  {
    title: "전국 최저가 퀵서비스 빠른 접수 — 오토바이부터 1톤 화물까지",
    path: "/",
    date: "2026-07-19",
    desc: "전국 어디서나 오토바이·다마스·라보·1톤 화물 퀵서비스를 합리적인 최저가로 접수합니다. 서류·소형물품·기업배송·긴급배송을 신속하게 배차합니다.",
  },
  {
    title: "전국 서비스 지역 순차 확대 안내",
    path: "/area/",
    date: "2026-07-10",
    desc: "이용이 많은 도시부터 시·군·구 단위 지역 안내를 순차적으로 확대하고 있습니다. 전국 17개 시·도 지역별 퀵서비스 접수 안내를 확인하세요.",
  },
  {
    title: "전국 오토바이 퀵기사 상시 모집",
    path: "/rider/recruit/",
    date: "2026-07-01",
    desc: "초보·투잡·경력 기사 모두 지원 가능합니다. 비대면 가입으로 원하는 지역·시간에 활동하세요.",
  },
  {
    title: "기업 정기배송·월 정산 서비스 안내",
    path: "/business/",
    date: "2026-06-20",
    desc: "반복되는 기업 배송을 정기배송과 월 정산으로 더 편리하게 이용하실 수 있습니다. 세금계산서 발행과 다지점 배송을 지원합니다.",
  },
  {
    title: "당일·긴급 퀵배송 접수 안내",
    path: "/quick-service/same-day/",
    date: "2026-06-12",
    desc: "당일 픽업·당일 배송, 긴급 배차가 필요한 서류·부품·샘플을 가장 빠르게 전달합니다.",
  },
  {
    title: "차량별 요금과 할증 안내",
    path: "/guide/",
    date: "2026-06-05",
    desc: "거리·차량·물품·시간대에 따른 요금 기준과 할증 항목을 투명하게 안내합니다. 예상요금은 접수 시 확인해 드립니다.",
  },
  {
    title: "야간·주말 퀵서비스 접수 안내",
    path: "/quick-service/night-weekend/",
    date: "2026-05-28",
    desc: "야간·주말·공휴일에도 배차 가능 여부를 확인해 접수해 드립니다. 운영 시간과 할증 요소를 안내합니다.",
  },
];

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const now = new Date("2026-07-19T09:00:00+09:00").toUTCString();
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n` +
    `<channel>\n` +
    `<title>${esc(company.name)} | 전국 최저가 퀵서비스 소식</title>\n` +
    `<link>${SITE_URL}/</link>\n` +
    `<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>\n` +
    `<description>전국 오토바이·화물 퀵서비스 접수와 기사 모집 소식</description>\n` +
    `<language>ko-KR</language>\n` +
    `<lastBuildDate>${now}</lastBuildDate>\n` +
    items
      .map(
        (it) =>
          `<item>\n` +
          `<title>${esc(it.title)}</title>\n` +
          `<link>${SITE_URL}${it.path}</link>\n` +
          `<guid isPermaLink="true">${SITE_URL}${it.path}</guid>\n` +
          `<description>${esc(it.desc)}</description>\n` +
          `<pubDate>${new Date(it.date + "T09:00:00+09:00").toUTCString()}</pubDate>\n` +
          `</item>`
      )
      .join("\n") +
    `\n</channel>\n</rss>\n`;

  return new Response(body, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
