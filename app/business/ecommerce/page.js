import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "쇼핑몰 배송",
  description: "이커머스·쇼핑몰의 당일 출고와 긴급 배송을 지원하는 기업 배송 서비스입니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="쇼핑몰 배송"
      desc="쇼핑몰·이커머스의 당일 출고와 긴급 배송을 신속하게 지원합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "쇼핑몰 배송" }]}
      cta={{ title: "쇼핑몰 출고 배송을 빠르게", desc: "출고 물량과 배송 지역을 알려주시면 맞춤 견적을 안내합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "정기배송 보기", href: "/business/regular-delivery/" } }}
      blocks={[
        { lead: "주문이 몰리는 시간대의 당일 출고, 급하게 발송해야 하는 긴급 주문까지. 쇼핑몰 운영에 맞춘 배송으로 고객 만족도를 높입니다." },
        { h3: "쇼핑몰 배송 활용" },
        {
          list: [
            "당일 주문·당일 출고 상품 배송",
            "급한 고객의 긴급 발송",
            "여러 고객에게 순차 배송(다지점)",
            "정기적으로 발생하는 출고 배송",
          ],
        },
        { h3: "이용 시 이점" },
        {
          checklist: [
            "빠른 당일 배송으로 고객 만족도 향상",
            "출고 물량 증가 시에도 유연한 대응",
            "월 정산으로 정산 업무 간소화",
          ],
        },
        { callout: "정기적으로 출고가 발생한다면 정기배송으로 등록해 두시면 출고 처리가 더 빨라집니다." },
      ]}
    />
  );
}
