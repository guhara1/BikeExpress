import Link from "next/link";
import { PageHero, CtaBand } from "@/app/components/ui";
import { company } from "@/app/data/site";

export const metadata = {
  title: "회사소개 | 전국 퀵서비스 배차 네트워크",
  description:
    "전국 배차 네트워크로 오토바이부터 화물까지 신속하게 연결하는 퀵서비스 회사 소개. 운영 원칙, 안전·고객보호, 사업자 정보를 확인하세요.",
};

const sub = [
  { title: "서비스 운영 원칙", href: "/company/principles/", desc: "우리가 일하는 방식" },
  { title: "전국 배차 네트워크", href: "/company/network/", desc: "전국을 잇는 배차 체계" },
  { title: "안전·고객보호", href: "/company/safety/", desc: "안전 운행과 고객 보호" },
  { title: "이용약관", href: "/company/terms/", desc: "서비스 이용약관" },
  { title: "개인정보처리방침", href: "/company/privacy/", desc: "개인정보 보호 방침" },
  { title: "사업자 정보", href: "/company/business-info/", desc: "사업자 등록 정보" },
];

export default function CompanyIndex() {
  return (
    <>
      <PageHero
        title="회사소개"
        desc={`${company.name}는 전국 배차 네트워크로 고객과 기사를 신속하게 연결하는 퀵서비스 플랫폼입니다.`}
        crumbs={[{ label: "회사소개" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="split" style={{ marginBottom: 8 }}>
            <div className="prose">
              <h2>전국을 잇는 퀵서비스</h2>
              <p className="lead-text">
                {company.name}({company.nameEn})는 서류 한 장부터 파렛트 화물까지,
                출발지와 도착지에 맞춰 가장 적합한 차량과 기사를 신속하게 배차합니다.
                고객에게는 빠르고 안전한 배송을, 기사에게는 꾸준하고 자유로운 일자리를
                제공하는 것을 목표로 합니다.
              </p>
            </div>
            <div className="feature-figure">
              <img src="/images/company.webp" width="1000" height="800" loading="lazy" alt="전국 배차 네트워크를 나타내는 지도와 연결 노드 일러스트" />
            </div>
          </div>

          <div className="stat-row" style={{ margin: "32px 0" }}>
            <div className="stat"><b>17</b><span>전국 시·도 서비스</span></div>
            <div className="stat"><b>5종</b><span>오토바이~2.5톤 차량</span></div>
            <div className="stat"><b>24/7</b><span>야간·주말 접수 대응</span></div>
          </div>

          <div className="grid grid-2">
            {sub.map((s) => (
              <Link href={s.href} key={s.href} className="card link">
                <h3 style={{ fontSize: 17 }}>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="함께 시작하세요"
        desc="고객으로 접수하거나, 기사로 지원해 전국 배차 네트워크에 함께하세요."
        primary={{ label: "퀵서비스 접수", href: "/order/" }}
        secondary={{ label: "기사 지원", href: "/rider/apply/" }}
      />
    </>
  );
}
