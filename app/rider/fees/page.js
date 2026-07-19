import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "수수료·비용 안내",
  description: "퀵기사 수수료와 비용 구조 안내. 투명한 정산 기준을 확인하세요.",
};

export default function Page() {
  return (
    <ContentPage
      title="수수료·비용 안내"
      desc="투명한 수수료·비용 구조를 안내합니다. 정확한 조건은 상담 시 확인해 드립니다."
      variant="rider"
      crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "수수료·비용 안내" }]}
      cta={{ title: "궁금한 비용, 상담으로 확인하세요", desc: "지원 후 정산 기준과 비용을 자세히 안내합니다.", primary: { label: "기사 지원하기", href: "/rider/apply/" }, secondary: { label: "가입 준비물 보기", href: "/rider/requirements/" } }}
      blocks={[
        { lead: "기사님이 받는 배송료에서 플랫폼 이용에 따른 수수료가 정산됩니다. 비용 구조를 미리 이해하시면 수입을 계획하기 쉽습니다." },
        { h3: "일반적으로 고려되는 비용" },
        {
          list: [
            "플랫폼·배차 이용 수수료",
            "차량 유지비(연료·보험·정비 등) — 개인 부담",
            "필요 시 단말·앱 이용 관련 비용",
          ],
        },
        { h3: "정산 방식" },
        {
          list: [
            "배송 완료 건에 대해 정해진 주기로 정산",
            "정산 내역은 투명하게 확인 가능",
            "수수료·비용 기준은 가입 시 명확히 안내",
          ],
        },
        { callout: "수수료·비용 조건은 차량 종류와 활동 형태에 따라 달라질 수 있습니다. 정확한 기준은 지원 후 상담을 통해 안내해 드립니다." },
      ]}
    />
  );
}
