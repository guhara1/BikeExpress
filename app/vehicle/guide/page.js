import { ContentPage } from "@/app/components/ui";
import { vehicleGuideTable } from "@/app/data/site";

export const metadata = {
  title: "차량 선택 가이드",
  description: "물품의 크기와 무게에 맞는 퀵서비스 차량을 고르는 방법을 안내합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="차량 선택 가이드"
      desc="물품에 딱 맞는 차량을 선택하면 배차가 빠르고 요금도 합리적입니다."
      crumbs={[{ label: "차량·서비스 안내", href: "/vehicle/" }, { label: "차량 선택 가이드" }]}
      blocks={[
        { lead: "물품의 크기·무게·수량을 기준으로 차량을 선택합니다. 헷갈리실 때는 접수 시 물품만 알려주시면 상담원이 가장 적합한 차량을 안내해 드립니다." },
        { h3: "이렇게 선택하세요" },
        {
          list: vehicleGuideTable.map((r) => `${r.item} → ${r.vehicle}`),
        },
        { h3: "선택이 어렵다면" },
        { p: "여러 물품을 함께 보내거나 부피가 애매한 경우, 무리하게 작은 차량을 선택하면 재배차가 필요할 수 있습니다. 이럴 때는 물품 사진이나 대략적인 크기를 알려주시면 정확하게 안내해 드립니다." },
        { callout: "적재 가능 여부와 안전 기준은 차량마다 다릅니다. 대형·중량 화물은 적재 제한 안내를 함께 확인해 주세요." },
      ]}
    />
  );
}
