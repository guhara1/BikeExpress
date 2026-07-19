import "./fonts.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";
import JsonLd from "./components/JsonLd";
import { company, SITE_URL } from "./data/site";
import { globalGraph } from "./lib/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | 전국 최저가 퀵서비스 빠른 접수 · 오토바이 퀵기사 모집`,
    template: `%s | ${company.name}`,
  },
  description:
    "전국 오토바이 퀵부터 다마스·라보·1톤 화물까지, 출발지와 도착지에 맞춰 신속하게 배차하는 전국 퀵서비스. 서류·소형물품·기업배송·긴급배송 접수와 전국 오토바이 퀵기사 모집.",
  keywords: [
    "퀵서비스", "최저가퀵서비스", "퀵서비스최저가", "오토바이퀵", "전국퀵서비스",
    "다마스퀵", "라보퀵", "1톤화물", "긴급배송", "당일배송",
    "기업배송", "지역별퀵서비스최저가", "퀵기사모집",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: company.name,
    title: `${company.name} | 전국 퀵서비스 빠른 접수`,
    description:
      "오토바이부터 1톤 화물까지 전국 배차. 서류·소형물품·기업배송·긴급배송 신속 접수.",
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      "naver-site-verification": "5cdd1cb46a46cff72f3d6cc50711f48a4b4a7fd6",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f5fd6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <JsonLd data={globalGraph()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
