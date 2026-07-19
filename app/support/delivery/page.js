import { PageHero } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";
import { company } from "@/app/data/site";

export const metadata = {
  title: "배송 문의",
  description: "진행 중인 배송의 배차 상태, 도착 시간, 위치 등에 대해 문의하세요.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="배송 문의"
        desc="진행 중인 배송의 배차 상태나 도착 시간이 궁금하시면 문의해 주세요."
        crumbs={[{ label: "고객지원", href: "/support/" }, { label: "배송 문의" }]}
      />
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>배송 문의 안내</h2>
              <p className="lead-text">
                급하게 배송 상태를 확인하셔야 한다면 고객센터 <b>{company.phone}</b>로
                전화 주시는 것이 가장 빠릅니다.
              </p>
              <h3>문의 시 알려주시면 좋아요</h3>
              <ul className="checklist">
                <li>접수 시 사용한 연락처</li>
                <li>출발지·도착지 정보</li>
                <li>접수한 대략적인 시간</li>
              </ul>
            </div>
            <ContactForm defaultType="배차 문의" />
          </div>
        </div>
      </section>
    </>
  );
}
