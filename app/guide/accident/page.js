import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "사고·파손 대응",
  description: "배송 중 사고·파손 발생 시 대응 절차와 접수 방법을 안내합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="사고·파손 대응"
      desc="배송 중 예기치 못한 사고나 파손이 발생했을 때의 대응 절차를 안내합니다."
      crumbs={[{ label: "요금·이용안내", href: "/guide/" }, { label: "사고·파손 대응" }]}
      cta={{ title: "사고·파손이 발생했다면", desc: "빠르게 접수해 주시면 신속히 확인·안내해 드립니다.", primary: { label: "분실·파손 문의", href: "/support/damage/" }, secondary: { label: "고객지원으로", href: "/support/" } }}
      blocks={[
        { lead: "배송 과정에서 물품 파손이나 사고가 발생한 경우, 신속한 확인과 처리가 중요합니다. 아래 절차에 따라 접수해 주세요." },
        { h3: "발생 시 대응 절차" },
        {
          checklist: [
            "파손·사고 상태를 사진 등으로 기록",
            "고객센터 또는 분실·파손 문의로 접수",
            "배송 건 정보(주문·접수 내용) 확인",
            "확인 후 처리 방안 안내",
          ],
        },
        { h3: "접수 시 알려주실 정보" },
        {
          list: [
            "접수·배송 일시와 구간",
            "물품 종류와 파손·사고 내용",
            "확인 가능한 사진·자료",
            "연락 가능한 연락처",
          ],
        },
        { callout: "귀중품·고가품·특수 물품은 배송 전 상담을 통해 취급 방법을 확인하시면 사고를 예방할 수 있습니다.", warn: true },
      ]}
    />
  );
}
