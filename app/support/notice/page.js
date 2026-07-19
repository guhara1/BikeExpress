import { PageHero, CtaBand } from "@/app/components/ui";
import { company } from "@/app/data/site";

export const metadata = {
  title: "공지사항",
  description: "서비스 운영 소식과 이용 안내 공지를 확인하세요.",
};

const notices = [
  { tag: "안내", title: "전국 서비스 지역 순차 확대 안내", date: "2026-07-10", body: "이용이 많은 도시부터 시·군·구 단위 지역 안내를 순차적으로 확대하고 있습니다." },
  { tag: "모집", title: "전국 오토바이 퀵기사 상시 모집", date: "2026-07-01", body: "초보·투잡·경력 기사 모두 지원 가능합니다. 비대면 가입으로 간편하게 시작하세요." },
  { tag: "안내", title: "기업 정기배송·월 정산 서비스 안내", date: "2026-06-20", body: "반복되는 기업 배송을 정기배송과 월 정산으로 더 편리하게 이용하실 수 있습니다." },
  { tag: "운영", title: "야간·주말 배송 접수 운영 안내", date: "2026-06-05", body: "야간·주말·공휴일에도 배차 가능 여부를 확인해 접수해 드립니다. 할증이 적용될 수 있습니다." },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="공지사항"
        desc="서비스 운영 소식과 이용 안내를 확인하세요."
        crumbs={[{ label: "고객지원", href: "/support/" }, { label: "공지사항" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="grid" style={{ gap: 14 }}>
            {notices.map((n) => (
              <div className="card" key={n.title}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span className="card-tag" style={{ marginBottom: 0 }}>{n.tag}</span>
                  <span style={{ fontSize: 13, color: "var(--muted)" }}>{n.date}</span>
                </div>
                <h3 style={{ fontSize: 18, margin: "10px 0 6px" }}>{n.title}</h3>
                <p style={{ marginBottom: 0 }}>{n.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: 24, color: "var(--muted)", fontSize: 14 }}>
            {company.name}는 서비스 개선 소식을 이곳에 안내합니다.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
