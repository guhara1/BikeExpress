import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, faqSchema } from "@/app/lib/schema";

// 구조화된 본문 블록 렌더러
export function Blocks({ items }) {
  return (
    <div className="prose">
      {items.map((b, i) => {
        if (b.lead) return <p className="lead-text" key={i}>{b.lead}</p>;
        if (b.h2) return <h2 key={i}>{b.h2}</h2>;
        if (b.h3) return <h3 key={i}>{b.h3}</h3>;
        if (b.p) return <p key={i}>{b.p}</p>;
        if (b.list)
          return (
            <ul key={i}>
              {b.list.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          );
        if (b.checklist)
          return (
            <ul className="checklist" key={i} style={{ margin: "16px 0" }}>
              {b.checklist.map((li, j) => <li key={j}>{li}</li>)}
            </ul>
          );
        if (b.pills)
          return (
            <div className="pill-list" key={i} style={{ margin: "6px 0 16px" }}>
              {b.pills.map((p, j) => <span key={j}>{p}</span>)}
            </div>
          );
        if (b.callout)
          return (
            <div className={`callout ${b.warn ? "warn" : ""}`} key={i}>
              <p>{b.callout}</p>
            </div>
          );
        return null;
      })}
    </div>
  );
}

// FAQ 목록 (details/summary 기반 아코디언) + FAQPage 스키마 자동 출력
export function Faq({ items, schema = true }) {
  return (
    <div className="faq">
      {schema && items && items.length > 0 && <JsonLd data={faqSchema(items)} />}
      {items.map((it, i) => (
        <details className="faq-item" key={i}>
          <summary>{it.q}</summary>
          <div className="faq-a">
            {Array.isArray(it.a) ? it.a.map((p, j) => <p key={j}>{p}</p>) : <p>{it.a}</p>}
          </div>
        </details>
      ))}
    </div>
  );
}

// 히어로 + 본문 + CTA를 묶은 단순 정보 페이지
export function ContentPage({ title, desc, crumbs, variant, blocks, children, cta }) {
  return (
    <>
      <PageHero title={title} desc={desc} crumbs={crumbs} variant={variant} />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          {blocks && <Blocks items={blocks} />}
          {children}
        </div>
      </section>
      {cta !== false && <CtaBand {...(typeof cta === "object" ? cta : {})} />}
    </>
  );
}

// 내부 페이지 상단 히어로 + 브레드크럼
export function PageHero({ title, desc, crumbs = [], variant }) {
  return (
    <section className={`page-hero ${variant === "rider" ? "rider" : ""}`}>
      {crumbs.length > 0 && <JsonLd data={breadcrumbSchema(crumbs)} />}
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="위치">
            <Link href="/">홈</Link>
            {crumbs.map((c, i) => (
              <span key={i}>
                <span>›</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </div>
    </section>
  );
}

// 하단 접수/지원 유도 배너
export function CtaBand({
  title = "지금 바로 퀵서비스를 접수하세요",
  desc = "출발지와 도착지만 알려주시면 예상요금과 배차 가능 여부를 신속하게 안내합니다.",
  primary = { label: "퀵서비스 접수하기", href: "/order/" },
  secondary = { label: "기사 지원하기", href: "/rider/apply/" },
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="hero-actions">
            <Link href={primary.href} className="btn btn-accent btn-lg">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className="btn btn-ghost btn-lg">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// 카드 링크 그리드
export function CardGrid({ items, cols = 3 }) {
  return (
    <div className={`grid grid-${cols}`}>
      {items.map((it) => {
        const inner = (
          <>
            {it.icon && <div className="card-icon">{it.icon}</div>}
            {it.tag && <span className="card-tag">{it.tag}</span>}
            <h3>{it.title}</h3>
            {it.desc && <p>{it.desc}</p>}
          </>
        );
        return it.href ? (
          <Link href={it.href} key={it.title} className="card link">
            {inner}
          </Link>
        ) : (
          <div className="card" key={it.title}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

// 롱테일 내부링크 블록 (칩 형태)
export function RelatedLinks({
  title = "함께 보면 좋은 페이지",
  desc,
  items = [],
  soft = true,
}) {
  if (!items.length) return null;
  return (
    <section className={`section ${soft ? "soft" : ""}`}>
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          {desc && <p>{desc}</p>}
        </div>
        <div className="chip-grid" style={{ justifyContent: "center" }}>
          {items.map((it) => (
            <Link href={it.href} key={it.href + it.label} className="chip">
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// 하위 페이지 목록형 링크 그리드 (텍스트 위주)
export function LinkList({ items, cols = 3 }) {
  return (
    <div className={`grid grid-${cols}`}>
      {items.map((it) => (
        <Link href={it.href} key={it.href} className="card link">
          <h3 style={{ fontSize: 17, marginBottom: it.desc ? 6 : 0 }}>{it.title}</h3>
          {it.desc && <p>{it.desc}</p>}
        </Link>
      ))}
    </div>
  );
}
