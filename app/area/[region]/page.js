import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand } from "@/app/components/ui";
import OrderForm from "@/app/components/OrderForm";
import { regions, regionSlugs, regionGroups } from "@/app/data/site";

export function generateStaticParams() {
  return regionSlugs.map((region) => ({ region }));
}

export function generateMetadata({ params }) {
  const r = regions[params.region];
  if (!r) return {};
  return {
    title: `${r.name} 퀵서비스 | ${r.full} 오토바이·화물 퀵 접수`,
    description: `${r.full} 퀵서비스 접수. ${r.districts} 지역 서류·소형물품·기업배송·긴급배송을 오토바이부터 1톤 화물까지 신속하게 배차합니다.`,
  };
}

export default function RegionPage({ params }) {
  const r = regions[params.region];
  if (!r) notFound();

  const group = regionGroups.find((g) => g.regions.includes(r.slug));
  const siblings = group ? group.regions.filter((s) => s !== r.slug) : [];

  return (
    <>
      <PageHero
        title={`${r.name} 퀵서비스`}
        desc={`${r.full}의 서류·소형물품부터 기업 화물까지, 출발지와 도착지에 맞춰 신속하게 배차합니다.`}
        crumbs={[{ label: "전국 서비스 지역", href: "/area/" }, { label: `${r.name} 퀵서비스` }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>{r.full} 퀵서비스 안내</h2>
              <p className="lead-text">{r.industry}</p>

              <h3>주요 업무지구·산업단지</h3>
              <div className="pill-list">
                {r.hubs.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              <h3>자주 이용되는 배송</h3>
              <ul>
                <li>서류·계약서·도장 등 긴급 문서 배송 (오토바이 퀵)</li>
                <li>부품·샘플·소형 박스의 당일 배송</li>
                <li>매장·거래처 물품의 다마스·라보 배송</li>
                <li>기업 화물·대량 물품의 1톤 이상 화물 배송</li>
              </ul>

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
                  <b>지역별 배차 참고사항</b> — {r.districts} 전역에서 접수 가능하며,
                  도서·산간 및 원거리 구간은 배차 가능 여부와 요금을 접수 전 상담을 통해
                  안내합니다.
                </p>
              </div>
            </div>

            <div>
              <div className="form-card" style={{ position: "sticky", top: 88 }}>
                <h3 style={{ marginBottom: 4 }}>{r.name} 지역 빠른 접수</h3>
                <p style={{ fontSize: 14, marginBottom: 16 }}>
                  아래 정보를 남기시면 예상요금과 배차 가능 여부를 안내합니다.
                </p>
                <OrderForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

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
        title={`${r.name}에서 퀵서비스가 필요하세요?`}
        desc="지금 접수하시면 가까운 기사에게 신속하게 배차합니다."
      />
    </>
  );
}
