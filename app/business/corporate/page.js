import { ContentPage } from "@/app/components/ui";

const bizCta = {
  title: "기업 배송, 맞춤 견적을 받아보세요",
  desc: "이용 규모와 배송 구간을 알려주시면 최적의 조건을 안내합니다.",
  primary: { label: "기업 상담 신청", href: "/business/contact/" },
  secondary: { label: "요금 안내 보기", href: "/guide/" },
};

export const metadata = {
  title: "기업 퀵서비스",
  description: "기업 전용 퀵서비스. 전담 상담과 월 정산, 세금계산서 발행으로 기업 물류를 편리하게 지원합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="기업 퀵서비스"
      desc="기업의 반복·긴급 배송을 전담 상담과 정산 시스템으로 체계적으로 지원합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "기업 퀵서비스" }]}
      cta={bizCta}
      blocks={[
        { lead: "기업 고객은 배송 건마다 개별 접수·결제하는 대신, 전담 창구를 통해 접수하고 월 단위로 정산하는 방식으로 이용하실 수 있습니다." },
        { h3: "기업 퀵서비스 특징" },
        {
          checklist: [
            "전담 상담 창구로 빠른 접수",
            "월 단위 정산·세금계산서 발행",
            "정기·다지점·대량 배송 통합 관리",
            "업종 특성에 맞춘 배송 방식",
          ],
        },
        { h3: "이런 기업에 적합합니다" },
        {
          list: [
            "매일 서류·부품·상품 배송이 발생하는 기업",
            "여러 지점·거래처로 배송해야 하는 기업",
            "회계 처리를 위해 세금계산서가 필요한 기업",
            "배송 내역을 체계적으로 관리하고 싶은 기업",
          ],
        },
      ]}
    />
  );
}
