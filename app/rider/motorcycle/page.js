import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "오토바이 퀵기사 모집",
  description: "오토바이 한 대로 시작하는 퀵기사. 서류·소형물품 배송 중심으로 진입 장벽이 낮습니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="오토바이 퀵기사 모집"
      desc="오토바이 한 대로 시작할 수 있는, 가장 진입이 쉬운 퀵기사입니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "오토바이 퀵기사 모집" }]}
      cta={{ title: "오토바이 퀵기사로 시작하세요", desc: "지원서를 남기시면 담당자가 안내해 드립니다.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "가입 준비물 보기", href: "/rider/requirements/" } }}
      blocks={[
        { lead: "오토바이 퀵기사는 서류·소형물품 배송이 중심이라 무거운 화물을 다루지 않아도 되고, 이륜차 면허와 오토바이만 있으면 시작할 수 있습니다." },
        { h3: "오토바이 퀵기사의 장점" },
        {
          list: [
            "가벼운 소화물 위주로 체력 부담이 적음",
            "도심 단거리 배송이 많아 회전율이 높음",
            "초보도 빠르게 적응 가능",
            "투잡·부업으로 병행하기 좋음",
          ],
        },
        { h3: "주로 배송하는 물품" },
        { pills: ["서류", "계약서", "열쇠", "휴대전화", "소형 부품", "샘플", "쇼핑백", "소형 박스"] },
        { callout: "이륜차 운전 경험이 적어도 괜찮습니다. 초보 기사 안내에서 시작 방법을 확인해 보세요." },
      ]}
    />
  );
}
