// 사이트 전역 데이터 - 회사 정보, 네비게이션, 지역, 차량 정보

export const company = {
  name: "바이크익스프레스",
  nameEn: "BikeExpress",
  tagline: "전국 퀵서비스 빠른 접수",
  phone: "1666-0000",
  phoneRaw: "16660000",
  kakao: "@bikeexpress",
  email: "help@bikeexpress.co.kr",
  hours: "평일 08:00 ~ 20:00 / 야간·주말 접수 별도 안내",
  bizNumber: "000-00-00000",
  ceo: "홍길동",
  address: "서울특별시 중구 세종대로 000",
  privacyOfficer: "개인정보보호책임자",
};

// PC 상단 헤더 - 8개 이내 메뉴 + 우측 고정 버튼
export const primaryNav = [
  {
    label: "퀵서비스",
    href: "/quick-service/",
    children: [
      { label: "퀵서비스 접수", href: "/order/" },
      { label: "오토바이 퀵", href: "/quick-service/motorcycle/" },
      { label: "당일 퀵배송", href: "/quick-service/same-day/" },
      { label: "긴급 퀵배송", href: "/quick-service/urgent/" },
      { label: "예약 퀵배송", href: "/quick-service/reservation/" },
      { label: "야간·주말 배송", href: "/quick-service/night-weekend/" },
      { label: "장거리 퀵서비스", href: "/quick-service/long-distance/" },
      { label: "왕복 배송", href: "/quick-service/round-trip/" },
      { label: "다중 경유 배송", href: "/quick-service/multi-stop/" },
    ],
  },
  {
    label: "차량안내",
    href: "/vehicle/",
    children: [
      { label: "오토바이 퀵", href: "/vehicle/motorcycle/" },
      { label: "다마스 퀵", href: "/vehicle/damas/" },
      { label: "라보 퀵", href: "/vehicle/labo/" },
      { label: "1톤 화물", href: "/vehicle/1ton/" },
      { label: "1.4톤·2.5톤 화물", href: "/vehicle/truck/" },
      { label: "차량 선택 가이드", href: "/vehicle/guide/" },
      { label: "적재 제한 안내", href: "/vehicle/load-limit/" },
    ],
  },
  {
    label: "서비스지역",
    href: "/area/",
    children: [
      { label: "수도권 (서울·경기·인천)", href: "/area/seoul/" },
      { label: "충청권 (대전·세종·충북·충남)", href: "/area/daejeon/" },
      { label: "호남권 (광주·전북·전남)", href: "/area/gwangju/" },
      { label: "영남권 (부산·대구·울산·경북·경남)", href: "/area/busan/" },
      { label: "강원", href: "/area/gangwon/" },
      { label: "제주", href: "/area/jeju/" },
    ],
  },
  {
    label: "기업배송",
    href: "/business/",
    children: [
      { label: "기업 퀵서비스", href: "/business/corporate/" },
      { label: "정기배송", href: "/business/regular-delivery/" },
      { label: "월 정산 서비스", href: "/business/monthly-billing/" },
      { label: "다지점 배송", href: "/business/multi-point/" },
      { label: "쇼핑몰 배송", href: "/business/ecommerce/" },
      { label: "병원·약국 배송", href: "/business/medical/" },
      { label: "법무·세무 서류 배송", href: "/business/legal-documents/" },
      { label: "인쇄물·샘플 배송", href: "/business/printing-sample/" },
      { label: "부품·자재 배송", href: "/business/parts/" },
      { label: "기업 상담 신청", href: "/business/contact/" },
    ],
  },
  {
    label: "요금안내",
    href: "/guide/",
    children: [
      { label: "퀵서비스 요금 안내", href: "/guide/" },
      { label: "차량별 요금", href: "/guide/vehicle-price/" },
      { label: "할증 안내", href: "/guide/surcharge/" },
      { label: "접수 방법", href: "/guide/how-to-order/" },
      { label: "결제 방법", href: "/guide/payment/" },
      { label: "배송 가능·제한 물품", href: "/guide/items/" },
      { label: "취소·환불 안내", href: "/guide/refund/" },
      { label: "사고·파손 대응", href: "/guide/accident/" },
      { label: "자주 묻는 질문", href: "/guide/faq/" },
    ],
  },
  {
    label: "기사모집",
    href: "/rider/",
    children: [
      { label: "전국 퀵기사 모집", href: "/rider/recruit/" },
      { label: "오토바이 퀵기사 모집", href: "/rider/motorcycle/" },
      { label: "초보 기사 안내", href: "/rider/beginner/" },
      { label: "투잡·부업 기사", href: "/rider/part-time/" },
      { label: "근무 방식", href: "/rider/work-style/" },
      { label: "예상 수입", href: "/rider/income/" },
      { label: "수수료·비용 안내", href: "/rider/fees/" },
      { label: "가입 준비물", href: "/rider/requirements/" },
      { label: "기사 지원", href: "/rider/apply/" },
      { label: "기사 FAQ", href: "/rider/faq/" },
    ],
  },
  {
    label: "고객지원",
    href: "/support/",
    children: [
      { label: "공지사항", href: "/support/notice/" },
      { label: "자주 묻는 질문", href: "/guide/faq/" },
      { label: "배송 문의", href: "/support/delivery/" },
      { label: "기업 문의", href: "/business/contact/" },
      { label: "불편 접수", href: "/support/complaint/" },
      { label: "분실·파손 문의", href: "/support/damage/" },
      { label: "제휴 문의", href: "/support/partnership/" },
    ],
  },
  {
    label: "회사소개",
    href: "/company/",
    children: [
      { label: "회사 소개", href: "/company/" },
      { label: "서비스 운영 원칙", href: "/company/principles/" },
      { label: "전국 배차 네트워크", href: "/company/network/" },
      { label: "안전·고객보호", href: "/company/safety/" },
      { label: "이용약관", href: "/company/terms/" },
      { label: "개인정보처리방침", href: "/company/privacy/" },
      { label: "사업자 정보", href: "/company/business-info/" },
    ],
  },
];

// 우측 상단 고정 버튼
export const ctaButtons = [
  { label: "바로 접수", href: "/order/", variant: "primary" },
  { label: "기사 지원", href: "/rider/apply/", variant: "outline" },
];

// 모바일 하단 고정 바
export const mobileBar = [
  { label: "전화접수", icon: "phone", href: "tel:16660000" },
  { label: "카톡접수", icon: "chat", href: "/order/#kakao" },
  { label: "온라인접수", icon: "form", href: "/order/" },
  { label: "기사지원", icon: "rider", href: "/rider/apply/" },
];

// 차량 데이터
export const vehicles = [
  {
    slug: "motorcycle",
    name: "오토바이 퀵",
    short: "오토바이",
    summary: "서류·소형 물품 긴급 배송에 가장 빠른 차량",
    desc: "가볍고 빠른 오토바이는 서류, 열쇠, 휴대전화, 소형 부품 등 긴급 소화물을 가장 신속하게 전달합니다. 교통 혼잡 구간에서도 빠른 이동이 가능해 당일·긴급 배송에 적합합니다.",
    items: ["서류", "계약서", "도장", "열쇠", "휴대전화", "의류", "소형 부품", "샘플", "쇼핑백", "소형 박스"],
    capacity: "소형 (약 20kg 이내)",
  },
  {
    slug: "damas",
    name: "다마스 퀵",
    short: "다마스",
    summary: "중형 박스·다량 소화물 배송에 알맞은 경상용차",
    desc: "다마스는 오토바이로는 부담스러운 중형 박스나 여러 개의 소화물을 한 번에 옮길 수 있는 경상용차입니다. 꽃, 행사 물품, 의류 묶음, 쇼핑몰 상품 배송에 자주 이용됩니다.",
    items: ["중형 박스", "꽃", "행사 물품", "소형 가전", "의류 묶음", "쇼핑몰 상품"],
    capacity: "중형 (약 300kg 내외)",
  },
  {
    slug: "labo",
    name: "라보 퀵",
    short: "라보",
    summary: "부피가 있는 화물·자재 운송에 적합한 소형 트럭",
    desc: "라보는 적재함이 개방되어 부피가 큰 박스나 소형 장비, 자재 등을 싣기 좋은 소형 화물차입니다. 매장 물품 이동이나 가벼운 화물 운송에 활용됩니다.",
    items: ["부피가 있는 박스", "소형 장비", "자재", "매장 물품", "가벼운 화물"],
    capacity: "소형 화물 (약 500kg 내외)",
  },
  {
    slug: "1ton",
    name: "1톤 화물",
    short: "1톤",
    summary: "대량 박스·기업 화물·파렛트 운송의 기본 차량",
    desc: "1톤 화물차는 대량 박스, 기업 화물, 행사 장비, 건축 자재 등 무게와 부피가 큰 화물 운송의 기본이 되는 차량입니다. 파렛트 단위 화물도 처리할 수 있습니다.",
    items: ["대량 박스", "기업 화물", "행사 장비", "건축 자재", "매장 집기", "파렛트 화물"],
    capacity: "약 1톤",
  },
  {
    slug: "truck",
    name: "1.4톤·2.5톤 화물",
    short: "1.4톤·2.5톤",
    summary: "1톤을 초과하는 중량·대형 화물 운송",
    desc: "1.4톤, 2.5톤 화물차는 1톤 차량으로 감당하기 어려운 중량·대형 화물을 운송합니다. 대량 납품, 대형 장비, 대규모 행사 물류에 활용됩니다.",
    items: ["대형 화물", "대량 납품 물품", "대형 장비", "행사 물류", "중량 자재"],
    capacity: "1.4톤 ~ 2.5톤",
  },
];

// 차량 선택표
export const vehicleGuideTable = [
  { item: "서류·열쇠·휴대전화", vehicle: "오토바이" },
  { item: "쇼핑백·소형 박스", vehicle: "오토바이 또는 다마스" },
  { item: "중형 박스 여러 개", vehicle: "다마스" },
  { item: "부피가 큰 물품", vehicle: "라보" },
  { item: "대량 화물·무거운 물품", vehicle: "1톤 이상" },
];

// 전국 지역 데이터 (17개 시·도) - 권역별 그룹
export const regionGroups = [
  {
    key: "capital",
    name: "수도권",
    regions: ["seoul", "gyeonggi", "incheon"],
  },
  {
    key: "chungcheong",
    name: "충청권",
    regions: ["daejeon", "sejong", "chungbuk", "chungnam"],
  },
  {
    key: "honam",
    name: "호남권",
    regions: ["gwangju", "jeonbuk", "jeonnam"],
  },
  {
    key: "yeongnam",
    name: "영남권",
    regions: ["busan", "daegu", "ulsan", "gyeongbuk", "gyeongnam"],
  },
  {
    key: "gangwon-jeju",
    name: "강원·제주",
    regions: ["gangwon", "jeju"],
  },
];

// 지역 상세 데이터
export const regions = {
  seoul: {
    slug: "seoul",
    name: "서울",
    full: "서울특별시",
    districts: "종로·중구·강남·서초·송파·영등포·마포·구로 등 25개 자치구",
    hubs: ["광화문·시청 업무지구", "강남·테헤란로 오피스", "여의도 금융지구", "구로·가산 디지털단지"],
    industry: "행정·금융·IT·유통 등 전 업종이 밀집한 국내 최대 물류 수요 지역",
    nearby: ["경기 성남", "경기 고양", "인천", "경기 부천"],
    longDistance: "서울에서 부산·대구·광주 등 지방 주요 도시로의 장거리 퀵도 상시 접수합니다.",
  },
  gyeonggi: {
    slug: "gyeonggi",
    name: "경기",
    full: "경기도",
    districts: "수원·성남·용인·화성·고양·부천 등 31개 시·군",
    hubs: ["판교 테크노밸리", "동탄·광교 신도시", "안산·시화 산업단지", "평택 항만·산업물류"],
    industry: "제조·반도체·물류 산업단지가 광범위하게 분포한 최대 화물 수요권",
    nearby: ["서울", "인천", "충남 천안", "강원 원주"],
    longDistance: "수도권 남부에서 충청·영남권으로 이어지는 장거리 배차가 활발합니다.",
    cities: [
      "수원", "성남", "용인", "화성", "안산", "안양", "부천", "평택",
      "안성", "고양", "남양주", "의정부", "시흥", "광명", "김포", "파주", "하남", "이천",
    ],
  },
  incheon: {
    slug: "incheon",
    name: "인천",
    full: "인천광역시",
    districts: "중구·남동구·부평구·연수구·서구 등 10개 군·구",
    hubs: ["인천항·항만물류", "남동국가산업단지", "송도 국제업무지구", "인천국제공항 물류"],
    industry: "항만·공항 물류와 제조 산업단지가 결합된 국제 물류 거점",
    nearby: ["서울", "경기 부천", "경기 김포", "경기 시흥"],
    longDistance: "공항·항만 연계 화물과 수도권 내 긴급 배송 수요가 많습니다.",
  },
  daejeon: {
    slug: "daejeon",
    name: "대전",
    full: "대전광역시",
    districts: "동구·중구·서구·유성구·대덕구 5개 자치구",
    hubs: ["둔산 업무지구", "대덕연구개발특구", "대전산업단지", "유성 연구·바이오 클러스터"],
    industry: "연구·과학·행정 기능과 중부권 물류 결절이 결합된 중심 도시",
    nearby: ["세종", "충남 천안", "충북 청주", "충남 논산"],
    longDistance: "중부권 허브로서 수도권·영남권 양방향 장거리 배차의 중간 결절 역할을 합니다.",
  },
  sejong: {
    slug: "sejong",
    name: "세종",
    full: "세종특별자치시",
    districts: "정부세종청사 권역 및 읍·면 지역",
    hubs: ["정부세종청사", "세종 신도시 업무지구", "인근 산업·연구단지"],
    industry: "중앙행정기관이 집중된 행정 중심 복합도시",
    nearby: ["대전", "충북 청주", "충남 공주", "충남 천안"],
    longDistance: "행정 서류·기업 문서의 수도권 왕복 배송 수요가 꾸준합니다.",
  },
  chungbuk: {
    slug: "chungbuk",
    name: "충북",
    full: "충청북도",
    districts: "청주·충주·제천 등 11개 시·군",
    hubs: ["청주 오송 바이오·의약", "청주 산업단지", "충주 기업도시", "진천·음성 물류단지"],
    industry: "바이오·반도체·물류가 성장하는 내륙 산업 중심권",
    nearby: ["세종", "대전", "충남 천안", "경기 이천"],
    longDistance: "중부내륙 물류축을 따라 수도권·영남권 장거리 배차가 이뤄집니다.",
  },
  chungnam: {
    slug: "chungnam",
    name: "충남",
    full: "충청남도",
    districts: "천안·아산·서산·당진 등 15개 시·군",
    hubs: ["천안·아산 산업벨트", "서산 석유화학단지", "당진 철강·항만", "아산 디스플레이 클러스터"],
    industry: "디스플레이·석유화학·철강 대형 제조업이 밀집한 화물 강세권",
    nearby: ["대전", "세종", "경기 평택", "충북 청주"],
    longDistance: "수도권과 인접해 부품·자재의 당일 왕복 배송이 활발합니다.",
  },
  gwangju: {
    slug: "gwangju",
    name: "광주",
    full: "광주광역시",
    districts: "동구·서구·남구·북구·광산구 5개 자치구",
    hubs: ["상무 업무지구", "광주 하남·평동 산업단지", "첨단 과학산업단지", "자동차·가전 클러스터"],
    industry: "자동차·가전 제조와 호남권 행정·상업 기능의 중심",
    nearby: ["전남 나주", "전남 담양", "전북 정읍", "전남 화순"],
    longDistance: "호남권 허브로서 수도권 장거리와 권역 내 배차를 함께 처리합니다.",
  },
  jeonbuk: {
    slug: "jeonbuk",
    name: "전북",
    full: "전북특별자치도",
    districts: "전주·군산·익산 등 14개 시·군",
    hubs: ["전주 업무지구", "군산 국가산업단지·항만", "익산 국가식품클러스터", "완주 산업단지"],
    industry: "자동차·기계·식품 산업과 항만 물류가 함께하는 지역",
    nearby: ["광주", "전남 정읍", "충남 논산", "경남 함양"],
    longDistance: "군산항 연계 화물과 수도권 장거리 배송 수요가 있습니다.",
  },
  jeonnam: {
    slug: "jeonnam",
    name: "전남",
    full: "전라남도",
    districts: "목포·여수·순천·광양 등 22개 시·군",
    hubs: ["여수 국가산업단지", "광양 제철·항만", "순천 상업지구", "목포 항만물류"],
    industry: "석유화학·제철 등 대형 장치산업과 항만 물류의 거점",
    nearby: ["광주", "경남 하동", "전북 정읍", "전남 나주"],
    longDistance: "여수·광양 산단의 자재·부품 장거리 배송이 활발합니다.",
  },
  busan: {
    slug: "busan",
    name: "부산",
    full: "부산광역시",
    districts: "중구·해운대·부산진·사상·강서 등 16개 군·구",
    hubs: ["서면 업무지구", "부산항 신항·북항", "사상·녹산 산업단지", "센텀시티 IT지구"],
    industry: "국내 최대 항만 물류와 제조·상업이 결합된 영남권 최대 도시",
    nearby: ["경남 김해", "경남 양산", "울산", "경남 창원"],
    longDistance: "부산항 연계 화물과 수도권 장거리 배차 수요가 매우 많습니다.",
  },
  daegu: {
    slug: "daegu",
    name: "대구",
    full: "대구광역시",
    districts: "중구·동구·서구·달서구·수성구 등 8개 군·구",
    hubs: ["동대구 업무지구", "성서산업단지", "대구 국가산업단지", "섬유·기계 클러스터"],
    industry: "섬유·기계·자동차 부품 제조가 강한 영남 내륙 중심 도시",
    nearby: ["경북 경산", "경북 구미", "경남 창원", "경북 칠곡"],
    longDistance: "구미·경산 산단과 연계한 부품 장거리 배송이 활발합니다.",
  },
  ulsan: {
    slug: "ulsan",
    name: "울산",
    full: "울산광역시",
    districts: "중구·남구·동구·북구·울주군",
    hubs: ["울산 석유화학단지", "현대 자동차·조선", "온산 국가산업단지", "울산항 물류"],
    industry: "자동차·조선·석유화학 대형 장치산업이 집중된 산업 도시",
    nearby: ["부산", "경남 양산", "경북 경주", "경남 밀양"],
    longDistance: "산단 부품·자재의 긴급 및 장거리 배송 수요가 큽니다.",
  },
  gyeongbuk: {
    slug: "gyeongbuk",
    name: "경북",
    full: "경상북도",
    districts: "포항·구미·경주·경산 등 22개 시·군",
    hubs: ["구미 국가산업단지", "포항 제철·철강", "경주 자동차 부품", "경산 산업단지"],
    industry: "전자·철강·자동차 부품 제조가 광범위하게 분포한 지역",
    nearby: ["대구", "울산", "충북 김천", "강원 태백"],
    longDistance: "구미 전자·포항 철강 화물의 수도권 장거리 배차가 많습니다.",
  },
  gyeongnam: {
    slug: "gyeongnam",
    name: "경남",
    full: "경상남도",
    districts: "창원·김해·진주·양산 등 18개 시·군",
    hubs: ["창원 국가산업단지", "김해 상업·물류", "진주 혁신도시", "거제 조선"],
    industry: "기계·조선·항공 등 중공업이 밀집한 영남권 제조 거점",
    nearby: ["부산", "울산", "대구", "전남 하동"],
    longDistance: "창원·거제 산업 화물의 장거리 및 권역 내 배차가 활발합니다.",
  },
  gangwon: {
    slug: "gangwon",
    name: "강원",
    full: "강원특별자치도",
    districts: "춘천·원주·강릉·속초 등 18개 시·군",
    hubs: ["원주 기업도시·혁신도시", "춘천 업무지구", "강릉 상업지구", "동해·삼척 항만"],
    industry: "의료기기·관광·항만 물류가 분포한 광역 지역",
    nearby: ["경기 남양주", "충북 제천", "경북 태백", "경기 양평"],
    longDistance: "원주를 축으로 수도권 왕복 장거리 배송이 자주 이뤄집니다.",
  },
  jeju: {
    slug: "jeju",
    name: "제주",
    full: "제주특별자치도",
    districts: "제주시·서귀포시",
    hubs: ["제주시 업무지구", "제주항·공항 물류", "서귀포 관광·상업지구", "첨단과학기술단지"],
    industry: "관광·유통과 항공·항만 연계 물류가 중심인 특별자치도",
    nearby: ["제주시 ↔ 서귀포시 도내 이동"],
    longDistance: "육지 연계 화물은 항공·해상 운송과 결합해 접수 전 별도 안내합니다.",
  },
};

export const regionSlugs = Object.keys(regions);

// 접수 진행 상태 단계
export const orderStatus = [
  "접수 대기", "요금 안내", "배차 중", "기사 배정", "픽업 완료", "배송 중", "배송 완료",
];

// 이용 절차
export const usageSteps = [
  { n: 1, title: "출발지·도착지 확인", desc: "출발지와 도착지 주소, 담당자 연락처를 확인합니다." },
  { n: 2, title: "물품과 차량 확인", desc: "물품 종류·크기·무게에 맞는 차량을 선택합니다." },
  { n: 3, title: "예상요금 안내", desc: "거리·차량·조건을 반영한 예상요금을 안내합니다." },
  { n: 4, title: "기사 배차", desc: "가까운 기사에게 배차하여 픽업을 진행합니다." },
  { n: 5, title: "픽업 및 배송 완료", desc: "픽업 후 도착지까지 안전하게 배송합니다." },
];
