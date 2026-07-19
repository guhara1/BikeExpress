import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "근무 방식",
  description: "퀵기사의 근무 방식 안내. 배차부터 배송 완료, 정산까지의 흐름을 설명합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="근무 방식"
      desc="배차부터 배송 완료, 정산까지 어떻게 일하게 되는지 안내합니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "근무 방식" }]}
      cta={{ title: "자유로운 근무, 지금 시작하세요", desc: "지원 후 배차 시스템 사용법을 안내해 드립니다.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "수수료·비용 보기", href: "/rider/fees/" } }}
      blocks={[
        { lead: "정해진 출퇴근 시간 없이, 활동 가능한 시간에 배차를 받아 배송하는 방식입니다. 원하는 지역을 중심으로 일할 수 있습니다." },
        { h3: "일하는 흐름" },
        {
          checklist: [
            "활동 시작 — 배차 시스템에서 배송 요청 확인",
            "배차 수락 — 조건에 맞는 배송 선택",
            "픽업 — 출발지에서 물품 수령",
            "배송 — 도착지까지 안전하게 전달",
            "완료·정산 — 배송 완료 처리 후 정산",
          ],
        },
        { h3: "근무 형태" },
        {
          list: [
            "전업 — 하루 종일 배송에 집중",
            "투잡·부업 — 자투리 시간 활용",
            "주말·시간제 — 특정 요일·시간만 활동",
          ],
        },
        { callout: "안전 운행이 최우선입니다. 무리한 배송보다 꾸준하고 안정적인 활동을 권장합니다." },
      ]}
    />
  );
}
