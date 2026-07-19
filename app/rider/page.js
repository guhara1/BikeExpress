import Link from "next/link";
import { PageHero, LinkList } from "@/app/components/ui";
import { regionGroups, regions } from "@/app/data/site";

export const metadata = {
  title: "기사 모집 | 전국 오토바이 퀵기사 모집",
  description:
    "전국 오토바이 퀵기사를 모집합니다. 초보·투잡·경력 기사 모두 지원 가능. 근무 방식, 예상 수입, 수수료, 가입 준비물을 확인하고 비대면으로 시작하세요.",
};

const menu = [
  { title: "전국 퀵기사 모집", href: "/rider/recruit/", desc: "전국 어디서나 지원 가능" },
  { title: "오토바이 퀵기사 모집", href: "/rider/motorcycle/", desc: "오토바이 한 대로 시작" },
  { title: "초보 기사 안내", href: "/rider/beginner/", desc: "경력 없어도 시작 가능" },
  { title: "투잡·부업 기사", href: "/rider/part-time/", desc: "원하는 시간만 근무" },
  { title: "근무 방식", href: "/rider/work-style/", desc: "자유로운 근무 형태" },
  { title: "예상 수입", href: "/rider/income/", desc: "근무량에 따른 수입 구조" },
  { title: "수수료·비용 안내", href: "/rider/fees/", desc: "투명한 비용 구조" },
  { title: "가입 준비물", href: "/rider/requirements/", desc: "지원에 필요한 서류" },
  { title: "기사 FAQ", href: "/rider/faq/", desc: "자주 묻는 질문" },
];

export default function RiderIndex() {
  return (
    <>
      <PageHero
        title="전국 오토바이 퀵기사 모집"
        desc="초보자·투잡·경력 기사 모두 지원 가능합니다. 전국 배차 네트워크에서 원하는 지역, 원하는 시간에 일하세요."
        variant="rider"
        crumbs={[{ label: "기사 모집" }]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 44 }}>
            <div className="prose">
              <h2>오토바이 한 대로 시작하세요</h2>
              <p className="lead-text">
                전국 배차 네트워크에서 원하는 지역, 원하는 시간에 일할 수 있습니다.
                초보·투잡·경력 기사 모두 환영하며, 비대면으로 간편하게 시작합니다.
              </p>
              <ul className="checklist">
                <li>원하는 지역·시간 중심의 자유로운 근무</li>
                <li>전국 단위 배차로 꾸준한 배송 물량</li>
                <li>투명한 수수료·정산 구조</li>
              </ul>
            </div>
            <div className="feature-figure">
              <img src="/images/hero-rider.webp" width="1600" height="900" loading="lazy" alt="전국 퀵기사 모집을 나타내는 배송 오토바이 라이더 일러스트" />
            </div>
          </div>

          <div className="stat-row">
            <div className="stat">
              <b>전국</b>
              <span>17개 시·도 모집</span>
            </div>
            <div className="stat">
              <b>비대면</b>
              <span>간편 가입 절차</span>
            </div>
            <div className="stat">
              <b>초보 OK</b>
              <span>경력 무관 지원</span>
            </div>
          </div>

          <div className="section-head" style={{ marginTop: 48 }}>
            <h2>기사 모집 안내</h2>
            <p>궁금한 항목을 선택해 자세한 내용을 확인하세요.</p>
          </div>
          <LinkList items={menu} cols={3} />

          <div className="text-center" style={{ marginTop: 36 }}>
            <Link href="/rider/apply/" className="btn btn-accent btn-lg">지금 기사 지원하기</Link>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head">
            <h2>전국 기사 모집 지역</h2>
            <p>내가 활동할 지역을 확인하세요. 전국 모든 지역에서 모집 중입니다.</p>
          </div>
          <div className="grid grid-3">
            {regionGroups.map((g) => (
              <div className="card" key={g.key}>
                <h3 style={{ color: "var(--accent)" }}>{g.name}</h3>
                <div className="chip-grid" style={{ marginTop: 12 }}>
                  {g.regions.map((r) => (
                    <Link href={`/rider/area/${r}/`} key={r} className="chip">
                      {regions[r].name} 기사 모집
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band" style={{ background: "linear-gradient(135deg, #7a3b00, var(--accent))" }}>
            <h2>지금 바로 기사로 지원하세요</h2>
            <p>지원서를 남기시면 담당자가 가입 절차와 준비물을 안내해 드립니다.</p>
            <div className="hero-actions">
              <Link href="/rider/apply/" className="btn btn-lg" style={{ background: "#fff", color: "var(--accent-dark)" }}>
                기사 지원하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
