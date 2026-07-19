import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "결제 방법",
  description: "현금·계좌이체·카드결제·기업 월 정산 등 퀵서비스 결제 방법을 안내합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="결제 방법"
      desc="편한 결제 방법을 선택하세요. 기업 고객은 월 단위 정산도 가능합니다."
      crumbs={[{ label: "요금·이용안내", href: "/guide/" }, { label: "결제 방법" }]}
      cta={{ title: "접수하고 편한 방법으로 결제하세요", desc: "결제 방법은 접수 시 선택하실 수 있습니다.", primary: { label: "퀵서비스 접수", href: "/order/" }, secondary: { label: "기업 상담", href: "/business/contact/" } }}
      blocks={[
        { lead: "개인 고객은 배송 완료 시점에 결제하며, 기업 고객은 월 단위로 정산하는 방식을 이용할 수 있습니다." },
        { h3: "결제 방법" },
        {
          list: [
            "현금·계좌이체",
            "카드결제",
            "기업 월 정산 (세금계산서 발행)",
          ],
        },
        { h3: "기업 고객 결제" },
        {
          checklist: [
            "건별 결제 없이 월 단위 정산",
            "월 세금계산서 발행",
            "배송 내역 확인·관리 지원",
          ],
        },
        { callout: "결제 방법과 조건은 접수 시 선택·안내되며, 기업 월 정산은 기업 상담을 통해 등록하실 수 있습니다." },
      ]}
    />
  );
}
