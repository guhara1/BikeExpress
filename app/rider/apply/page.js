import { PageHero } from "@/app/components/ui";
import RiderForm from "@/app/components/RiderForm";

export const metadata = {
  title: "기사 지원 | 전국 퀵기사 지원 신청",
  description: "전국 퀵기사 지원 신청. 성함·연락처와 희망 지역, 보유 차량만 남기시면 담당자가 가입 절차를 안내합니다. 초보·투잡·경력 모두 지원 가능합니다.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="기사 지원"
        desc="아래 정보를 남겨주시면 담당자가 가입 절차와 준비물, 근무 방식을 안내해 드립니다."
        variant="rider"
        crumbs={[{ label: "기사 모집", href: "/rider/" }, { label: "기사 지원" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>이렇게 진행됩니다</h2>
              <ul className="checklist">
                <li>지원서 작성 (1분 소요)</li>
                <li>담당자 연락 및 상담</li>
                <li>가입 서류 준비 (비대면 가능)</li>
                <li>배차 시스템 안내 후 활동 시작</li>
              </ul>
              <div className="callout" style={{ marginTop: 24 }}>
                <p>
                  초보·투잡·경력 기사 모두 환영합니다. 궁금한 점은 지원서 요청사항에
                  남겨주시면 상담 시 함께 안내해 드립니다.
                </p>
              </div>
              <p style={{ marginTop: 20 }}>
                수입 구조가 궁금하다면 <a href="/rider/income/">예상 수입</a>과{" "}
                <a href="/rider/fees/">수수료·비용 안내</a>를, 필요한 서류는{" "}
                <a href="/rider/requirements/">가입 준비물</a>을 확인하세요.
              </p>
            </div>
            <RiderForm />
          </div>
        </div>
      </section>
    </>
  );
}
