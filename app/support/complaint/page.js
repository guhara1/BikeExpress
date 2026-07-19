import { PageHero } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "불편 접수",
  description: "서비스 이용 중 불편했던 점을 접수해 주세요. 개선에 반영하겠습니다.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="불편 접수"
        desc="이용 중 불편하셨던 점을 알려주시면 확인 후 개선에 반영하겠습니다."
        crumbs={[{ label: "고객지원", href: "/support/" }, { label: "불편 접수" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>소중한 의견을 들려주세요</h2>
              <p className="lead-text">
                배송 지연, 응대, 배차 등 이용 과정에서 겪으신 불편을 남겨주시면 담당자가
                확인 후 안내드리고 서비스 개선에 반영합니다.
              </p>
              <div className="callout">
                <p>
                  배송 사고나 물품 파손·분실은 분실·파손 문의로 접수하시면 더 빠르게
                  처리됩니다.
                </p>
              </div>
            </div>
            <ContactForm defaultType="일반 고객 문의" />
          </div>
        </div>
      </section>
    </>
  );
}
