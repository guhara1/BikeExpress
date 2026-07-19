import Link from "next/link";
import OrderForm from "./components/OrderForm";
import { CtaBand } from "./components/ui";
import {
  vehicles,
  regionGroups,
  regions,
  usageSteps,
  company,
} from "./data/site";

export const metadata = {
  title: `${company.name} | 전국 퀵서비스 빠른 접수 · 오토바이 퀵기사 모집`,
  description:
    "전국 퀵서비스 빠른 접수. 오토바이부터 다마스·라보·1톤 화물까지 전국 배차. 서류·소형물품·기업배송·긴급배송을 출발지와 도착지에 맞춰 신속하게 접수합니다.",
};

const services = [
  { slug: "motorcycle", name: "오토바이 퀵", desc: "서류·소형물품 긴급 배송", href: "/quick-service/motorcycle/" },
  { slug: "damas", name: "다마스 퀵", desc: "중형 박스·다량 소화물", href: "/vehicle/damas/" },
  { slug: "labo", name: "라보 퀵", desc: "부피 있는 화물·자재", href: "/vehicle/labo/" },
  { slug: "1ton", name: "1톤 화물", desc: "대량·중량 화물 운송", href: "/vehicle/1ton/" },
  { slug: "long", name: "지방 장거리", desc: "수도권↔지방 장거리 배차", href: "/quick-service/long-distance/" },
  { slug: "biz", name: "기업 정기배송", desc: "월 정산·다지점 배송", href: "/business/" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="hero-badge">🛵 전국 배차 · 당일·긴급 접수 가능</span>
          <h1>
            전국 퀵서비스 빠른 접수
            <br />
            오토바이부터 1톤 화물까지 전국 배차
          </h1>
          <p className="lead">
            서류, 소형물품, 기업배송, 긴급배송을 출발지와 도착지에 맞춰 신속하게
            접수합니다. 전국 어디서든 가까운 기사에게 바로 배차합니다.
          </p>
          <div className="hero-actions">
            <Link href="/order/" className="btn btn-accent btn-lg">
              퀵서비스 접수하기
            </Link>
            <Link href="/guide/" className="btn btn-ghost btn-lg">
              예상요금 문의
            </Link>
            <a href={`tel:${company.phoneRaw}`} className="btn btn-ghost btn-lg">
              전화로 접수 {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 서비스 선택 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SERVICE</span>
            <h2>어떤 배송이 필요하세요?</h2>
            <p>물품과 거리에 맞는 서비스를 선택하면 더 정확하게 접수됩니다.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => (
              <Link href={s.href} key={s.slug} className="card link">
                <div className="card-icon">
                  {s.slug === "motorcycle" ? "🛵" : s.slug === "long" ? "🗺️" : s.slug === "biz" ? "🏢" : "🚚"}
                </div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 빠른 접수 폼 */}
      <section className="section soft" id="quick-order">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">QUICK ORDER</span>
              <h2 style={{ fontSize: 32 }}>빠른 접수</h2>
              <p className="prose lead-text">
                출발지와 도착지, 물품과 차량, 희망 시간만 입력하면 상담원이 예상요금과
                배차 가능 여부를 확인해 안내합니다.
              </p>
              <ul className="checklist" style={{ marginTop: 20 }}>
                <li>전국 어디서나 접수 가능</li>
                <li>당일·긴급·예약 배송 모두 지원</li>
                <li>전화·카카오톡·온라인 접수 선택 가능</li>
                <li>기업 고객은 월 정산·세금계산서 발행</li>
              </ul>
            </div>
            <OrderForm compact />
          </div>
        </div>
      </section>

      {/* 전국 서비스 지역 */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">NATIONWIDE</span>
            <h2>전국 서비스 지역</h2>
            <p>수도권부터 제주까지, 전국 17개 시·도에서 퀵서비스를 접수합니다.</p>
          </div>
          <div className="grid grid-3">
            {regionGroups.map((g) => (
              <div className="card" key={g.key}>
                <h3 style={{ color: "var(--brand)" }}>{g.name}</h3>
                <div className="chip-grid" style={{ marginTop: 12 }}>
                  {g.regions.map((r) => (
                    <Link href={`/area/${r}/`} key={r} className="chip">
                      {regions[r].name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="card" style={{ background: "var(--brand)", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ color: "#fff" }}>우리 지역도 되나요?</h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>
                전국 배차 네트워크로 대부분 지역을 지원합니다.
              </p>
              <Link href="/area/" className="btn btn-ghost btn-sm" style={{ marginTop: 8, alignSelf: "flex-start" }}>
                전체 지역 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 절차 */}
      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>이용 절차</h2>
            <p>접수부터 배송 완료까지 5단계로 간단합니다.</p>
          </div>
          <div className="steps">
            {usageSteps.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기업 고객 안내 */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">FOR BUSINESS</span>
              <h2 style={{ fontSize: 30 }}>기업 고객 안내</h2>
              <p className="prose lead-text">
                반복되는 배송은 정기배송과 월 단위 정산으로 더 편리하게. 다지점 배송과
                전담 상담으로 기업 물류를 지원합니다.
              </p>
              <div className="pill-list" style={{ marginTop: 16 }}>
                {["세금계산서", "월 단위 정산", "정기배송", "다지점 배송", "전담 상담", "배송 내역 관리"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Link href="/business/" className="btn btn-primary">기업배송 자세히 보기</Link>
              </div>
            </div>
            <div className="card" style={{ background: "var(--bg-soft)" }}>
              <h3>기업 상담 신청</h3>
              <p>월 예상 이용 건수와 주요 배송 구간을 알려주시면 맞춤 견적을 안내합니다.</p>
              <ul className="checklist" style={{ margin: "16px 0" }}>
                <li>업종별 배송 (병원·약국, 법무·세무, 인쇄·샘플, 부품·자재)</li>
                <li>쇼핑몰·이커머스 출고 배송</li>
                <li>대량·다지점 정기 배송</li>
              </ul>
              <Link href="/business/contact/" className="btn btn-outline">기업 상담 신청하기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 기사 모집 요약 */}
      <section className="section soft">
        <div className="container">
          <div className="cta-band" style={{ background: "linear-gradient(135deg, #7a3b00, var(--accent))" }}>
            <span className="eyebrow" style={{ color: "#fff" }}>RIDER RECRUIT</span>
            <h2>전국 오토바이 퀵기사 모집</h2>
            <p>
              초보자·투잡·경력 기사 모두 지원 가능합니다. 근무 방식과 예상 수입,
              수수료를 확인하고 비대면으로 간편하게 시작하세요.
            </p>
            <div className="hero-actions">
              <Link href="/rider/apply/" className="btn btn-accent btn-lg" style={{ background: "#fff", color: "var(--accent-dark)", borderColor: "#fff" }}>
                기사 지원하기
              </Link>
              <Link href="/rider/" className="btn btn-ghost btn-lg">
                모집 안내 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
