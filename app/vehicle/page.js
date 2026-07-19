import Link from "next/link";
import { PageHero, CtaBand } from "@/app/components/ui";
import { vehicles, vehicleGuideTable } from "@/app/data/site";

export const metadata = {
  title: "차량·서비스 안내 | 오토바이·다마스·라보·1톤 화물",
  description:
    "오토바이 퀵, 다마스, 라보, 1톤·1.4톤·2.5톤 화물 등 물품과 용도에 맞는 퀵서비스 차량 안내와 차량 선택 가이드, 적재 제한 정보를 제공합니다.",
};

export default function VehicleIndex() {
  return (
    <>
      <PageHero
        title="차량·서비스 안내"
        desc="서류 한 장부터 파렛트 화물까지. 물품의 크기와 무게에 맞는 차량을 선택하세요."
        crumbs={[{ label: "차량·서비스 안내" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {vehicles.map((v) => (
              <Link href={`/vehicle/${v.slug}/`} key={v.slug} className="card link">
                <div className="card-media">
                  <img src={`/images/vehicle-${v.slug}.webp`} width="900" height="600" loading="lazy" alt={`${v.name} 차량`} />
                </div>
                <h3>{v.name}</h3>
                <p>{v.summary}</p>
                <div className="pill-list" style={{ marginTop: 12 }}>
                  {v.items.slice(0, 3).map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </Link>
            ))}
            <Link href="/vehicle/guide/" className="card link">
              <div className="card-icon">🧭</div>
              <h3>차량 선택 가이드</h3>
              <p>물품에 맞는 차량을 고르는 방법을 안내합니다.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <h2>차량 선택표</h2>
            <p>물품에 맞는 추천 차량을 한눈에 확인하세요.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>물품</th>
                  <th>추천 차량</th>
                </tr>
              </thead>
              <tbody>
                {vehicleGuideTable.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td><b>{row.vehicle}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center" style={{ marginTop: 20 }}>
            <Link href="/vehicle/load-limit/" className="btn btn-outline">적재 제한 안내 보기</Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
