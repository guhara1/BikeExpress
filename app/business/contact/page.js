import { PageHero } from "@/app/components/ui";
import BusinessForm from "@/app/components/BusinessForm";

export const metadata = {
  title: "기업 상담 신청 | 정기배송·월 정산 견적 문의",
  description: "기업 퀵서비스·정기배송·월 정산 상담 신청. 회사 정보와 월 예상 이용 건수, 배송 구간을 남기시면 맞춤 견적을 안내합니다.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="기업 상담 신청"
        desc="회사 정보와 배송 규모를 남겨주시면 담당자가 맞춤 견적과 계약 조건을 안내합니다."
        crumbs={[{ label: "기업·정기배송", href: "/business/" }, { label: "기업 상담 신청" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>기업 상담으로 이런 것을 받으실 수 있어요</h2>
              <ul className="checklist">
                <li>배송 구간·물량에 맞춘 맞춤 견적</li>
                <li>정기배송·다지점 배송 운영 설계</li>
                <li>월 단위 정산과 세금계산서 발행</li>
                <li>업종 특성에 맞는 배송 방식 제안</li>
                <li>전담 상담 창구 배정</li>
              </ul>
              <div className="callout" style={{ marginTop: 24 }}>
                <p>
                  이미 정기적으로 배송이 발생하고 있다면, 현재 이용 패턴을 알려주시면
                  더 정확한 견적을 안내해 드립니다.
                </p>
              </div>
            </div>
            <BusinessForm />
          </div>
        </div>
      </section>
    </>
  );
}
