import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "가입 준비물",
  description: "퀵기사 가입에 필요한 준비물과 서류 안내. 비대면 가입이 가능합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="가입 준비물"
      desc="기사 가입에 필요한 준비물을 안내합니다. 대부분 비대면으로 진행할 수 있습니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "가입 준비물" }]}
      cta={{ title: "준비되셨다면 지금 지원하세요", desc: "서류가 부족해도 먼저 상담받으실 수 있습니다.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "기사 FAQ 보기", href: "/rider/faq/" } }}
      blocks={[
        { lead: "가입 절차는 최대한 간소화했으며, 대부분의 준비물은 비대면으로 제출할 수 있습니다. 지원 후 담당자가 필요한 서류를 안내해 드립니다." },
        { h3: "기본 준비물" },
        {
          checklist: [
            "본인 명의 신분증",
            "배송에 사용할 차량 (오토바이·다마스·라보·1톤 등)",
            "해당 차량 운전에 필요한 면허",
            "연락 가능한 휴대전화와 정산용 계좌",
          ],
        },
        { h3: "차량·운전 관련" },
        {
          list: [
            "오토바이 — 이륜차 운전 면허",
            "다마스·라보·1톤 — 해당 차량 운전 면허",
            "차량이 없는 경우 준비 계획을 상담 시 안내",
          ],
        },
        { callout: "정확한 제출 서류는 차량 종류와 활동 형태에 따라 달라질 수 있습니다. 우선 지원해 주시면 상황에 맞게 안내해 드립니다." },
      ]}
    />
  );
}
