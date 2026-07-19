import Link from "next/link";
import OrderForm from "./components/OrderForm";
import { CtaBand, Faq } from "./components/ui";
import {
  vehicles,
  regionGroups,
  regions,
  usageSteps,
  company,
} from "./data/site";

export const metadata = {
  title: `${company.name} | 전국 최저가 퀵서비스 빠른 접수 · 오토바이 퀵기사 모집`,
  description:
    "전국 퀵서비스 빠른 접수. 오토바이부터 다마스·라보·1톤 화물까지 전국 배차. 서류·소형물품·기업배송·긴급배송을 출발지와 도착지에 맞춰 신속하게 접수합니다.",
};

const services = [
  { slug: "motorcycle", name: "오토바이 퀵", desc: "서류·소형물품 긴급 배송", href: "/quick-service/motorcycle/", img: "/images/vehicle-motorcycle.webp" },
  { slug: "damas", name: "다마스 퀵", desc: "중형 박스·다량 소화물", href: "/vehicle/damas/", img: "/images/vehicle-damas.webp" },
  { slug: "labo", name: "라보 퀵", desc: "부피 있는 화물·자재", href: "/vehicle/labo/", img: "/images/vehicle-labo.webp" },
  { slug: "1ton", name: "1톤 화물", desc: "대량·중량 화물 운송", href: "/vehicle/1ton/", img: "/images/vehicle-1ton.webp" },
  { slug: "long", name: "지방 장거리", desc: "수도권↔지방 장거리 배차", href: "/quick-service/long-distance/", img: "/images/map-nationwide.webp" },
  { slug: "biz", name: "기업 정기배송", desc: "월 정산·다지점 배송", href: "/business/", img: "/images/business.webp" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-grid">
            <div>
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
            <div className="hero-figure">
              <img
                src="/images/hero-home.webp"
                width="1600"
                height="900"
                alt="도심을 달리는 전국 퀵서비스 배송 오토바이 일러스트"
                fetchPriority="high"
              />
            </div>
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
                <div className="card-media">
                  <img src={s.img} width="900" height="600" loading="lazy" alt={`${s.name} 서비스`} />
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
            <div className="feature-figure">
              <img src="/images/business.webp" width="1000" height="800" loading="lazy" alt="기업 배송, 정기배송과 월 정산을 나타내는 일러스트" />
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

      {/* 서비스 소개 상세 */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="prose">
            <h2>전국 어디서나, 한 번의 접수로 끝내는 퀵서비스</h2>
            <p className="lead-text">
              바이크익스프레스는 서류 한 장부터 파렛트 화물까지, 출발지와 도착지에 맞춰
              가장 적합한 차량과 기사를 신속하게 연결하는 전국 퀵서비스 플랫폼입니다.
              오토바이 퀵의 긴급 서류 배송, 다마스·라보의 중형 화물, 1톤 이상 화물의 대량
              운송까지 하나의 창구에서 접수하실 수 있습니다.
            </p>

            <h3>왜 바이크익스프레스일까요</h3>
            <p>
              전국 배차 네트워크로 수도권 내 단거리부터 수도권과 지방을 잇는 장거리까지
              폭넓게 대응합니다. 당일·긴급·예약·야간·주말 배송을 모두 지원하며, 전화·카카오톡·
              온라인 등 편한 방식으로 접수하실 수 있습니다. 온라인 접수 후에는 상담원이
              요금과 배차 가능 여부를 먼저 확인해 안내하므로, 확인 없이 결제되는 일 없이
              안심하고 이용하실 수 있습니다.
            </p>

            <h3>이런 분들이 이용합니다</h3>
            <ul>
              <li>마감 시간에 쫓기는 계약서·서류를 지금 바로 전달해야 하는 분</li>
              <li>생산·정비 현장에 긴급 부품을 당일 안에 받아야 하는 기업</li>
              <li>쇼핑몰·매장의 당일 출고와 반품·교환 물품을 보내는 사업자</li>
              <li>매일·매주 반복되는 배송을 정기배송·월 정산으로 관리하려는 기업</li>
              <li>여러 거래처를 한 번에 순회 배송해야 하는 분</li>
            </ul>

            <h3>합리적인 요금, 투명한 안내</h3>
            <p>
              퀵서비스 요금은 거리, 차량 종류, 물품의 크기와 무게, 시간대, 경유·왕복 여부
              등 여러 조건에 따라 달라집니다. 고정 요금을 단정하지 않고, 접수 시 조건을
              확인해 예상 요금을 투명하게 안내해 드립니다. 기업 고객은 월 단위 정산과
              세금계산서 발행으로 더욱 편리하게 이용하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <h2>자주 묻는 질문</h2>
            <p>퀵서비스 이용 전 궁금한 점을 확인하세요.</p>
          </div>
          <Faq
            items={[
              {
                q: "전국 어디서나 이용할 수 있나요?",
                a: "네, 전국 17개 시·도에서 접수 가능합니다. 수도권 내 단거리부터 수도권과 지방을 잇는 장거리까지 배차하며, 도서·산간 및 원거리는 배차 가능 여부와 요금을 접수 전 안내해 드립니다.",
              },
              {
                q: "얼마나 빨리 배송되나요?",
                a: "거리와 교통 상황, 배차 가능한 기사 상황에 따라 다릅니다. 당일·긴급 배송은 가까운 기사에게 우선 배차하며, 접수 시 예상 픽업·도착 시간을 안내해 드립니다.",
              },
              {
                q: "요금은 어떻게 정해지나요?",
                a: "거리, 차량 종류, 물품의 크기·무게, 시간대, 경유·왕복 여부 등 여러 조건에 따라 달라집니다. 고정 요금을 단정하지 않고 접수 시 조건을 확인해 예상 요금을 안내해 드립니다.",
              },
              {
                q: "어떤 차량을 선택해야 하나요?",
                a: "서류·소형물품은 오토바이 퀵, 중형 박스나 다량 소화물은 다마스, 부피가 큰 화물은 라보, 대량·중량 화물은 1톤 이상 화물이 적합합니다. 헷갈리시면 물품만 알려주시면 적합한 차량을 안내해 드립니다.",
              },
              {
                q: "온라인으로 접수하면 바로 결제되나요?",
                a: "아니요. 온라인 접수 후 상담원이 요금과 배차 가능 여부를 확인한 뒤 확정하는 방식입니다. 확인 없이 바로 결제되지 않으니 안심하고 접수하세요.",
              },
              {
                q: "기업 정기배송도 가능한가요?",
                a: "네, 정기배송과 월 단위 정산, 세금계산서 발행, 다지점 배송을 지원합니다. 월 예상 이용 건수와 주요 배송 구간을 알려주시면 맞춤 견적을 안내해 드립니다.",
              },
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
