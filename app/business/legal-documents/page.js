import { ContentPage } from "@/app/components/ui";

export const metadata = {
  title: "법무·세무 서류 배송",
  description: "계약서·소송서류·세무 자료 등 중요 서류를 안전하고 정시에 배송합니다.",
};

export default function Page() {
  return (
    <ContentPage
      title="법무·세무 서류 배송"
      desc="기한과 보안이 중요한 법무·세무 서류를 안전하고 신속하게 전달합니다."
      crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "법무·세무 서류 배송" }]}
      cta={{ title: "중요 서류, 안전하게 전달하세요", desc: "정기 서류 배송과 긴급 배송을 함께 지원합니다.", primary: { label: "기업 상담 신청", href: "/business/contact/" }, secondary: { label: "왕복 배송 보기", href: "/quick-service/round-trip/" } }}
      blocks={[
        { lead: "법률사무소, 세무·회계사무소의 서류는 제출 기한과 보안이 무엇보다 중요합니다. 정시 도착과 안전한 취급을 우선으로 배송합니다." },
        { h3: "주요 배송 서류" },
        {
          list: [
            "계약서·합의서 등 법률 문서",
            "소송·등기 관련 서류",
            "세무·회계 신고 자료",
            "인감·증명서 등 중요 문서",
          ],
        },
        { h3: "이용 시 이점" },
        {
          checklist: [
            "제출 기한에 맞춘 정시 배송",
            "전달 후 서명본 회수(왕복 배송)",
            "여러 기관 순차 방문(다지점 배송)",
            "월 정산·세금계산서 발행",
          ],
        },
        { callout: "전달 후 서명본을 회수해야 한다면 왕복 배송을, 여러 기관을 방문해야 한다면 다중 경유 배송을 함께 이용하세요." },
      ]}
    />
  );
}
