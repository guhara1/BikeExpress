import Link from "next/link";
import { PageHero, Faq } from "@/app/components/ui";
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

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="prose">
            <h2>접수 전에 준비하면 좋은 정보</h2>
            <p>
              퀵서비스 접수는 몇 가지 정보만 정확히 알려주셔도 빠르게 진행됩니다. 접수서를 작성하시기 전에
              아래 항목을 미리 확인해 두시면 상담 시간이 줄고, 요금과 배차 안내가 한층 정확해집니다. 아직 정보가
              완전하지 않더라도 우선 접수해 주시면, 상담원이 부족한 부분을 함께 채워 드립니다.
            </p>
            <ul>
              <li>출발지 주소와 도착지 주소 (건물명·층·호수까지 있으면 더 정확합니다)</li>
              <li>보내는 분과 받는 분의 연락처</li>
              <li>물품의 종류와 대략적인 크기·무게, 파손 주의 여부</li>
              <li>희망 픽업 시간과 도착 희망 시간</li>
              <li>결제 방식 (현금·계좌이체·카드·기업 월 정산 등)</li>
            </ul>

            <h3>이동 수단은 물품에 맞춰 안내드립니다</h3>
            <p>
              작은 서류나 소형 물품은 오토바이 퀵으로, 부피가 크거나 여러 박스인 화물은 다마스·라보 등 차량으로
              안내드립니다. 어떤 수단이 적합한지 판단이 어려우시면 물품 사진이나 대략적인 크기만 알려주셔도
              상담원이 가장 알맞은 방법을 제안해 드립니다. 냉장·냉동, 귀중품, 대형·중량물처럼 특별한 취급이
              필요한 경우에는 접수 시 미리 말씀해 주세요.
            </p>

            <h3>요금은 접수 시 확인 후 안내드립니다</h3>
            <p>
              요금은 출발지와 도착지 사이의 거리, 이동 수단, 물품의 크기와 무게, 시간대와 교통 상황 등 여러
              조건에 따라 달라집니다. 그래서 저희는 정해진 금액을 일률적으로 안내드리기보다, 접수 내용을 확인한
              뒤 정확한 예상 요금을 말씀드리는 방식을 택하고 있습니다. 심야·새벽 시간대, 명절, 악천후, 급송
              요청 등에는 할증이 적용될 수 있으며, 이 역시 확정 전에 미리 안내드립니다.
            </p>

            <h3>접수부터 배송 완료까지의 흐름</h3>
            <p>
              온라인 접수서가 도착하면 상담원이 내용을 확인하고, 배차 가능 여부와 예상 요금을 회신해 드립니다.
              고객님이 확인해 주시면 접수가 확정되고, 가까운 기사님에게 배차되어 픽업이 진행됩니다. 이후 물품을
              받으실 분께 안전하게 전달되면 배송이 완료됩니다. 진행 중 변경 사항이 생기면 언제든지 연락 주세요.
            </p>

            <h3>변경·취소는 되도록 빨리 알려주세요</h3>
            <p>
              주소가 바뀌거나 시간을 조정해야 하는 경우, 픽업 전에 알려주시면 대부분 무리 없이 반영됩니다. 다만
              이미 기사님이 출발했거나 픽업이 진행된 뒤에는 이동 거리에 따라 비용이 발생할 수 있습니다. 취소를
              원하시는 경우에도 진행 단계에 따라 처리 방법이 달라지므로, 결정하시는 즉시 연락 주시길 권해
              드립니다.
            </p>

            <h3>안전한 배송을 위한 협조 사항</h3>
            <p>
              파손·훼손이 우려되는 물품은 접수 시 반드시 알려주시고, 가능하다면 완충재로 한 번 더 포장해
              주세요. 귀중품이나 고가 물품은 별도의 취급 기준이 적용될 수 있으니 사전에 상담해 주시기 바랍니다.
              받는 분이 자리를 비우실 예정이라면 대리 수령인이나 전달 위치를 미리 정해 주시면 배송이 한결
              매끄럽게 마무리됩니다.
            </p>
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

      <section className="section soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <h2>자주 묻는 질문</h2>
            <p>접수 전에 많이 궁금해하시는 내용을 모았습니다.</p>
          </div>
          <Faq
            items={[
              {
                q: "온라인으로 접수하면 바로 배차되나요?",
                a: "온라인 접수서는 상담원이 확인한 뒤 배차 가능 여부와 예상 요금을 회신해 드립니다. 고객님이 확인해 주시면 접수가 확정되고 배차가 진행됩니다. 급하신 경우에는 전화 접수가 가장 빠릅니다.",
              },
              {
                q: "요금은 접수서에 바로 표시되나요?",
                a: "요금은 거리·이동 수단·물품 크기와 무게·시간대 등 여러 조건에 따라 달라져 자동으로 표시되지 않습니다. 접수 내용을 확인한 뒤 예상 요금을 안내드리며, 확정 전에 반드시 금액을 알려드립니다.",
              },
              {
                q: "주소를 정확히 몰라도 접수할 수 있나요?",
                a: "우선 아시는 만큼만 적어 접수해 주셔도 됩니다. 건물명·층·호수까지 알려주시면 더 정확하지만, 부족한 부분은 상담 과정에서 함께 확인해 채워 드립니다.",
              },
              {
                q: "픽업 시간을 지정할 수 있나요?",
                a: "희망 픽업 시간과 도착 희망 시간을 접수서에 적어주시면 조건을 확인해 안내드립니다. 교통 상황이나 배차 여건에 따라 조정이 필요할 수 있으며, 이 경우 미리 연락드립니다.",
              },
              {
                q: "접수 후 주소나 시간을 바꿀 수 있나요?",
                a: "픽업 전에 알려주시면 대부분 반영됩니다. 다만 기사님이 이미 출발했거나 픽업이 진행된 뒤에는 이동 거리에 따라 비용이 발생할 수 있으니, 변경이 필요하면 되도록 빨리 연락 주세요.",
              },
              {
                q: "결제는 어떤 방식으로 할 수 있나요?",
                a: "현금·계좌이체·카드 등으로 결제하실 수 있으며, 기업회원은 월 정산도 가능합니다. 접수 시 원하시는 결제 방식을 말씀해 주시면 그에 맞게 안내해 드립니다.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
