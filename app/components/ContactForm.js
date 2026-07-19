"use client";

import { useState } from "react";

const inquiryTypes = [
  "일반 고객 문의",
  "요금 문의",
  "배차 문의",
  "기업 계약 문의",
  "배송 사고 문의",
  "기사 지원 문의",
  "제휴 문의",
];

export default function ContactForm({ defaultType }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px" }}>✓</div>
        <h3>문의가 접수되었습니다</h3>
        <p>
          담당자가 확인 후 입력하신 연락처로 안내드립니다. 급하신 경우 고객센터로
          전화 주시면 더 빠르게 도와드립니다.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>
          다시 문의하기
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>성함<span className="req">*</span></label>
          <input required placeholder="성함 또는 회사명" />
        </div>
        <div className="field">
          <label>연락처<span className="req">*</span></label>
          <input required type="tel" placeholder="연락 가능한 번호" />
        </div>
        <div className="field full">
          <label>문의 유형<span className="req">*</span></label>
          <select required defaultValue={defaultType || ""}>
            <option value="" disabled>선택</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label>문의 내용<span className="req">*</span></label>
          <textarea required placeholder="문의하실 내용을 자세히 적어주세요." />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 18 }}>
        문의 접수하기
      </button>
      <p className="form-note">
        입력하신 정보는 문의 응대 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
