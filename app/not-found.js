import Link from "next/link";

export const metadata = {
  title: "페이지를 찾을 수 없습니다",
};

export default function NotFound() {
  return (
    <section className="section" style={{ padding: "90px 0", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <div className="card-icon" style={{ margin: "0 auto 18px", fontSize: 28 }}>🛵</div>
        <h1 style={{ fontSize: 32 }}>페이지를 찾을 수 없습니다</h1>
        <p>
          주소가 변경되었거나 삭제된 페이지일 수 있습니다. 홈으로 이동해 원하시는
          서비스를 찾아보세요.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
          <Link href="/" className="btn btn-primary btn-lg">홈으로</Link>
          <Link href="/order/" className="btn btn-outline btn-lg">퀵서비스 접수</Link>
        </div>
      </div>
    </section>
  );
}
