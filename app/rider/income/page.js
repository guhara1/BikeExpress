import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "예상 수입",
  description: "퀵기사 예상 수입 구조 안내. 배송 건수·거리·차량·근무 시간에 따라 수입이 달라집니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="예상 수입"
      desc="배송한 만큼 수입이 발생하는 구조입니다. 어떤 요소가 수입에 영향을 주는지 안내합니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "예상 수입" }]}
      cta={{ title: "내 활동량에 맞는 수입을 만들어 보세요", desc: "상담 시 활동 지역·시간에 맞춰 더 구체적으로 안내합니다.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "수수료·비용 보기", href: "/rider/fees/" } }}
      blocks={[
        { lead: "수입은 배송 건수와 거리, 차량 종류, 근무 시간, 지역 물량에 따라 달라집니다. 활동량이 많을수록 수입도 함께 늘어나는 구조입니다." },
        { h3: "수입에 영향을 주는 요소" },
        {
          list: [
            "배송 건수 — 많이 배송할수록 수입 증가",
            "배송 거리 — 장거리·경유 배송은 단가가 높음",
            "차량 종류 — 화물 차량은 건당 단가가 높은 편",
            "근무 시간대 — 야간·주말은 할증이 반영됨",
            "활동 지역 — 물량이 많은 지역일수록 유리",
          ],
        },
        { callout: "구체적인 수입은 개인 활동량과 지역 상황에 따라 크게 달라지므로 확정 금액을 단정하지 않습니다. 상담 시 활동 계획에 맞춰 예시를 안내해 드립니다.", warn: true },
        { h3: "수입을 높이는 팁" },
        {
          list: [
            "물량이 많은 시간대·지역 파악하기",
            "경유·왕복 배송으로 이동 효율 높이기",
            "숙련될수록 배송 회전율 향상",
          ],
        },
      ]}
    />
  );
}
