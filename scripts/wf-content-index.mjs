export const meta = {
  name: "content-expand-index",
  description: "인덱스·폼·FAQ·약관 등 커스텀 페이지를 2000자 이상으로 보강",
  phases: [{ title: "보강 작성", detail: "구조 보존하며 콘텐츠 추가" }],
};

const BASE = `
너는 한국어 퀵서비스 플랫폼 '바이크익스프레스' 웹사이트의 콘텐츠 라이터이자 프론트엔드 개발자다.
배정된 Next.js 페이지 파일의 '본문 콘텐츠'를 2,000자 이상으로 보강해 파일에 직접 저장한다.

[작업 순서]
1) Read로 파일을 읽어 현재 구조(임포트·컴포넌트·폼·카드·그리드·hero)를 정확히 파악한다.
2) 아래 규칙대로 완성 파일 전체를 Write로 같은 경로에 저장한다.
3) 끝에 "완료: <경로> (약 N자)" 한 줄만 반환한다.

[가장 중요 — 구조 보존]
- 기존 import, 컴포넌트(OrderForm/RiderForm/BusinessForm/ContactForm 등 폼), PageHero,
  카드/그리드/링크, CtaBand, metadata 등 '기능적 요소'는 절대 삭제·변형하지 말 것.
- 폼 페이지는 폼 컴포넌트를 그대로 두고, 그 위/아래에 안내 콘텐츠 섹션만 '추가'한다.
- 인덱스(허브) 페이지는 기존 카드/그리드를 그대로 두고, 소개·가이드 프로즈 섹션과 FAQ를 '추가'한다.
- 즉 기존 것은 유지하고 콘텐츠를 '추가/확장'하는 방향이다.

[추가 콘텐츠 작성 방법]
- 새 콘텐츠 섹션은 기존 CSS 클래스를 활용한다. 예:
    <section className="section"><div className="container" style={{ maxWidth: 860 }}>
      <div className="prose">
        <h2>소제목</h2><p>...</p><h3>...</h3><p>...</p>
        <ul><li>...</li></ul>
      </div>
    </div></section>
- FAQ가 필요하면 상단에서 Faq를 import 하여 사용:
    import { Faq } from "@/app/components/ui";  // 기존 import 줄에 합치거나 새 줄 추가
    <section className="section soft"><div className="container" style={{ maxWidth: 820 }}>
      <div className="section-head"><h2>자주 묻는 질문</h2></div>
      <Faq items={[{ q: "...", a: "..." }, ...]} />
    </div></section>
- 추가 프로즈 5~7개 소제목 + 문단, 그리고 FAQ 5~6문항으로 본문 총량 2,000자 이상(FAQ 포함).
- 이 페이지 주제에 맞는 고유·유용한 내용. 다른 페이지 문장 복붙 금지.

[정확성] 실제 요금·소요시간·확정 수입·과장 통계 금지. "조건에 따라 접수/상담 시 안내" 방식. 존댓말.
[JSX 안전] 모든 문자열은 큰따옴표. 문자열 내부 인용은 홑따옴표나 한글 「」. 백틱/템플릿리터럴로 새 문자열
  만들지 말 것(기존 코드의 백틱은 유지). 유효한 빌드 가능한 JSX. "use client"가 원래 없으면 넣지 말 것.
`;

const TYPES = {
  index: "허브(인덱스) 페이지다. 기존 카드/그리드/링크는 유지하고, 이 카테고리 전체를 아우르는 소개·이용 가이드 프로즈 섹션과 FAQ를 추가해 방문자가 하위 페이지를 이해하도록 돕는다.",
  form: "접수/지원/상담 폼 페이지다. 폼 컴포넌트는 반드시 그대로 유지하고, 폼 위나 아래에 이용 안내·준비물·절차·주의사항 프로즈와 FAQ를 추가한다.",
  support: "고객지원 문의 페이지다. 기존 폼/구조는 유지하고, 해당 문의 유형에 대한 안내·처리 절차·준비 정보 프로즈와 FAQ를 추가한다.",
  faq: "FAQ 페이지다. 기존 Faq items 배열을 유지하되 질문을 총 12~14개로 대폭 확장한다(중복 없는 새로운 실제 질문). 필요하면 상단에 간단한 안내 프로즈도 추가한다.",
  legal: "약관/방침 등 법적 문서 페이지다. 기존 조항과 경고(callout)를 유지하고, 표준적이고 합리적인 조항·설명을 추가해 2,000자 이상으로 보강한다. 과장·허위 없이 일반적 표준 문안 수준으로.",
  company: "회사 정보 페이지다. 기존 표/정보는 유지하고, 회사 소개·운영 원칙·신뢰성(E-E-A-T) 관련 프로즈와 안내를 추가한다.",
};

const PAGES = [
  ["app/quick-service/page.js", "index"],
  ["app/vehicle/page.js", "index"],
  ["app/area/page.js", "index"],
  ["app/business/page.js", "index"],
  ["app/rider/page.js", "index"],
  ["app/guide/page.js", "index"],
  ["app/support/page.js", "index"],
  ["app/company/page.js", "index"],
  ["app/order/page.js", "form"],
  ["app/rider/apply/page.js", "form"],
  ["app/business/contact/page.js", "form"],
  ["app/support/partnership/page.js", "support"],
  ["app/support/delivery/page.js", "support"],
  ["app/support/complaint/page.js", "support"],
  ["app/support/damage/page.js", "support"],
  ["app/support/notice/page.js", "support"],
  ["app/guide/faq/page.js", "faq"],
  ["app/rider/faq/page.js", "faq"],
  ["app/company/terms/page.js", "legal"],
  ["app/company/privacy/page.js", "legal"],
  ["app/company/business-info/page.js", "company"],
];

phase("보강 작성");
const results = await parallel(
  PAGES.map(([path, type]) => () =>
    agent(
      `${BASE}\n\n[이 페이지의 성격]\n${TYPES[type]}\n\n[배정 파일]\n${path}\n\n지금 이 파일을 읽고, 기존 구조를 보존한 채 콘텐츠를 2,000자 이상으로 보강해 같은 경로에 저장하라.`,
      { label: path.replace("app/", "").replace("/page.js", ""), phase: "보강 작성", agentType: "general-purpose" }
    )
  )
);
log(`완료 ${results.filter(Boolean).length}/${PAGES.length}`);
return { total: PAGES.length, ok: results.filter(Boolean).length };
