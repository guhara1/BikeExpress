import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "정기배송",
  description: "매일·매주 반복되는 배송을 자동으로 처리하는 정기배송 서비스입니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="정기배송"
      desc="반복되는 배송을 매번 접수하지 않아도 되도록, 정해진 일정에 자동으로 배차합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "정기배송" }]}
      cta={{ title: "반복 배송을 자동화하세요", desc: "배송 주기와 구간을 알려주시면 정기배송을 설계해 드립니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "월 정산 보기", href: "/business/monthly-billing/" } }}
      blocks={[
        { lead: "같은 구간, 같은 물품을 정해진 주기로 배송해야 한다면 정기배송으로 등록해 두시면 편리합니다. 매번 접수하지 않아도 일정에 맞춰 배차됩니다." },
        { h3: "정기배송 예시" },
        {
          list: [
            "매일 아침 지점으로 서류·물품 배송",
            "매주 정해진 요일의 거래처 납품",
            "월 정기 행사·프로모션 물품 배송",
            "정기 검체·시료 수거 및 전달",
          ],
        },
        { h3: "이용 방법" },
        {
          checklist: [
            "배송 주기·구간·물품을 상담으로 확정",
            "정기배송 일정 등록",
            "일정에 맞춰 자동 배차·배송",
            "월 단위로 정산",
          ],
        },
        { callout: "정기배송은 다지점 배송, 월 정산과 함께 이용하면 더욱 효율적입니다." },
      ]}
    />
  );
}
