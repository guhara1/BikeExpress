import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "월 정산 서비스",
  description: "건별 결제 없이 한 달 이용분을 한 번에 정산하는 월 정산 서비스. 세금계산서 발행을 지원합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="월 정산 서비스"
      desc="배송 건마다 결제하지 않고, 한 달 이용분을 한 번에 정산합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "월 정산 서비스" }]}
      cta={{ title: "월 정산으로 회계 처리를 간편하게", desc: "세금계산서 발행과 함께 이용하실 수 있습니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "정기배송 보기", href: "/business/regular-delivery/" } }}
      blocks={[
        { lead: "매 배송마다 현장 결제를 하는 대신, 한 달 동안 이용한 배송을 모아 정해진 날짜에 한 번에 정산하는 방식입니다. 회계 처리와 비용 관리가 간편해집니다." },
        { h3: "월 정산의 장점" },
        {
          checklist: [
            "건별 결제 부담 없이 배송에 집중",
            "월 단위 세금계산서 발행",
            "배송 내역을 한눈에 확인·관리",
            "비용 예측과 예산 관리 용이",
          ],
        },
        { h3: "이용 안내" },
        {
          list: [
            "기업 상담을 통해 정산 조건 협의",
            "월간 이용 내역 정리·확인",
            "정해진 정산일에 청구·정산",
            "세금계산서 발행",
          ],
        },
        { callout: "월 정산 조건은 이용 규모에 따라 달라질 수 있습니다. 정확한 조건은 기업 상담을 통해 안내해 드립니다." },
      ]}
    />
  );
}
