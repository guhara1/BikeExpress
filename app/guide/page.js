import Link from "next/link";
import { PageHero, Blocks, CtaBand } from "@/app/components/ui";

export const metadata = {
  title: "요금·이용안내 | 퀵서비스 요금·할증·이용 방법",
  description:
    "퀵서비스 요금은 거리·차량·물품·시간대 등에 따라 달라집니다. 요금 기준과 할증 항목, 접수·결제 방법, 배송 물품, 취소·환불, 사고 대응까지 안내합니다.",
};

const sub = [
  { title: "차량별 요금", href: "/guide/vehicle-price/" },
  { title: "할증 안내", href: "/guide/surcharge/" },
  { title: "접수 방법", href: "/guide/how-to-order/" },
  { title: "결제 방법", href: "/guide/payment/" },
  { title: "배송 가능·제한 물품", href: "/guide/items/" },
  { title: "취소·환불 안내", href: "/guide/refund/" },
  { title: "사고·파손 대응", href: "/guide/accident/" },
  { title: "자주 묻는 질문", href: "/guide/faq/" },
];

export default function GuideIndex() {
  return (
    <>
      <PageHero
        title="요금·이용안내"
        desc="퀵서비스 요금은 여러 조건에 따라 달라집니다. 요금 기준과 이용 방법을 확인하세요."
        crumbs={[{ label: "요금·이용안내" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Blocks
            items={[
              { h2: "퀵서비스 요금 안내" },
              {
                lead:
                  "퀵서비스 요금은 출발지와 도착지, 거리, 차량 종류, 물품 크기, 교통상황, 대기시간, 경유지 및 야간·주말 여부에 따라 달라질 수 있습니다. 정확한 요금은 접수 전 상담을 통해 안내합니다.",
              },
              { h3: "요금에 영향을 주는 요소" },
              {
                list: [
                  "출발지·도착지 간 거리",
                  "차량 종류 (오토바이·다마스·라보·1톤 이상)",
                  "물품의 크기·무게",
                  "픽업·도착 시간대 (야간·주말 여부)",
                  "경유지·왕복·대기 시간",
                  "교통 상황과 기상 조건",
                ],
              },
              {
                callout:
                  "고정 요금을 단정하지 않는 이유는, 같은 구간이라도 물품과 조건에 따라 요금이 달라지기 때문입니다. 정확한 요금은 접수 시 안내해 드리며, 예상요금 문의는 언제든 가능합니다.",
              },
            ]}
          />

          <div className="grid grid-2" style={{ marginTop: 32 }}>
            {sub.map((s) => (
              <Link href={s.href} key={s.href} className="card link">
                <h3 style={{ fontSize: 17, marginBottom: 0 }}>{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="예상요금이 궁금하세요?"
        desc="출발지와 도착지, 물품만 알려주시면 예상요금과 배차 가능 여부를 안내합니다."
        primary={{ label: "예상요금 문의·접수", href: "/order/" }}
        secondary={{ label: "할증 안내 보기", href: "/guide/surcharge/" }}
      />
    </>
  );
}
