import Link from "next/link";
import { PageHero, LinkList, CtaBand } from "@/app/components/ui";

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

      <CtaBand
        title="기업 물류, 더 효율적으로 운영하세요"
        desc="월 예상 이용 건수와 배송 구간을 알려주시면 맞춤 견적을 안내합니다."
        primary={{ label: "기업 상담 신청", href: "/business/contact/" }}
        secondary={{ label: "요금 안내 보기", href: "/guide/" }}
      />
    </>
  );
}
