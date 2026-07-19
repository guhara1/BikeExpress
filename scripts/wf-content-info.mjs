export const meta = {
  name: "content-expand-info",
  description: "37개 ContentPage 정보 페이지를 2000~2500자 고품질 한글 콘텐츠로 확장",
  phases: [{ title: "확장 작성", detail: "페이지별 에이전트가 파일을 직접 재작성" }],
};

const COMMON = `
너는 한국어 퀵서비스(오토바이·다마스·라보·1톤 화물 배송) 플랫폼 '바이크익스프레스' 웹사이트의
전문 콘텐츠 라이터이자 프론트엔드 개발자다. 배정된 Next.js 페이지 파일을 읽고, 본문 콘텐츠를
Google 고품질 콘텐츠 가이드라인(사람 우선·독창성·유용성·E-E-A-T)에 맞게 대폭 확장해 파일에
직접 덮어써라.

[작업 순서]
1) 먼저 Read 도구로 해당 파일을 읽어 현재 구조를 파악한다.
2) 아래 규칙에 맞춰 완성된 파일 전체를 Write 도구로 같은 경로에 저장한다.
3) 마지막에 한 줄로 완료 보고(파일 경로 + 대략 글자 수)만 텍스트로 반환한다.

[반드시 보존할 것 — 절대 변경 금지]
- import 문에서 ContentPage 사용은 유지하되, FAQ를 위해 Faq도 함께 import 한다:
    import { ContentPage, Faq } from "@/app/components/ui";
- ContentPage의 title, desc, crumbs 값은 기존 그대로 유지.
- 기존 파일에 variant="rider" 가 있으면 반드시 유지(기사 모집 페이지).
- 기존 파일에 cta={...} 또는 cta={false} 가 있으면 그 값을 그대로 유지. 없으면 넣지 않는다.
- export const metadata 는 유지하되 description을 80~155자의 매력적이고 구체적인 한글로 개선 가능.

[본문(blocks) 작성 규칙 — 핵심]
- blocks 배열을 아래 블록 타입만 사용해 풍부하게 구성한다:
    { lead: "인트로 문단(2~3문장)" }
    { h3: "소제목" }
    { p: "문단(3~5문장, 구체적이고 유용하게)" }
    { list: ["항목", "항목", ...] }
    { checklist: ["항목", ...] }     // 체크 형태 강조 목록
    { pills: ["키워드", ...] }        // 태그형 키워드
    { callout: "강조 안내 문장" }      // 팁
    { callout: "주의 안내 문장", warn: true }  // 주의
- 소제목(h3) 5~7개로 논리적으로 구성하고, 각 섹션에 실질 정보가 담긴 문단을 넣는다.
- 본문 총량은 공백 제외 약 2,000~2,500자(넉넉히 2,200자 이상 권장). FAQ 포함해 계산.
- 이 페이지의 '고유한 주제'에 집중한다. 다른 페이지와 문장을 복붙하지 말 것(중복 콘텐츠 금지).
- 자연스러운 존댓말(합니다체), 전문적이고 신뢰감 있는 톤.

[정확성 규칙 — 매우 중요]
- 실제 요금(금액)·정확한 배송 소요시간·보장·과장된 수치를 지어내지 말 것.
- 요금/시간은 "거리·차량·물품·시간대 등 조건에 따라 달라지며 접수 시 안내" 식으로 표현.
- 기사 수입도 "활동량에 따라 달라진다"는 조건부로만. 확정 금액 금지.
- 허위·과장·근거 없는 통계 금지. 실제 퀵서비스 업무에 부합하는 사실적 정보만.

[FAQ 추가 — children으로]
- ContentPage의 자식으로 아래처럼 FAQ 섹션을 추가한다(롱테일 검색 대응, 분량 보강):
    <ContentPage ...>
      <h2 style={{ marginTop: 44 }}>자주 묻는 질문</h2>
      <Faq
        items={[
          { q: "질문?", a: "답변 2~4문장." },
          { q: "질문?", a: ["문단1", "문단2"] },
        ]}
      />
    </ContentPage>
- 이 페이지 주제에 맞는 실제로 궁금할 만한 질문 5~6개.

[JSX/문법 안전]
- 모든 문자열은 큰따옴표(")로 감싼다. 문자열 안에서 인용이 필요하면 한글 홑낫표 「」·겹낫표 『』
  또는 작은따옴표를 쓰고, 큰따옴표(")는 문자열 내부에 쓰지 말 것.
- 백틱/템플릿리터럴 쓰지 말 것. 순수 문자열만.
- 반드시 빌드 가능한 유효한 JSX여야 한다. import 경로/컴포넌트명 정확히.
- 파일 상단 주석/설명 없이 코드만. "use client" 넣지 말 것(서버 컴포넌트).

[출력]
- 완성 파일을 Write로 저장한 뒤, 텍스트로 "완료: <경로> (약 N자)" 한 줄만 반환.
`;

const ROLES = {
  quick: "이 페이지는 '고객이 이용하는 퀵배송 서비스 유형' 안내다. 어떤 상황·업종에 적합한지, 실제 이용 흐름, 접수 전 준비사항, 대표 배송 물품/사례, 요금에 영향을 주는 요소, 자주 겪는 상황과 해결, 주의사항을 구체적으로 다뤄라.",
  business: "이 페이지는 '기업(B2B) 배송 서비스' 안내다. 어떤 기업·업종·상황에서 필요한지, 운영/접수 방식, 정기배송·월 정산·세금계산서·다지점 배송과의 연계, 도입 시 얻는 이점, 실제 이용 절차, 담당자가 궁금해할 실무 포인트를 다뤄라.",
  guide: "이 페이지는 '요금·이용 안내(정책)' 문서다. 고정요금을 단정하지 말고, 요금/정책이 어떻게 결정되고 적용되는지 그 기준·조건·절차를 투명하고 친절하게 설명해 신뢰를 준다.",
  rider: "이 페이지는 '전국 퀵기사 모집' 안내다. 초보·투잡·경력 기사 관점에서 근무 방식, 수입 구조(조건부), 수수료·비용, 준비물, 가입/활동 절차, 장점과 현실적 유의점을 균형 있게 설명해라. 확정 수입·과장 금지.",
  company: "이 페이지는 '회사 소개/운영 원칙/네트워크/안전' 문서다. 신뢰성과 전문성(E-E-A-T)을 드러내되 과장 없이, 실제 운영 방식·원칙·정책·고객 보호 노력을 구체적으로 설명해라.",
  vehicle: "이 페이지는 '차량 선택/적재' 안내다. 물품 특성별 차량 선택 기준, 차량별 적재 능력과 한계, 안전·운송 제한, 잘못 선택 시 발생하는 문제와 예방법을 실용적으로 설명해라.",
};

const PAGES = [
  ["app/quick-service/motorcycle/page.js", "quick"],
  ["app/quick-service/same-day/page.js", "quick"],
  ["app/quick-service/urgent/page.js", "quick"],
  ["app/quick-service/reservation/page.js", "quick"],
  ["app/quick-service/night-weekend/page.js", "quick"],
  ["app/quick-service/long-distance/page.js", "quick"],
  ["app/quick-service/round-trip/page.js", "quick"],
  ["app/quick-service/multi-stop/page.js", "quick"],
  ["app/business/corporate/page.js", "business"],
  ["app/business/regular-delivery/page.js", "business"],
  ["app/business/monthly-billing/page.js", "business"],
  ["app/business/multi-point/page.js", "business"],
  ["app/business/ecommerce/page.js", "business"],
  ["app/business/medical/page.js", "business"],
  ["app/business/legal-documents/page.js", "business"],
  ["app/business/printing-sample/page.js", "business"],
  ["app/business/parts/page.js", "business"],
  ["app/guide/vehicle-price/page.js", "guide"],
  ["app/guide/surcharge/page.js", "guide"],
  ["app/guide/how-to-order/page.js", "guide"],
  ["app/guide/payment/page.js", "guide"],
  ["app/guide/items/page.js", "guide"],
  ["app/guide/refund/page.js", "guide"],
  ["app/guide/accident/page.js", "guide"],
  ["app/rider/recruit/page.js", "rider"],
  ["app/rider/motorcycle/page.js", "rider"],
  ["app/rider/beginner/page.js", "rider"],
  ["app/rider/part-time/page.js", "rider"],
  ["app/rider/work-style/page.js", "rider"],
  ["app/rider/income/page.js", "rider"],
  ["app/rider/fees/page.js", "rider"],
  ["app/rider/requirements/page.js", "rider"],
  ["app/company/principles/page.js", "company"],
  ["app/company/network/page.js", "company"],
  ["app/company/safety/page.js", "company"],
  ["app/vehicle/guide/page.js", "vehicle"],
  ["app/vehicle/load-limit/page.js", "vehicle"],
];

phase("확장 작성");

const results = await parallel(
  PAGES.map(([path, role]) => () =>
    agent(
      `${COMMON}\n\n[이 페이지의 성격]\n${ROLES[role]}\n\n[배정 파일]\n${path}\n\n지금 이 파일을 읽고 위 규칙대로 2,000~2,500자 고품질 콘텐츠로 재작성해 같은 경로에 저장해라.`,
      {
        label: path.replace("app/", "").replace("/page.js", ""),
        phase: "확장 작성",
        agentType: "general-purpose",
      }
    )
  )
);

const ok = results.filter(Boolean).length;
log(`완료 ${ok}/${PAGES.length}`);
return { total: PAGES.length, ok, results };
