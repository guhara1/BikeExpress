import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand, Faq, RelatedLinks } from "@/app/components/ui";
import RiderForm from "@/app/components/RiderForm";
import { regions, regionSlugs } from "@/app/data/site";
import { regionContent } from "@/app/data/regionContent";

export function generateStaticParams() {
  return regionSlugs.map((region) => ({ region }));
}

export function generateMetadata({ params }) {
  const r = regions[params.region];
  if (!r) return {};
  return {
    title: `${r.name} 퀵서비스 기사 모집 | ${r.full} 오토바이·화물 기사`,
    description: `${r.full} 퀵서비스 기사를 모집합니다. 초보·투잡·경력 무관, ${r.name} 지역에서 원하는 시간에 활동하세요. 물량 특성과 활동 여건, 비대면 가입까지 안내합니다.`,
  };
}

export default function RiderRegionPage({ params }) {
  const r = regions[params.region];
  if (!r) notFound();

  const rd = (regionContent[r.slug] && regionContent[r.slug].rider) || {};

  return (
    <>
      <PageHero
        title={`${r.name} 퀵기사 모집`}
        desc={`${r.full}에서 활동할 오토바이·화물 퀵기사를 모집합니다. 초보·투잡·경력 무관 지원 가능합니다.`}
        variant="rider"
        crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: `${r.name} 기사 모집` }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>{r.name} 지역 기사 모집 안내</h2>
              <p className="lead-text">
                {rd.intro ||
                  `${r.name}은 ${r.industry.replace(/입니다\.?$/, "")} 지역으로, 서류·소형물품부터 기업 화물까지 다양한 배송 물량이 발생합니다.`}
              </p>

              {rd.demand && (
                <>
                  <h3>{r.name} 지역 배송 물량·수요 특성</h3>
                  <p>{rd.demand}</p>
                </>
              )}

              <h3>{r.name}에서 이런 분을 찾습니다</h3>
              <ul className="checklist">
                <li>{r.name} 및 인근 지역에서 활동 가능한 분</li>
                <li>오토바이·다마스·라보·1톤 등 배송 차량 보유 또는 준비 가능한 분</li>
                <li>전업, 투잡·부업, 주말·시간제 모두 환영</li>
                <li>초보라도 성실하게 배우려는 분</li>
              </ul>

              {rd.areas && (
                <>
                  <h3>{r.name} 주요 활동 권역·동선</h3>
                  <p>{rd.areas}</p>
                </>
              )}

              {rd.tips && rd.tips.length > 0 && (
                <>
                  <h3>{r.name}에서 효율적으로 활동하는 팁</h3>
                  <ul className="checklist">
                    {rd.tips.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </>
              )}

              <h3>{r.name} 지역 활동의 특징</h3>
              <ul>
                <li>주요 배송 거점: {r.hubs.join(", ")}</li>
                <li>인근 지역({r.nearby.join(", ")}) 연계 배송 기회</li>
                <li>{r.longDistance}</li>
              </ul>

              <h3>{r.name}에서 꾸준히 일할 수 있는 이유</h3>
              <p>
                {r.name}은 {r.hubs[0]}을(를) 비롯한 주요 거점에서 배송 수요가 꾸준히
                이어지고, {r.nearby.slice(0, 2).join("·")} 등 인접 지역과 연계된 배송도 많아
                활동 반경을 넓히면 물량 확보가 한결 수월합니다. 자신의 생활권과 활동
                시간대에 맞춰 배송량을 조절하면, 무리하지 않으면서도 안정적으로 배송 일을
                이어 가실 수 있습니다.
              </p>

              <h3>{r.name} 기사 지원부터 첫 배송까지</h3>
              <p>
                {r.name} 지역 활동은 아래 절차로 간단하게 시작할 수 있습니다. 지원과 서류
                확인이 비대면으로 가능해, 준비물만 갖춰져 있으면 빠르게 배송을 시작하실 수
                있습니다.
              </p>
              <ul className="checklist">
                <li>온라인 지원서 작성 후 담당자 상담 진행</li>
                <li>차량·면허·서류 확인 및 {r.name} 활동 지역 설정</li>
                <li>배차 앱 설치와 기본 사용법·안전 수칙 안내</li>
                <li>가까운 지역 단거리 배송부터 시작해 동선 적응</li>
                <li>활동량에 따라 정산하며 점차 활동 반경 확대</li>
              </ul>

              <div className="callout">
                <p>
                  근무 방식과 예상 수입, 수수료가 궁금하다면{" "}
                  <Link href="/rider/work-style/">근무 방식</Link>,{" "}
                  <Link href="/rider/income/">예상 수입</Link>,{" "}
                  <Link href="/rider/fees/">수수료·비용 안내</Link>를 확인하세요.
                </p>
              </div>
            </div>

            <div>
              <div className="form-card" style={{ position: "sticky", top: 88 }}>
                <h3 style={{ marginBottom: 4 }}>{r.name} 기사 지원</h3>
                <p style={{ fontSize: 14, marginBottom: 16 }}>
                  희망 지역이 {r.name}으로 미리 선택됩니다. 정보를 남겨주시면 담당자가
                  안내해 드립니다.
                </p>
                <RiderForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {rd.faq && rd.faq.length > 0 && (
        <section className="section soft">
          <div className="container" style={{ maxWidth: 820 }}>
            <div className="section-head">
              <h2>{r.name} 기사 모집 자주 묻는 질문</h2>
            </div>
            <Faq items={rd.faq} />
          </div>
        </section>
      )}

      <RelatedLinks
        title={`${r.name} 기사 모집 관련 안내`}
        soft={false}
        items={[
          { label: `${r.name} 오토바이 퀵기사 모집`, href: "/rider/motorcycle/" },
          { label: `${r.name} 초보 퀵기사 시작`, href: "/rider/beginner/" },
          { label: `${r.name} 투잡·부업 기사`, href: "/rider/part-time/" },
          { label: `${r.name} 퀵기사 예상 수입`, href: "/rider/income/" },
          { label: `${r.name} 퀵기사 수수료·비용`, href: "/rider/fees/" },
          { label: `${r.name} 기사 가입 준비물`, href: "/rider/requirements/" },
          { label: `${r.name} 기사 지원하기`, href: "/rider/apply/" },
          { label: `${r.name} 퀵서비스 접수(고객)`, href: `/area/${r.slug}/` },
        ]}
      />

      <CtaBand
        title={`${r.name}에서 퀵기사로 시작하세요`}
        desc="지원서를 남기시면 가입 절차와 준비물을 안내해 드립니다."
        primary={{ label: "기사 지원하기", href: "/rider/apply/" }}
        secondary={{ label: "전체 모집 안내", href: "/rider/" }}
      />
    </>
  );
}
