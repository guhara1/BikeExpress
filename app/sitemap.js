import { primaryNav, regionSlugs, vehicles } from "./data/site";

export const dynamic = "force-static";

const BASE = "https://www.bikeexpress.co.kr";

export default function sitemap() {
  const staticPaths = new Set(["/", "/order/"]);

  primaryNav.forEach((item) => {
    staticPaths.add(item.href);
    (item.children || []).forEach((c) => staticPaths.add(c.href));
  });

  // 동적 지역/차량 경로
  regionSlugs.forEach((s) => {
    staticPaths.add(`/area/${s}/`);
    staticPaths.add(`/rider/area/${s}/`);
  });
  vehicles.forEach((v) => staticPaths.add(`/vehicle/${v.slug}/`));

  return Array.from(staticPaths).map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path === "/order/" || path === "/rider/apply/" ? 0.9 : 0.7,
  }));
}
