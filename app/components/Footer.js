import Link from "next/link";
import { company } from "@/app/data/site";

const columns = [
  {
    title: "서비스",
    links: [
      { label: "퀵서비스 접수", href: "/order/" },
      { label: "차량 안내", href: "/vehicle/" },
      { label: "전국 서비스 지역", href: "/area/" },
      { label: "기업·정기배송", href: "/business/" },
      { label: "요금·이용안내", href: "/guide/" },
    ],
  },
  {
    title: "기사 모집",
    links: [
      { label: "전국 퀵기사 모집", href: "/rider/recruit/" },
      { label: "예상 수입 안내", href: "/rider/income/" },
      { label: "수수료·비용", href: "/rider/fees/" },
      { label: "기사 지원하기", href: "/rider/apply/" },
      { label: "기사 FAQ", href: "/rider/faq/" },
    ],
  },
  {
    title: "고객지원·회사",
    links: [
      { label: "공지사항", href: "/support/notice/" },
      { label: "자주 묻는 질문", href: "/guide/faq/" },
      { label: "회사 소개", href: "/company/" },
      { label: "이용약관", href: "/company/terms/" },
      { label: "개인정보처리방침", href: "/company/privacy/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo">
              <span className="logo-mark">B</span>
              {company.name}
            </span>
            <p>
              전국 오토바이·다마스·라보·1톤 화물까지, 출발지와 도착지에 맞춰 신속하게
              배차하는 전국 퀵서비스 플랫폼입니다.
            </p>
            <div className="footer-contact">
              고객센터
              <b>{company.phone}</b>
              {company.hours}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <div className="footer-links">
                {col.links.map((l) => (
                  <Link href={l.href} key={l.href}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div>
            {company.name}({company.nameEn}) · 대표 {company.ceo} · 사업자등록번호{" "}
            {company.bizNumber}
            <br />
            {company.address} · 이메일 {company.email}
          </div>
          <div>
            <Link href="/company/terms/">이용약관</Link>
            <span> · </span>
            <Link href="/company/privacy/">
              <b style={{ color: "#fff" }}>개인정보처리방침</b>
            </Link>
            <span> · </span>
            <Link href="/company/business-info/">사업자정보</Link>
            <br />© {company.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
