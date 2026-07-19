import { SITE_URL } from "./data/site";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      // 구글(Googlebot)·네이버(Yeti)·빙 등 모든 검색엔진 허용
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/rss.xml`],
    host: SITE_URL,
  };
}
