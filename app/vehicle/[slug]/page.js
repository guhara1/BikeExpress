import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand } from "@/app/components/ui";
import { vehicles } from "@/app/data/site";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }) {
  const v = vehicles.find((x) => x.slug === params.slug);
  if (!v) return {};
  return {
    title: `${v.name} | ${v.summary}`,
    description: `${v.desc} 적합한 물품: ${v.items.join(", ")}.`,
  };
}

export default function VehiclePage({ params }) {
  const v = vehicles.find((x) => x.slug === params.slug);
  if (!v) notFound();

  const others = vehicles.filter((x) => x.slug !== v.slug);

  return (
    <>
      <PageHero
        title={v.name}
        desc={v.summary}
        crumbs={[{ label: "차량·서비스 안내", href: "/vehicle/" }, { label: v.name }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>{v.name} 안내</h2>
              <p className="lead-text">{v.desc}</p>

              <h3>적합한 물품</h3>
              <div className="pill-list">
                {v.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>

              <h3>적재 기준</h3>
              <p>
                {v.name}의 기본 적재 기준은 <b>{v.capacity}</b> 입니다. 물품의 크기와
                무게에 따라 적합한 차량이 달라질 수 있으니, 정확한 배차를 위해 접수 시
                물품 정보를 알려주세요.
              </p>

              <div className="callout">
                <p>
                  어떤 차량이 맞을지 헷갈리신다면 <Link href="/vehicle/guide/">차량 선택
                  가이드</Link>를 참고하시거나, 접수 시 물품만 알려주시면 상담원이 적합한
                  차량을 안내해 드립니다.
                </p>
              </div>
            </div>

            <div>
              <div className="card" style={{ background: "var(--bg-soft)" }}>
                <h3>{v.name} 바로 접수</h3>
                <p>출발지·도착지와 물품만 알려주시면 신속하게 배차합니다.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  <Link href="/order/" className="btn btn-primary">퀵서비스 접수하기</Link>
                  <Link href="/guide/vehicle-price/" className="btn btn-outline">차량별 요금 보기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <h2>다른 차량 안내</h2>
          </div>
          <div className="grid grid-4">
            {others.map((o) => (
              <Link href={`/vehicle/${o.slug}/`} key={o.slug} className="card link">
                <h3 style={{ fontSize: 17 }}>{o.name}</h3>
                <p>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
