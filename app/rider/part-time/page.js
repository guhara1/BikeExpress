import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "투잡·부업 기사",
  description: "본업과 병행하는 투잡·부업 퀵기사. 원하는 시간에만 근무할 수 있습니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="투잡·부업 기사"
      desc="본업과 병행하며 원하는 시간에만 일하는 유연한 근무가 가능합니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "투잡·부업 기사" }]}
      cta={{ title: "원하는 시간만 일하고 싶다면", desc: "투잡·부업 형태로 부담 없이 시작하세요.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "예상 수입 보기", href: "/rider/income/" } }}
      blocks={[
        { lead: "정해진 출퇴근 없이 원하는 시간에만 배송할 수 있어, 본업이 있는 분이나 여유 시간을 활용하고 싶은 분에게 적합합니다." },
        { h3: "투잡·부업으로 좋은 이유" },
        {
          list: [
            "근무 시간을 스스로 정할 수 있음",
            "퇴근 후·주말 등 자투리 시간 활용",
            "배송한 만큼 수입이 발생하는 구조",
            "본업에 지장을 주지 않는 유연함",
          ],
        },
        { h3: "이런 분께 추천합니다" },
        {
          list: [
            "저녁·주말 시간을 활용하고 싶은 직장인",
            "낮 시간이 비는 자영업자",
            "추가 수입이 필요한 분",
            "우선 가볍게 시작해 보고 싶은 분",
          ],
        },
        { callout: "근무 시간과 수입은 활동량에 따라 달라집니다. 예상 수입과 수수료 안내를 함께 확인해 보세요." },
      ]}
    />
  );
}
