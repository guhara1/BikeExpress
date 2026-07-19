import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand, Faq, RelatedLinks } from "@/app/components/ui";
import OrderForm from "@/app/components/OrderForm";
import { regions, regionSlugs, regionGroups } from "@/app/data/site";
import { regionContent } from "@/app/data/regionContent";

export function generateStaticParams() {
  return regionSlugs.map((region) => ({ region }));
}

export function generateMetadata({ params }) {
  const r = regions[params.region];
  if (!r) return {};
  return {
    title: `${r.name} 퀵서비스 최저가 | ${r.full} 오토바이·화물 퀵 접수`,
    description: `${r.full} 최저가 퀵서비스 접수. ${r.districts} 지역 서류·소형물품·기업배송·긴급배송을 오토바이부터 1톤 화물까지 합리적인 최저가로 신속하게 배차합니다.`,
  };
}

export default function RegionPage({ params }) {
  const r = regions[params.region];
  if (!r) notFound();

  const c = (regionContent[r.slug] && regionContent[r.slug].customer) || {};
  const group = regionGroups.find((g) => g.regions.includes(r.slug));
  const siblings = group ? group.regions.filter((s) => s !== r.slug) : [];

  return (
    <>
      <PageHero
        title={`${r.name} 퀵서비스 최저가`}
        desc={`${r.full}의 서류·소형물품부터 기업 화물까지, 합리적인 최저가로 출발지와 도착지에 맞춰 신속하게 배차합니다.`}
        crumbs={[{ label: "전국 서비스 지역", href: "/area/" }, { label: `${r.name} 퀵서비스` }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>{r.full} 최저가 퀵서비스 안내</h2>
              <p className="lead-text">{c.intro || r.industry}</p>

              {c.logistics && (
                <>
                  <h3>{r.name} 지역 물류 환경</h3>
                  <p>{c.logistics}</p>
                </>
              )}

              <h3>주요 업무지구·산업단지</h3>
              <div className="pill-list">
                {r.hubs.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              <h3>{r.name}에서 자주 이용되는 배송</h3>
              {c.deliveryTypes ? (
                <ul>
                  {c.deliveryTypes.map((d, i) => (
                    <li key={i}>
                      <b>{d.title}</b> — {d.desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <li>서류·계약서·도장 등 긴급 문서 배송 (오토바이 퀵)</li>
                  <li>부품·샘플·소형 박스의 당일 배송</li>
                  <li>매장·거래처 물품의 다마스·라보 배송</li>
                  <li>기업 화물·대량 물품의 1톤 이상 화물 배송</li>
                </ul>
              )}

              {c.routes && (
                <>
                  <h3>대표 배송 경로</h3>
                  <ul>
                    {c.routes.map((rt, i) => (
                      <li key={i}>{rt}</li>
                    ))}
                  </ul>
                </>
              )}

              {c.coverage && (
                <>
                  <h3>{r.name} 서비스 커버리지</h3>
                  <p>{c.coverage}</p>
                </>
              )}

              <h3>인접 도시 이동 · 장거리 이용</h3>
              <p>
                {r.name}에서 {r.nearby.join(", ")} 등 인접 지역으로의 이동은 물론,
                {" "}{r.longDistance}
              </p>

              <h3>접수 전 확인사항</h3>
              <ul>
                <li>정확한 출발지·도착지 주소와 담당자 연락처</li>
                <li>물품 종류·크기·무게 (차량 선택에 필요)</li>
                <li>픽업 희망시간과 도착 희망시간</li>
                <li>야간·주말·경유 등 추가 조건 여부</li>
              </ul>

              <div className="callout">
                <p>
                  <b>지역별 배차 참고사항</b> — {c.notes || `${r.districts} 전역에서 접수 가능하며, 도서·산간 및 원거리 구간은 배차 가능 여부와 요금을 접수 전 상담을 통해 안내합니다.`}
                </p>
              </div>
            </div>

            <div>
              <div className="form-card" style={{ position: "sticky", top: 88 }}>
                <h3 style={{ marginBottom: 4 }}>{r.name} 지역 빠른 접수</h3>
                <p style={{ fontSize: 14, marginBottom: 16 }}>
                  아래 정보를 남기시면 예상요금과 배차 가능 여부를 최저가로 안내합니다.
                </p>
                <OrderForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {c.faq && c.faq.length > 0 && (
        <section className="section soft">
          <div className="container" style={{ maxWidth: 820 }}>
            <div className="section-head">
              <h2>{r.name} 퀵서비스 자주 묻는 질문</h2>
            </div>
            <Faq items={c.faq} />
          </div>
        </section>
      )}

      <RelatedLinks
        title={`${r.name} 퀵서비스 관련 안내`}
        desc="필요한 서비스로 바로 이동하세요."
        soft={false}
        items={[
          { label: `${r.name} 오토바이 퀵서비스`, href: "/quick-service/motorcycle/" },
          { label: `${r.name} 당일 퀵배송`, href: "/quick-service/same-day/" },
          { label: `${r.name} 긴급 퀵서비스`, href: "/quick-service/urgent/" },
          { label: `${r.name} 장거리 퀵서비스`, href: "/quick-service/long-distance/" },
          { label: `${r.name} 화물 퀵(다마스·라보·1톤)`, href: "/vehicle/" },
          { label: `${r.name} 기업 정기배송`, href: "/business/" },
          { label: `${r.name} 퀵서비스 요금 안내`, href: "/guide/" },
          { label: `${r.name} 퀵기사 모집`, href: `/rider/area/${r.slug}/` },
        ]}
      />

      {siblings.length > 0 && (
        <section className="section soft">
          <div className="container">
            <div className="section-head">
              <h2>{group.name} 다른 지역</h2>
            </div>
            <div className="chip-grid" style={{ justifyContent: "center" }}>
              {siblings.map((s) => (
                <Link href={`/area/${s}/`} key={s} className="chip">
                  {regions[s].name} 퀵서비스
                </Link>
              ))}
              <Link href="/area/" className="chip">전국 전체 지역</Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`${r.name}에서 최저가 퀵서비스가 필요하세요?`}
        desc="지금 접수하시면 가까운 기사에게 합리적인 최저가로 신속하게 배차합니다."
      />
    </>
  );
}
