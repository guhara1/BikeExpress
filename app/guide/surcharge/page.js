import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "할증 안내",
  description: "야간·주말, 경유, 왕복, 대기, 기상 악화 등 퀵서비스 추가요금이 발생할 수 있는 항목을 안내합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="할증 안내"
      desc="기본 요금 외에 추가요금이 발생할 수 있는 항목을 미리 안내해 드립니다."
      crumbs={[{ label: "요금·이용안내", href: "/guide/" }, { label: "할증 안내" }]}
      cta={{ title: "조건에 맞는 정확한 요금을 안내받으세요", desc: "접수 시 할증 여부를 포함한 예상요금을 안내합니다.", primary: { label: "접수·요금 문의", href: "/order/" }, secondary: { label: "요금 안내로", href: "/guide/" } }}
      blocks={[
        { lead: "아래 조건이 있는 경우 기본 요금에 추가요금이 발생할 수 있습니다. 정확한 금액은 접수 시 조건을 반영해 안내해 드립니다." },
        { h3: "추가요금이 발생할 수 있는 항목" },
        {
          list: [
            "경유지 추가",
            "왕복 배송",
            "대기 시간 발생",
            "야간(심야) 배송",
            "주말·공휴일 배송",
            "기상 악화 (폭우·폭설 등)",
            "물품 크기·중량 초과",
            "상·하차 지원 필요",
            "주차·통행 비용 발생",
            "도서·산간 또는 장거리",
          ],
        },
        { callout: "할증은 실제 발생한 조건에 한해 적용되며, 접수 시 예상 할증 여부를 미리 안내해 드립니다. 예상치 못한 추가요금이 발생하지 않도록 조건을 사전에 확인해 주세요." },
      ]}
    />
  );
}
