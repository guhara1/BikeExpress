import Link from "next/link";
import { PageHero } from "@/app/components/ui";
import OrderForm from "@/app/components/OrderForm";
import { company, orderStatus } from "@/app/data/site";

export const metadata = {
  title: "실시간 접수 | 퀵서비스 온라인·전화·카톡 접수",
  description:
    "전화·카카오톡·온라인·기업회원 접수 등 원하는 방식으로 퀵서비스를 접수하세요. 상담원이 요금과 배차 가능 여부를 확인한 뒤 확정합니다.",
};

const methods = [
  { icon: "📞", title: "전화 접수", desc: "가장 빠른 접수. 상담원이 바로 도와드립니다.", action: { label: company.phone, href: `tel:${company.phoneRaw}` } },
  { icon: "💬", title: "카카오톡 접수", desc: "채팅으로 편하게 접수하고 상담받으세요.", action: { label: "카톡 상담 열기", href: "#kakao" } },
  { icon: "📝", title: "온라인 접수", desc: "아래 접수서를 작성하시면 순서대로 안내드립니다.", action: { label: "접수서 작성", href: "#form" } },
  { icon: "🏢", title: "기업회원 접수", desc: "월 정산·다지점 배송은 기업 상담으로 접수하세요.", action: { label: "기업 상담", href: "/business/contact/" } },
];

export default function OrderPage() {
  return (
    <>
      <PageHero
        title="실시간 접수"
        desc="원하는 방식으로 퀵서비스를 접수하세요. 온라인 접수 후 상담원이 요금과 배차 가능 여부를 확인한 뒤 확정합니다."
        crumbs={[{ label: "실시간 접수" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {methods.map((m) => (
              <div className="card" key={m.title}>
                <div className="card-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p style={{ marginBottom: 14 }}>{m.desc}</p>
                {m.action.href.startsWith("tel:") ? (
                  <a href={m.action.href} className="btn btn-outline btn-sm">{m.action.label}</a>
                ) : (
                  <Link href={m.action.href} className="btn btn-outline btn-sm">{m.action.label}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="kakao">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-head">
            <span className="eyebrow">ONLINE ORDER</span>
            <h2 id="form">온라인 접수서 작성</h2>
            <p>필수 항목만 입력하셔도 접수됩니다. 자세히 적어주실수록 정확하게 안내됩니다.</p>
          </div>
          <OrderForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>접수 진행 상태</h2>
            <p>접수 후 배송 완료까지 이렇게 진행됩니다.</p>
          </div>
          <div className="table-wrap" style={{ maxWidth: 720, margin: "0 auto" }}>
            <table>
              <tbody>
                {orderStatus.map((s, i) => (
                  <tr key={s}>
                    <td style={{ width: 60 }}><b style={{ color: "var(--brand)" }}>{i + 1}</b></td>
                    <td>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center" style={{ marginTop: 20, color: "var(--muted)", fontSize: 14 }}>
            회원 접수 시 주문번호로 배송 상태를 확인하실 수 있습니다. (추후 제공)
          </p>
        </div>
      </section>
    </>
  );
}
