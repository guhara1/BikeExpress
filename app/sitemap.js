import { SITE_URL, primaryNav, regionSlugs, vehicles } from "./data/site";

export const dynamic = "force-static";

const LASTMOD = "2026-07-19";

// 우선순위/변경빈도 규칙
function meta(path) {
  if (path === "/") return { priority: 1.0, changeFrequency: "daily" };
  if (path === "/order/" || path === "/rider/apply/")
    return { priority: 0.9, changeFrequency: "weekly" };
  if (path.startsWith("/area/") || path.startsWith("/rider/area/"))
    return { priority: 0.8, changeFrequency: "weekly" };
  // 인덱스(허브) 페이지
  if (/^\/[a-z-]+\/$/.test(path)) return { priority: 0.8, changeFrequency: "weekly" };
  return { priority: 0.7, changeFrequency: "weekly" };
}

export default function sitemap() {
  const paths = new Set(["/", "/order/"]);

  primaryNav.forEach((item) => {
    paths.add(item.href);
    (item.children || []).forEach((c) => paths.add(c.href));
  });

  // 전국 17개 시·도 고객/기사 지역 페이지
  regionSlugs.forEach((s) => {
    paths.add(`/area/${s}/`);
    paths.add(`/rider/area/${s}/`);
  });
  // 차량 상세
  vehicles.forEach((v) => paths.add(`/vehicle/${v.slug}/`));

  return Array.from(paths).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LASTMOD,
    ...meta(path),
  }));
}
