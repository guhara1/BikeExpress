import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "초보 기사 안내",
  description: "퀵서비스가 처음인 초보 기사를 위한 시작 안내. 경력이 없어도 지원할 수 있습니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="초보 기사 안내"
      desc="퀵서비스가 처음이어도 괜찮습니다. 시작에 필요한 내용을 정리했습니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "초보 기사 안내" }]}
      cta={{ title: "초보도 지금 시작할 수 있습니다", desc: "부담 없이 지원하고 상담받아 보세요.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "근무 방식 보기", href: "/rider/work-style/" } }}
      blocks={[
        { lead: "경력이 없어도 지원할 수 있습니다. 처음에는 단거리·소형 배송부터 익숙해지고, 점차 배송 범위를 넓혀가는 방식으로 시작합니다." },
        { h3: "초보 기사가 알아두면 좋은 점" },
        {
          list: [
            "처음에는 무리하지 않고 익숙한 지역 위주로 배송",
            "배차 시스템 사용법은 가입 시 안내",
            "안전 운행이 가장 중요 — 무리한 배송은 지양",
            "궁금한 점은 언제든 문의 가능",
          ],
        },
        { h3: "시작 순서" },
        {
          checklist: [
            "기사 지원서 작성",
            "담당자 상담 및 가입 절차 안내",
            "필요 서류 준비(비대면 가능)",
            "배차 시스템 안내 후 배송 시작",
          ],
        },
        { callout: "초보 기사는 가입 준비물과 근무 방식을 먼저 확인하시면 시작이 한결 수월합니다." },
      ]}
    />
  );
}
