import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "병원·약국 배송",
  description: "의약품·검체·의료용품 등 정시·신속 배송이 중요한 병원·약국 배송을 지원합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="병원·약국 배송"
      desc="정시 도착과 신속함이 중요한 병원·약국 물품 배송을 세심하게 지원합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "병원·약국 배송" }]}
      cta={{ title: "병원·약국 배송, 정시에 안전하게", desc: "배송 물품과 구간을 알려주시면 맞춤 방식으로 안내합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "정기배송 보기", href: "/business/regular-delivery/" } }}
      blocks={[
        { lead: "의약품, 검체, 의료용품 등은 정시 도착과 취급 주의가 중요합니다. 정기 수거·배송과 긴급 배송을 함께 지원합니다." },
        { h3: "주요 배송 대상" },
        {
          list: [
            "약국 간·병원 간 의약품 배송",
            "검체·시료의 정시 수거 및 전달",
            "의료용품·소모품 정기 납품",
            "긴급 처방·물품 배송",
          ],
        },
        { h3: "이용 안내" },
        {
          checklist: [
            "정기 수거·배송 일정 설계",
            "취급 주의 물품에 대한 사전 안내",
            "긴급 상황 시 신속 배차",
            "월 정산·세금계산서 발행",
          ],
        },
        { callout: "온도 관리나 특수 취급이 필요한 물품은 접수 전 상담을 통해 배송 가능 여부와 방법을 안내해 드립니다.", warn: true },
      ]}
    />
  );
}
