// JSON-LD 구조화데이터 빌더
import { SITE_URL, company, regions, regionSlugs } from "@/app/data/site";
import { reviews, reviewStats } from "@/app/data/reviews";

const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : "/" + path}`;

// 조직(Organization)
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": abs("/#organization"),
    name: company.name,
    alternateName: company.nameEn,
    url: abs("/"),
    logo: abs("/icon.png"),
    image: abs("/images/hero-home.webp"),
    description:
      "전국 오토바이 퀵부터 다마스·라보·1톤 화물까지, 출발지와 도착지에 맞춰 신속하게 배차하는 전국 퀵서비스.",
    telephone: company.phone,
    email: company.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
    },
  };
}

// 웹사이트(WebSite)
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: abs("/"),
    name: company.name,
    inLanguage: "ko-KR",
    publisher: { "@id": abs("/#organization") },
  };
}

// 리뷰(Review) 배열
function reviewNodes() {
  return reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: r.body,
  }));
}

// 지역 서비스(LocalBusiness) + 평점/리뷰
export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": abs("/#localbusiness"),
    name: company.name,
    image: abs("/images/hero-home.webp"),
    url: abs("/"),
    telephone: company.phone,
    email: company.email,
    priceRange: "₩₩",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "서울",
      addressCountry: "KR",
    },
    areaServed: regionSlugs.map((s) => ({
      "@type": "AdministrativeArea",
      name: regions[s].full,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(reviewStats.average),
      reviewCount: String(reviewStats.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviewNodes(),
  };
}

// 전역 그래프(레이아웃에서 1회 출력)
export function globalGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema(), localBusinessSchema()],
  };
}

// 브레드크럼(BreadcrumbList)
export function breadcrumbSchema(crumbs = []) {
  const items = [{ name: "홈", url: abs("/") }];
  crumbs.forEach((c) => {
    items.push({ name: c.label, url: c.href ? abs(c.href) : undefined });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => {
      const el = { "@type": "ListItem", position: i + 1, name: it.name };
      if (it.url) el.item = it.url;
      return el;
    }),
  };
}

// FAQ(FAQPage)
export function faqSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: Array.isArray(it.a) ? it.a.join("\n\n") : it.a,
      },
    })),
  };
}
