import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "부품·자재 배송",
  description: "생산 현장과 거래처를 잇는 부품·자재의 긴급·정기 배송을 지원합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="부품·자재 배송"
      desc="생산이 멈추지 않도록, 부품과 자재를 긴급·정기 배송으로 신속하게 공급합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "부품·자재 배송" }]}
      cta={{ title: "부품·자재, 필요한 순간 바로 배송", desc: "배송 구간과 물량을 알려주시면 맞춤 방식으로 안내합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "긴급 배송 보기", href: "/quick-service/urgent/" } }}
      blocks={[
        { lead: "부품 하나가 없어 생산이 멈추는 상황을 막기 위해, 긴급 부품 배송과 정기 자재 납품을 함께 지원합니다." },
        { h3: "주요 배송 대상" },
        {
          list: [
            "생산 라인 긴급 부품",
            "정비·수리용 교체 부품",
            "현장 시공 자재",
            "정기 납품 자재·소모품",
          ],
        },
        { h3: "이용 시 이점" },
        {
          checklist: [
            "긴급 부품의 신속 배차로 생산 차질 최소화",
            "장거리 산업단지 간 배송 지원",
            "정기 자재 납품 자동화",
            "월 정산·세금계산서 발행",
          ],
        },
        { callout: "부피가 크거나 무거운 자재는 라보·1톤 이상 화물로 배차됩니다. 물품 정보를 알려주시면 적합한 차량을 안내해 드립니다." },
      ]}
    />
  );
}
