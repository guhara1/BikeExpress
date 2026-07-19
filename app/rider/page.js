import Link from "next/link";
import { PageHero, LinkList, Faq } from "@/app/components/ui";
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
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="prose">
            <h2>바이크익스프레스 기사 모집을 소개합니다</h2>
            <p>
              바이크익스프레스는 오토바이 한 대로 시작할 수 있는 퀵서비스 기사 배송 네트워크입니다.
              대도시 도심의 급송 물량부터 지방 중소도시의 서류·소화물 배송까지, 다양한 형태의 배차를
              연결해 드립니다. 위 카드에서 확인하실 수 있듯 「전국 모집」, 「초보 안내」, 「투잡·부업」,
              「근무 방식」, 「예상 수입」, 「수수료」, 「가입 준비물」 등 항목별로 상세 페이지를
              마련해 두었으니, 본인 상황에 맞는 항목부터 살펴보시길 권합니다.
            </p>
            <p>
              처음 이 페이지를 방문하신 분이라면 무엇부터 봐야 할지 막막하실 수 있습니다. 아래에서는
              카테고리 전체를 한눈에 정리해, 어떤 순서로 읽으면 좋은지와 자주 궁금해하시는 부분을
              함께 안내해 드립니다. 실제 조건과 세부 사항은 지역·차종·근무 형태에 따라 달라지므로,
              구체적인 내용은 지원서 접수 후 담당자 상담을 통해 확정해 드립니다.
            </p>

            <h3>어떤 분들이 지원하시나요</h3>
            <p>
              바이크익스프레스에는 배송 경력이 전혀 없는 초보 기사님, 본업과 병행하는 투잡·부업 기사님,
              오랜 현장 경험을 가진 경력 기사님까지 폭넓게 지원하십니다. 경력이 없더라도 배차 앱 사용법과
              기본 운행 요령을 안내해 드리므로 부담 없이 시작하실 수 있습니다. 다만 이륜차 운전에 필요한
              면허와 안전 운행 의지는 기본 전제이며, 배송 품질과 시간 약속을 지키려는 태도를 가장
              중요하게 봅니다.
            </p>

            <h3>추천 열람 순서</h3>
            <p>
              전체 그림을 빠르게 잡고 싶으시다면 「전국 퀵기사 모집」과 「근무 방식」을 먼저 보시는 것을
              권합니다. 오토바이 준비 여부가 궁금하시면 「오토바이 퀵기사 모집」과 「가입 준비물」을,
              수익 구조가 궁금하시면 「예상 수입」과 「수수료·비용 안내」를 이어서 확인하시면 됩니다.
              시간이 제한적인 분은 「투잡·부업 기사」, 배송이 처음인 분은 「초보 기사 안내」가 출발점으로
              적합합니다.
            </p>
            <ul>
              <li>배송이 처음이라면 → 초보 기사 안내 → 가입 준비물 순으로</li>
              <li>시간이 유동적이라면 → 투잡·부업 기사 → 근무 방식 순으로</li>
              <li>수익이 궁금하다면 → 예상 수입 → 수수료·비용 안내 순으로</li>
              <li>바로 시작하고 싶다면 → 가입 준비물 확인 후 기사 지원하기</li>
            </ul>

            <h3>근무 방식과 자유도</h3>
            <p>
              바이크익스프레스의 배차는 원하는 지역과 시간을 중심으로 운영됩니다. 오전 시간대에만
              집중하거나 주말 위주로 운행하는 등 본인 생활 패턴에 맞춰 조정할 수 있습니다. 다만 물량은
              지역·요일·시간대에 따라 편차가 있으므로, 안정적인 배송량을 원하신다면 활동 가능 시간대를
              넉넉히 열어 두시는 편이 유리합니다. 구체적인 운영 방식은 「근무 방식」 페이지에서 확인해
              주세요.
            </p>

            <h3>수입과 비용은 어떻게 계산되나요</h3>
            <p>
              기사님의 수입은 수행하신 배송 건수와 거리, 시간대, 지역 특성 등에 따라 달라집니다.
              따라서 「하루에 얼마」처럼 일률적으로 확정해 드리기는 어렵고, 실제 근무량에 비례하는
              구조라고 이해해 주시면 됩니다. 수수료와 부대 비용은 「수수료·비용 안내」에서 투명하게
              정리해 두었으며, 개인별 조건은 상담 시 자세히 설명해 드립니다. 과장된 수익 보장 문구
              대신, 본인의 근무 계획에 맞춰 현실적인 예상치를 함께 잡아 드리는 방식을 지향합니다.
            </p>

            <h3>가입 절차는 간단합니다</h3>
            <p>
              지원은 비대면으로 진행됩니다. 「기사 지원하기」에서 기본 정보를 남겨 주시면 담당자가
              연락드려 가입 절차와 필요한 준비물을 안내해 드립니다. 준비물은 대체로 이륜차 운전면허와
              신분 확인 서류, 배송에 사용할 오토바이와 관련 서류 등이며, 세부 항목은 「가입 준비물」
              페이지에서 미리 확인하실 수 있습니다. 서류가 확인되면 배차 앱 설정을 도와드리고, 첫 배송을
              시작하시게 됩니다.
            </p>

            <h3>안전 운행이 최우선입니다</h3>
            <p>
              빠른 배송만큼 중요한 것이 기사님의 안전입니다. 헬멧을 비롯한 보호 장비 착용과 교통법규
              준수, 무리한 운행 자제를 항상 당부드립니다. 우천·강설·혹서 등 기상 상황에서는 배송 시간이
              조정될 수 있으며, 안전을 위한 판단을 존중합니다. 오래 함께 일할 수 있는 기사님을 찾는 것이
              바이크익스프레스의 목표입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <h2>자주 묻는 질문</h2>
            <p>기사 지원 전 많이 문의하시는 내용을 모았습니다.</p>
          </div>
          <Faq
            items={[
              {
                q: "배송 경력이 전혀 없어도 지원할 수 있나요?",
                a: "네, 초보 기사님도 지원 가능합니다. 배차 앱 사용법과 기본 운행 요령을 안내해 드리므로 경력이 없어도 시작하실 수 있습니다. 자세한 내용은 「초보 기사 안내」 페이지를 참고해 주세요.",
              },
              {
                q: "본업과 병행하는 투잡으로도 가능한가요?",
                a: "가능합니다. 원하는 시간대에 맞춰 근무하실 수 있어 퇴근 후나 주말 위주로 운행하시는 분도 많습니다. 다만 물량은 시간대·지역에 따라 편차가 있으니 상담 시 활동 계획을 함께 살펴봐 드립니다.",
              },
              {
                q: "예상 수입은 어느 정도인가요?",
                a: "수입은 배송 건수, 거리, 시간대, 지역 특성에 따라 달라지므로 일률적으로 확정해 드리기 어렵습니다. 근무량에 비례하는 구조이며, 개인별 예상치는 지원 후 상담을 통해 안내해 드립니다.",
              },
              {
                q: "가입할 때 어떤 준비물이 필요한가요?",
                a: "대체로 이륜차 운전면허, 신분 확인 서류, 배송에 사용할 오토바이와 관련 서류 등이 필요합니다. 세부 항목은 지역과 근무 형태에 따라 달라질 수 있어 「가입 준비물」 페이지와 상담을 통해 확인해 주세요.",
              },
              {
                q: "수수료와 비용 구조는 어떻게 되나요?",
                a: "수수료와 부대 비용은 「수수료·비용 안내」 페이지에 정리해 두었으며, 개인별 조건은 접수 후 상담 시 자세히 설명해 드립니다. 숨은 비용 없이 투명하게 안내하는 것을 원칙으로 합니다.",
              },
              {
                q: "지원 절차는 얼마나 걸리나요?",
                a: "「기사 지원하기」에서 기본 정보를 남겨 주시면 담당자가 연락드려 절차를 안내합니다. 준비물 확인과 배차 앱 설정 등 조건에 따라 소요 기간이 다를 수 있어, 정확한 일정은 상담 시 안내해 드립니다.",
              },
            ]}
          />
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
