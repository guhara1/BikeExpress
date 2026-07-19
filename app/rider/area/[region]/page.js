import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand } from "@/app/components/ui";
import RiderForm from "@/app/components/RiderForm";
import { regions, regionSlugs } from "@/app/data/site";

export function generateStaticParams() {
  return regionSlugs.map((region) => ({ region }));
}

export function generateMetadata({ params }) {
  const r = regions[params.region];
  if (!r) return {};
  return {
    title: `${r.name} 퀵서비스 기사 모집 | ${r.full} 오토바이·화물 기사`,
    description: `${r.full} 퀵서비스 기사를 모집합니다. 초보·투잡·경력 무관, ${r.name} 지역에서 원하는 시간에 활동하세요. 비대면 가입 가능.`,
  };
}

export default function RiderRegionPage({ params }) {
  const r = regions[params.region];
  if (!r) notFound();

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
                {r.name}은 {r.industry.replace(/입니다\.?$/, "")} 지역으로, 서류·소형물품부터
                기업 화물까지 다양한 배송 물량이 발생합니다. 활동 지역을 중심으로 꾸준히
                일하실 수 있습니다.
              </p>

              <h3>{r.name}에서 이런 분을 찾습니다</h3>
              <ul className="checklist">
                <li>{r.name} 및 인근 지역에서 활동 가능한 분</li>
                <li>오토바이·다마스·라보·1톤 등 배송 차량 보유 또는 준비 가능한 분</li>
                <li>전업, 투잡·부업, 주말·시간제 모두 환영</li>
                <li>초보라도 성실하게 배우려는 분</li>
              </ul>

              <h3>{r.name} 지역 활동의 특징</h3>
              <ul>
                <li>주요 배송 거점: {r.hubs.join(", ")}</li>
                <li>인근 지역({r.nearby.join(", ")}) 연계 배송 기회</li>
                <li>{r.longDistance}</li>
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

      <CtaBand
        title={`${r.name}에서 퀵기사로 시작하세요`}
        desc="지원서를 남기시면 가입 절차와 준비물을 안내해 드립니다."
        primary={{ label: "기사 지원하기", href: "/rider/apply/" }}
        secondary={{ label: "전체 모집 안내", href: "/rider/" }}
      />
    </>
  );
}
