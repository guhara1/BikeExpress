import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "왕복 배송 | 전달 후 회수 퀵서비스",
  description: "서류 전달 후 회수, 물품 수령 후 반송 등 왕복이 필요한 배송을 한 번에 처리합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="왕복 배송"
      desc="전달하고 다시 받아오는 왕복 배송을 한 번의 접수로 처리합니다."
      crumbs={[{ label: "퀵서비스 이용", href: "/quick-service/" }, { label: "왕복 배송" }]}
      blocks={[
        { lead: "서류를 전달한 뒤 서명본을 회수하거나, 물품을 전달하고 다른 물품을 받아오는 등 왕복이 필요한 경우 한 번의 접수로 처리합니다." },
        { h3: "왕복 배송 예시" },
        {
          list: [
            "계약서 전달 후 서명본 회수",
            "샘플 전달 후 검토물 회수",
            "물품 전달 후 반품·교환품 수령",
            "장비 전달 후 기존 장비 회수",
          ],
        },
        { h3: "접수 시 알려주실 정보" },
        {
          list: [
            "출발지 → 도착지 → 회수지(또는 복귀지) 순서",
            "각 지점의 담당자 연락처",
            "대기 시간 발생 여부",
          ],
        },
        { callout: "왕복·대기 시간이 있는 경우 대기 요금이 발생할 수 있습니다. 여러 곳을 순차 방문해야 한다면 다중 경유 배송을 이용하세요." },
      ]}
    />
  );
}
