import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "다지점 배송",
  description: "여러 지점·거래처로 동시 또는 순차 배송이 필요한 기업을 위한 다지점 배송 서비스입니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="다지점 배송"
      desc="여러 지점과 거래처로 나가는 배송을 통합해 효율적으로 운영합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "다지점 배송" }]}
      cta={{ title: "여러 지점 배송, 한 번에 관리하세요", desc: "배송 지점과 물량을 알려주시면 효율적인 경로를 제안합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "정기배송 보기", href: "/business/regular-delivery/" } }}
      blocks={[
        { lead: "본사에서 여러 지점으로, 또는 여러 거래처로 동시에 나가는 배송을 통합 관리합니다. 각각 접수하지 않고 한 번에 처리해 시간과 비용을 절약합니다." },
        { h3: "다지점 배송이 필요한 경우" },
        {
          list: [
            "본사 → 여러 지점 물품 배분",
            "여러 거래처로 동시 납품",
            "지점별 재고·상품 순회 배송",
            "행사장 여러 부스에 물품 배분",
          ],
        },
        { h3: "운영 방식" },
        {
          checklist: [
            "배송 지점과 물량을 상담으로 확정",
            "효율적인 배송 경로·차량 구성",
            "동시 또는 순차 배송 진행",
            "배송 내역 통합 관리·정산",
          ],
        },
        { callout: "다지점 배송은 정기배송·월 정산과 결합하면 반복되는 지점 배송을 자동화할 수 있습니다." },
      ]}
    />
  );
}
