import { PageHero } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "제휴 문의",
  description: "물류 제휴, 서비스 연동, 협업 제안 등 제휴 문의를 남겨주세요.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="제휴 문의"
        desc="물류 제휴, 서비스 연동, 협업 제안 등 다양한 제휴를 환영합니다."
        crumbs={[{ label: "고객지원", href: "/support/" }, { label: "제휴 문의" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>이런 제휴를 함께합니다</h2>
              <ul className="checklist">
                <li>이커머스·쇼핑몰 배송 연동</li>
                <li>기업·기관 물류 파트너십</li>
                <li>플랫폼·서비스 제휴</li>
                <li>지역 물류 거점 협업</li>
              </ul>
              <div className="callout" style={{ marginTop: 20 }}>
                <p>
                  제휴 제안 시 회사 소개와 협업 방향을 함께 남겨주시면 검토 후 담당자가
                  연락드립니다.
                </p>
              </div>
            </div>
            <ContactForm defaultType="제휴 문의" />
          </div>
        </div>
      </section>
    </>
  );
}
