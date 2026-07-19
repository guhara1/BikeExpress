import { PageHero } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";
import { company } from "@/app/data/site";

export const metadata = {
  title: "분실·파손 문의",
  description: "배송 중 물품 분실이나 파손이 발생한 경우 신속하게 접수해 주세요.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="분실·파손 문의"
        desc="배송 중 물품 분실이나 파손이 발생한 경우 아래로 접수해 주세요."
        crumbs={[{ label: "고객지원", href: "/support/" }, { label: "분실·파손 문의" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>분실·파손 접수 안내</h2>
              <p className="lead-text">
                신속한 확인을 위해 가능한 한 빨리 접수해 주세요. 급하신 경우 고객센터
                <b> {company.phone}</b>로 연락 주시면 바로 도와드립니다.
              </p>
              <h3>접수 시 알려주실 정보</h3>
              <ul className="checklist">
                <li>접수·배송 일시와 구간</li>
                <li>물품 종류와 분실·파손 내용</li>
                <li>확인 가능한 사진·자료</li>
              </ul>
              <p style={{ marginTop: 16 }}>
                대응 절차는 <a href="/guide/accident/">사고·파손 대응</a> 안내에서 확인하실
                수 있습니다.
              </p>
            </div>
            <ContactForm defaultType="배송 사고 문의" />
          </div>
        </div>
      </section>
    </>
  );
}
