import { PageHero, LinkList, CtaBand } from "@/app/components/ui";

export const metadata = {
  title: "퀵서비스 이용 | 당일·긴급·예약·장거리 퀵배송",
  description:
    "오토바이 퀵부터 당일·긴급·예약·야간·장거리·왕복·경유 배송까지. 필요한 퀵서비스를 선택해 출발지와 도착지에 맞춰 접수하세요.",
};

const items = [
  { title: "퀵서비스 접수", href: "/order/", desc: "출발지·도착지·물품만 입력하면 바로 접수" },
  { title: "오토바이 퀵", href: "/quick-service/motorcycle/", desc: "서류·소형물품 긴급 배송" },
  { title: "당일 퀵배송", href: "/quick-service/same-day/", desc: "당일 픽업·당일 배송" },
  { title: "긴급 퀵배송", href: "/quick-service/urgent/", desc: "가장 빠른 배차가 필요할 때" },
  { title: "예약 퀵배송", href: "/quick-service/reservation/", desc: "날짜·시간을 미리 지정" },
  { title: "야간·주말 배송", href: "/quick-service/night-weekend/", desc: "야간·주말·공휴일 접수" },
  { title: "장거리 퀵서비스", href: "/quick-service/long-distance/", desc: "수도권↔지방, 지방 간 이동" },
  { title: "왕복 배송", href: "/quick-service/round-trip/", desc: "전달 후 회수까지 한 번에" },
  { title: "다중 경유 배송", href: "/quick-service/multi-stop/", desc: "여러 거래처 순차 방문" },
];

export default function QuickServiceIndex() {
  return (
    <>
      <PageHero
        title="퀵서비스 이용"
        desc="필요한 배송 유형을 선택하면 더 정확하게 접수됩니다. 전국 어디서든 가까운 기사에게 신속하게 배차합니다."
        crumbs={[{ label: "퀵서비스 이용" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 44 }}>
            <div className="prose">
              <h2>필요한 배송, 정확하게 접수</h2>
              <p className="lead-text">
                당일·긴급·예약부터 장거리·왕복·경유 배송까지, 상황에 맞는 서비스를
                선택하면 배차가 더 빠르고 정확합니다.
              </p>
              <ul className="checklist">
                <li>전국 어디서나 접수 가능</li>
                <li>가까운 기사에게 우선 배차</li>
                <li>전화·카카오톡·온라인 접수 선택</li>
              </ul>
            </div>
            <div className="feature-figure">
              <img src="/images/service-quick.webp" width="1000" height="800" loading="lazy" alt="휴대폰으로 퀵서비스를 접수하는 모습 일러스트" />
            </div>
          </div>
          <LinkList items={items} cols={3} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
