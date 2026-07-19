import Link from "next/link";
import { PageHero, CtaBand } from "@/app/components/ui";
import { regionGroups, regions } from "@/app/data/site";

export const metadata = {
  title: "전국 서비스 지역 | 전국 퀵서비스 접수 지역",
  description:
    "수도권·충청·호남·영남·강원·제주까지 전국 17개 시·도 퀵서비스 접수 지역 안내. 지역별 주요 업무지구와 산업단지, 장거리 이용 정보를 확인하세요.",
};

export default function AreaIndex() {
  return (
    <>
      <PageHero
        title="전국 서비스 지역"
        desc="수도권부터 제주까지, 전국 어디서든 퀵서비스를 접수합니다. 권역별로 주요 도시를 선택해 지역 안내를 확인하세요."
        crumbs={[{ label: "전국 서비스 지역" }]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 44 }}>
            <div className="prose">
              <h2>전국 어디서든 배차합니다</h2>
              <p className="lead-text">
                수도권·충청·호남·영남·강원·제주까지 전국 배차 네트워크로 연결합니다.
                권역별로 주요 도시를 선택해 지역 안내와 빠른 접수를 확인하세요.
              </p>
              <ul className="checklist">
                <li>전국 17개 시·도 서비스</li>
                <li>지역 내 단거리부터 수도권↔지방 장거리까지</li>
                <li>산업단지·업무지구 중심의 물류 대응</li>
              </ul>
            </div>
            <div className="feature-figure">
              <img src="/images/map-nationwide.webp" width="1000" height="900" loading="lazy" alt="전국 서비스 지역을 나타내는 대한민국 배차 네트워크 지도" />
            </div>
          </div>

          <div className="grid grid-2">
            {regionGroups.map((g) => (
              <div className="card" key={g.key}>
                <h3 style={{ color: "var(--brand)" }}>{g.name}</h3>
                <div className="chip-grid" style={{ marginTop: 12 }}>
                  {g.regions.map((r) => (
                    <Link href={`/area/${r}/`} key={r} className="chip">
                      {regions[r].name} 퀵서비스
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="callout" style={{ marginTop: 32 }}>
            <p>
              지역 페이지는 실제 이용이 많은 도시부터 순차적으로 시·군·구 단위까지
              확장하고 있습니다. 찾으시는 지역이 없다면 고객센터로 문의해 주시면 배차
              가능 여부를 안내해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
