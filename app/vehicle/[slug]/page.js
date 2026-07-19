import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, CtaBand, Faq } from "@/app/components/ui";
import { vehicles } from "@/app/data/site";
import { vehicleContent } from "@/app/data/vehicleContent";

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

  const vc = vehicleContent[v.slug] || {};
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
              <p className="lead-text">{vc.intro || v.desc}</p>

              {vc.bestFor && (
                <>
                  <h3>{v.name}가 가장 적합한 경우</h3>
                  <p>{vc.bestFor}</p>
                </>
              )}

              <h3>적합한 물품</h3>
              <div className="pill-list">
                {v.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>

              {vc.scenarios && vc.scenarios.length > 0 && (
                <>
                  <h3>대표 이용 상황</h3>
                  <ul>
                    {vc.scenarios.map((s, i) => (
                      <li key={i}>
                        <b>{s.title}</b> — {s.desc}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h3>적재 기준과 주의사항</h3>
              <p>
                {v.name}의 기본 적재 기준은 <b>{v.capacity}</b> 입니다.{" "}
                {vc.loading ||
                  "물품의 크기와 무게에 따라 적합한 차량이 달라질 수 있으니, 정확한 배차를 위해 접수 시 물품 정보를 알려주세요."}
              </p>

              {vc.compare && (
                <>
                  <h3>다른 차량과 어떻게 다른가요</h3>
                  <p>{vc.compare}</p>
                </>
              )}

              <h3>{v.name} 이용 절차</h3>
              <p>
                출발지와 도착지, 물품 정보와 희망 시간만 알려주시면 {v.name}로 배차해
                픽업부터 도착까지 진행합니다. 접수 시 물품의 크기와 무게를 함께 알려주시면
                가장 알맞은 차량으로 안내해 드리며, 부피나 무게가 애매할 때는 상담을 통해
                재배차 없이 한 번에 배송할 수 있도록 도와드립니다.
              </p>
              <ul>
                <li>접수 — 출발지·도착지·물품 종류·희망 시간 전달</li>
                <li>배차 — 물품에 맞는 {v.name} 배정 및 예상 안내</li>
                <li>픽업·배송 — 출발지에서 수령 후 도착지까지 전달</li>
                <li>완료 — 도착지 담당자 확인으로 마무리</li>
              </ul>

              <div className="callout">
                <p>
                  {vc.notes ? (
                    vc.notes
                  ) : (
                    <>
                      어떤 차량이 맞을지 헷갈리신다면{" "}
                      <Link href="/vehicle/guide/">차량 선택 가이드</Link>를 참고하시거나,
                      접수 시 물품만 알려주시면 상담원이 적합한 차량을 안내해 드립니다.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div>
              <div className="feature-figure" style={{ marginBottom: 18 }}>
                <img src={`/images/vehicle-${v.slug}.webp`} width="900" height="640" loading="lazy" alt={`${v.name} 일러스트`} />
              </div>
              <div className="card" style={{ background: "var(--bg-soft)", position: "sticky", top: 88 }}>
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

      {vc.faq && vc.faq.length > 0 && (
        <section className="section soft">
          <div className="container" style={{ maxWidth: 820 }}>
            <div className="section-head">
              <h2>{v.name} 자주 묻는 질문</h2>
            </div>
            <Faq items={vc.faq} />
          </div>
        </section>
      )}

      <section className="section">
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
