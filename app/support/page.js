import Link from "next/link";
import { PageHero, CardGrid } from "@/app/components/ui";
import ContactForm from "@/app/components/ContactForm";
import { company } from "@/app/data/site";

export const metadata = {
  title: "고객지원 | 공지사항·문의·불편 접수",
  description:
    "공지사항, 배송·기업 문의, 불편 접수, 분실·파손 문의, 제휴 문의 등 고객지원 창구를 안내합니다. 궁금한 점을 편하게 문의하세요.",
};

const items = [
  { icon: "📢", title: "공지사항", href: "/support/notice/", desc: "서비스 소식과 안내" },
  { icon: "❓", title: "자주 묻는 질문", href: "/guide/faq/", desc: "이용 FAQ 모음" },
  { icon: "🚚", title: "배송 문의", href: "/support/delivery/", desc: "진행 중 배송·배차 문의" },
  { icon: "🏢", title: "기업 문의", href: "/business/contact/", desc: "기업 계약·정기배송" },
  { icon: "⚠️", title: "불편 접수", href: "/support/complaint/", desc: "서비스 이용 불편 접수" },
  { icon: "📦", title: "분실·파손 문의", href: "/support/damage/", desc: "배송 사고 접수" },
  { icon: "🤝", title: "제휴 문의", href: "/support/partnership/", desc: "제휴·협업 제안" },
  { icon: "🛵", title: "기사 관련 문의", href: "/rider/faq/", desc: "기사 지원·활동 문의" },
];

export default function SupportIndex() {
  return (
    <>
      <PageHero
        title="고객지원"
        desc="궁금한 점이나 불편한 점을 편하게 문의하세요. 문의 유형을 선택하면 더 빠르게 안내됩니다."
        crumbs={[{ label: "고객지원" }]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 40 }}>
            <div className="prose">
              <h2>무엇을 도와드릴까요?</h2>
              <p className="lead-text">
                궁금한 점이나 불편한 점을 편하게 문의하세요. 문의 유형을 선택하면 담당자가
                더 빠르게 안내해 드립니다.
              </p>
              <div className="callout">
                <p>
                  빠른 상담은 고객센터 <b>{company.phone}</b> ({company.hours})로 연락
                  주세요.
                </p>
              </div>
            </div>
            <div className="feature-figure">
              <img src="/images/support.webp" width="1000" height="800" loading="lazy" alt="고객지원 상담을 나타내는 헤드셋과 말풍선 일러스트" />
            </div>
          </div>
          <CardGrid items={items} cols={4} />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="split">
            <div className="prose">
              <h2>문의 남기기</h2>
              <p className="lead-text">
                아래 양식으로 문의를 남겨주시면 담당자가 확인 후 안내해 드립니다.
              </p>
              <h3>문의 유형</h3>
              <ul>
                <li>일반 고객 문의 / 요금 문의 / 배차 문의</li>
                <li>기업 계약 문의 / 배송 사고 문의</li>
                <li>기사 지원 문의 / 제휴 문의</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
