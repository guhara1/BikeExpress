import Link from "next/link";
import { PageHero, LinkList, CtaBand, Faq } from "@/app/components/ui";

export const metadata = {
  title: "기업·정기배송 | 월 정산·다지점·업종별 배송",
  description:
    "기업 퀵서비스와 정기배송, 월 정산, 다지점 배송, 쇼핑몰·병원·법무·인쇄·부품 등 업종별 배송을 지원합니다. 세금계산서 발행과 전담 상담을 제공합니다.",
};

const items = [
  { title: "기업 퀵서비스", href: "/business/corporate/", desc: "기업 전용 배송과 전담 상담" },
  { title: "정기배송", href: "/business/regular-delivery/", desc: "반복 배송을 자동으로" },
  { title: "월 정산 서비스", href: "/business/monthly-billing/", desc: "건별 결제 없이 월 단위 정산" },
  { title: "다지점 배송", href: "/business/multi-point/", desc: "여러 지점 동시·순차 배송" },
  { title: "쇼핑몰 배송", href: "/business/ecommerce/", desc: "이커머스 출고·당일 배송" },
  { title: "병원·약국 배송", href: "/business/medical/", desc: "의약품·검체 등 정시 배송" },
  { title: "법무·세무 서류 배송", href: "/business/legal-documents/", desc: "중요 서류 안전 배송" },
  { title: "인쇄물·샘플 배송", href: "/business/printing-sample/", desc: "인쇄물·샘플 정시 전달" },
  { title: "부품·자재 배송", href: "/business/parts/", desc: "생산·현장 부품 긴급 배송" },
];

export default function BusinessIndex() {
  return (
    <>
      <PageHero
        title="기업·정기배송"
        desc="반복되는 배송은 정기배송과 월 정산으로 더 편리하게. 업종 특성에 맞춘 기업 물류를 지원합니다."
        crumbs={[{ label: "기업·정기배송" }]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 44 }}>
            <div className="prose">
              <h2>기업 물류를 더 효율적으로</h2>
              <p className="lead-text">
                반복되는 배송은 정기배송과 월 정산으로, 여러 지점은 다지점 배송으로.
                업종 특성에 맞춘 기업 물류를 전담 상담으로 지원합니다.
              </p>
              <ul className="checklist">
                <li>세금계산서 발행 · 월 단위 정산</li>
                <li>정기·다지점·대량 배송 통합 관리</li>
                <li>업종별 맞춤 배송(병원·법무·부품 등)</li>
              </ul>
            </div>
            <div className="feature-figure">
              <img src="/images/business.webp" width="1000" height="800" loading="lazy" alt="기업 배송과 정기배송·월 정산을 나타내는 일러스트" />
            </div>
          </div>

          <div className="grid grid-3" style={{ marginBottom: 40 }}>
            <div className="card"><h3>세금계산서 발행</h3><p>월 단위 세금계산서 발행으로 회계 처리가 간편합니다.</p></div>
            <div className="card"><h3>월 단위 정산</h3><p>건별 결제 없이 한 달 이용분을 한 번에 정산합니다.</p></div>
            <div className="card"><h3>전담 상담</h3><p>배송 구간과 물량에 맞춘 맞춤 견적을 제공합니다.</p></div>
          </div>

          <div className="section-head">
            <h2>기업 배송 서비스</h2>
            <p>업종과 필요에 맞는 서비스를 선택하세요.</p>
          </div>
          <LinkList items={items} cols={3} />

          <div className="text-center" style={{ marginTop: 36 }}>
            <Link href="/business/contact/" className="btn btn-primary btn-lg">기업 상담 신청하기</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="prose">
            <h2>기업 배송, 무엇이 다른가요</h2>
            <p>
              개인 고객의 단발성 퀵서비스와 달리 기업 배송은 「반복성」과 「관리」가 핵심입니다.
              매일 같은 시간에 같은 구간으로 물건을 보내거나, 여러 지점으로 나눠 배송하거나,
              한 달 동안 발생한 수십 건의 이용분을 한꺼번에 정산해야 하는 경우가 많습니다.
              바이크익스프레스는 이런 반복 업무를 자동화하고 회계·정산 부담을 줄이는 데 초점을 맞춰
              기업 전용 프로세스를 운영합니다. 담당자가 매번 배송을 접수하고 결제하는 번거로움 없이,
              합의된 규칙에 따라 배송이 이어지도록 설계하는 것이 목표입니다.
            </p>

            <h3>어떤 서비스를 선택해야 할까요</h3>
            <p>
              필요에 따라 아래 서비스를 조합해 이용하실 수 있습니다. 하나의 서비스만 쓰는 곳도 있고,
              정기배송과 월 정산, 다지점 배송을 함께 운영하는 곳도 있습니다.
            </p>
            <ul>
              <li><strong>기업 퀵서비스</strong> — 사업자 명의로 이용하며 전담 상담과 이력 관리가 필요한 경우에 적합합니다.</li>
              <li><strong>정기배송</strong> — 요일·시간·구간이 일정하게 반복되는 배송을 미리 등록해 자동으로 진행합니다.</li>
              <li><strong>월 정산 서비스</strong> — 건별 결제 대신 한 달 이용분을 모아 세금계산서와 함께 정산합니다.</li>
              <li><strong>다지점 배송</strong> — 본사에서 여러 매장·지점으로, 또는 지점 간 물품을 동시·순차로 보냅니다.</li>
              <li><strong>업종별 배송</strong> — 쇼핑몰 출고, 병원·약국, 법무·세무 서류, 인쇄물·샘플, 부품·자재 등 특성에 맞춰 운영합니다.</li>
            </ul>

            <h3>도입은 이렇게 진행됩니다</h3>
            <p>
              먼저 상담 신청서를 통해 월 예상 이용 건수와 주요 배송 구간, 물품 종류를 알려 주시면 됩니다.
              담당자가 이용 패턴을 확인한 뒤 적합한 서비스 구성과 정산 방식을 제안드리고,
              필요 시 정기배송 스케줄이나 다지점 배송 순서를 함께 설계합니다. 이후 시범 운영을 거쳐
              세부 조건을 조정하고 정식 운영으로 전환하는 흐름입니다. 구체적인 요금과 소요 시간은
              구간·물량·시간대에 따라 달라지므로 상담 시 안내해 드립니다.
            </p>

            <h3>월 정산과 세금계산서</h3>
            <p>
              월 정산을 이용하시면 매 건마다 결제할 필요 없이, 한 달 동안 발생한 배송을 정리해
              세금계산서와 함께 청구합니다. 부서별·프로젝트별로 이용 내역을 구분해 관리하기가 수월하고,
              경비 처리와 회계 마감에 필요한 자료를 한 번에 확보할 수 있습니다. 정산 주기와
              결제 조건은 기업 상황에 맞춰 협의합니다.
            </p>

            <h3>업종별로 다른 배송 기준</h3>
            <p>
              업종마다 중요하게 여기는 지점이 다릅니다. 병원·약국 배송은 정시성과 취급 주의가,
              법무·세무 서류는 보안과 분실 방지가, 부품·자재는 생산 라인이 멈추지 않도록 하는 긴급성이
              중요합니다. 쇼핑몰 배송은 당일 출고 마감 시간을 지키는 것이, 인쇄물·샘플은 행사·미팅 전
              정확한 전달이 관건입니다. 각 하위 페이지에서 해당 업종에 맞춘 운영 방식과 유의 사항을
              자세히 안내하고 있으니 참고해 주세요.
            </p>

            <h3>안전과 이력 관리</h3>
            <p>
              기업 배송은 물품 가치가 크거나 대외비 성격을 띠는 경우가 많습니다.
              바이크익스프레스는 배송 접수부터 완료까지의 상태를 확인할 수 있도록 하고,
              담당 라이더와 소통이 원활하도록 안내합니다. 취급 주의가 필요한 물품은 접수 시
              특성을 알려 주시면 적합한 방식으로 운송하도록 준비합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <h2>자주 묻는 질문</h2>
          </div>
          <Faq
            items={[
              {
                q: "기업 계정은 어떻게 개설하나요?",
                a: "기업 상담 신청서에 사업자 정보와 월 예상 이용 건수, 주요 배송 구간을 남겨 주시면 담당자가 확인 후 계정 개설과 이용 방식을 안내해 드립니다.",
              },
              {
                q: "정기배송과 월 정산을 함께 쓸 수 있나요?",
                a: "네, 함께 이용하실 수 있습니다. 반복 배송은 정기배송으로 등록하고, 그 이용분을 월 정산으로 묶어 세금계산서와 함께 청구하는 방식이 일반적입니다.",
              },
              {
                q: "세금계산서는 언제 발행되나요?",
                a: "월 단위 정산을 기준으로 발행합니다. 정산 주기와 발행 시점은 기업 상황에 맞춰 협의하며, 세부 사항은 상담 시 안내해 드립니다.",
              },
              {
                q: "요금은 어떻게 정해지나요?",
                a: "배송 구간, 물량, 시간대, 물품 특성에 따라 달라집니다. 고정 금액을 일괄 적용하기보다 이용 패턴을 확인한 뒤 맞춤 견적을 제안드리므로 상담 시 안내해 드립니다.",
              },
              {
                q: "여러 지점으로 나눠 보내는 배송도 가능한가요?",
                a: "다지점 배송으로 지원합니다. 본사에서 여러 지점으로 동시에 보내거나, 정해진 순서대로 순차 배송하는 방식 모두 구성할 수 있습니다.",
              },
              {
                q: "취급 주의가 필요한 물품도 맡길 수 있나요?",
                a: "접수 시 물품 특성과 유의 사항을 알려 주시면 적합한 방식으로 운송하도록 준비합니다. 병원·약국, 법무·세무 서류 등 업종별 배송은 해당 하위 페이지에서 자세히 안내합니다.",
              },
            ]}
          />
        </div>
      </section>

      <CtaBand
        title="기업 물류, 더 효율적으로 운영하세요"
        desc="월 예상 이용 건수와 배송 구간을 알려주시면 맞춤 견적을 안내합니다."
        primary={{ label: "기업 상담 신청", href: "/business/contact/" }}
        secondary={{ label: "요금 안내 보기", href: "/guide/" }}
      />
    </>
  );
}
