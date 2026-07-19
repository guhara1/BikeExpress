import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "배송 가능·제한 물품",
  description: "퀵서비스로 배송 가능한 물품과 운송이 제한되는 물품을 안내합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="배송 가능·제한 물품"
      desc="안전한 배송을 위해 배송 가능한 물품과 제한되는 물품을 확인해 주세요."
      crumbs={[{ label: "요금·이용안내", href: "/guide/" }, { label: "배송 가능·제한 물품" }]}
      cta={{ title: "배송 가능 여부가 궁금하세요?", desc: "물품을 알려주시면 배송 가능 여부와 방법을 안내합니다.", primary: { label: "접수·문의하기", href: "/order/" }, secondary: { label: "적재 제한 안내", href: "/vehicle/load-limit/" } }}
      blocks={[
        { h3: "배송 가능한 물품" },
        {
          list: [
            "서류·계약서·도장·열쇠 등 소형 물품",
            "휴대전화·소형 부품·샘플",
            "의류·쇼핑백·소형~중형 박스",
            "꽃·행사 물품·소형 가전",
            "부품·자재·매장 물품",
            "대량 박스·기업 화물·파렛트 화물",
          ],
        },
        { h3: "배송이 제한되는 물품" },
        {
          list: [
            "위험물·폭발성·인화성 물질",
            "법령상 운송이 금지된 물품",
            "현금·유가증권 등 고가·귀중품(별도 협의)",
            "안전하게 고정·포장할 수 없는 물품",
            "차량 적재 기준을 초과하는 물품",
          ],
        },
        { callout: "귀중품, 온도 관리가 필요한 물품, 특수 취급이 필요한 물품은 접수 전 상담을 통해 배송 가능 여부와 방법을 확인해 주세요.", warn: true },
      ]}
    />
  );
}
