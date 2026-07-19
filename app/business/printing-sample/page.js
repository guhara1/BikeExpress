import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "인쇄물·샘플 배송",
  description: "인쇄물과 제품 샘플을 정시에 전달하는 기업 배송 서비스입니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="인쇄물·샘플 배송"
      desc="시안·인쇄물과 제품 샘플을 정시에 전달해 업무 흐름을 지원합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "인쇄물·샘플 배송" }]}
      cta={{ title: "인쇄물·샘플 배송을 신속하게", desc: "배송 물품과 구간을 알려주시면 맞춤 견적을 안내합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "당일 배송 보기", href: "/quick-service/same-day/" } }}
      blocks={[
        { lead: "인쇄소·디자인·제조 업무에서는 시안, 인쇄물, 제품 샘플을 제때 전달하는 것이 중요합니다. 당일·긴급 배송으로 업무 지연을 줄입니다." },
        { h3: "주요 배송 대상" },
        {
          list: [
            "인쇄 시안·교정본·최종 인쇄물",
            "제품 샘플·목업",
            "전시·행사용 인쇄물",
            "카탈로그·브로슈어 등 홍보물",
          ],
        },
        { h3: "이용 시 이점" },
        {
          checklist: [
            "시안·샘플의 당일 전달로 업무 속도 향상",
            "정기 인쇄물 납품 자동화",
            "월 정산으로 정산 간소화",
          ],
        },
        { callout: "정기적으로 인쇄물을 납품한다면 정기배송으로 등록해 반복 접수를 줄일 수 있습니다." },
      ]}
    />
  );
}
