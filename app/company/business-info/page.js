import { PageHero } from "@/app/components/ui";
import { company } from "@/app/data/site";

export const metadata = {
  title: "사업자 정보",
  description: "상호, 대표자, 사업자등록번호, 주소, 고객센터 등 사업자 정보를 안내합니다.",
};

const rows = [
  ["상호", `${company.name} (${company.nameEn})`],
  ["대표자", company.ceo],
  ["사업자등록번호", company.bizNumber],
  ["주소", company.address],
  ["고객센터", company.phone],
  ["운영시간", company.hours],
  ["이메일", company.email],
  ["카카오톡", company.kakao],
];

export default function Page() {
  return (
    <>
      <PageHero
        title="사업자 정보"
        crumbs={[{ label: "회사소개", href: "/company/" }, { label: "사업자 정보" }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="callout warn" style={{ marginBottom: 24 }}>
            <p>
              아래 정보는 예시 값입니다. 실제 사업자등록번호·대표자·주소·고객센터 번호·통신
              판매업 신고번호 등은 실제 등록 정보로 정확하게 공개해야 합니다.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ width: 160 }}>{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 20, color: "var(--muted)", fontSize: 14 }}>
            통신판매업 신고번호, 위치기반서비스 신고 등 관련 정보가 있다면 함께
            공개하십시오.
          </p>
        </div>
      </section>
    </>
  );
}
