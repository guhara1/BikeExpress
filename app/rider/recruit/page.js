import { ContentPage } from "@/app/components/ui";

const riderCta = {
  title: "전국 어디서든 퀵기사로 시작하세요",
  desc: "지원서를 남기시면 담당자가 가입 절차와 준비물을 안내합니다.",
  primary: { label: "기사 지원하기", href: "/rider/apply/" },
  secondary: { label: "예상 수입 보기", href: "/rider/income/" },
};

export const metadata = {
  title: "전국 퀵기사 모집 | 전국 오토바이·화물 기사 모집",
  description: "전국 17개 시·도에서 퀵기사를 모집합니다. 초보·투잡·경력 무관, 원하는 지역과 시간에 활동하세요.",
};

export default function Page() {
  return (
    <ContentPage
      title="전국 퀵기사 모집"
      desc="전국 배차 네트워크에서 함께할 오토바이·화물 기사를 모집합니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "전국 퀵기사 모집" }]}
      cta={riderCta}
      blocks={[
        { lead: "전국 어디서나 퀵기사로 지원할 수 있습니다. 경력이 없어도, 다른 일과 병행하는 투잡이어도 시작할 수 있도록 가입 절차를 최대한 간소화했습니다." },
        { h3: "이런 분을 찾습니다" },
        {
          checklist: [
            "오토바이·다마스·라보·1톤 등 배송 차량이 있거나 준비 가능한 분",
            "성실하게 약속된 배송을 수행할 수 있는 분",
            "전업, 투잡·부업, 주말·시간제 등 다양한 형태 모두 환영",
            "초보라도 배우려는 의지가 있는 분",
          ],
        },
        { h3: "함께하면 좋은 점" },
        {
          list: [
            "전국 단위 배차로 꾸준한 배송 물량",
            "원하는 지역·시간 중심의 자유로운 근무",
            "비대면으로 간편하게 가입",
            "투명한 수수료·정산 구조",
          ],
        },
        { callout: "먼저 어떤 지역에서 활동하실지 정하고, 예상 수입과 수수료를 확인한 뒤 지원하시면 상담이 더 빠르게 진행됩니다." },
      ]}
    />
  );
}
