"use client";

import { useState } from "react";
import { regions, regionSlugs } from "@/app/data/site";

export default function RiderForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px" }}>✓</div>
        <h3>기사 지원이 접수되었습니다</h3>
        <p>
          담당자가 확인 후 가입 절차와 준비물, 근무 방식에 대해 안내드립니다.
          비대면 가입도 가능하니 편하게 지원해 주세요.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>
          다시 지원하기
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>성함<span className="req">*</span></label>
          <input required placeholder="지원자 성함" />
        </div>
        <div className="field">
          <label>연락처<span className="req">*</span></label>
          <input required type="tel" placeholder="휴대전화 번호" />
        </div>

        <div className="field">
          <label>희망 근무 지역<span className="req">*</span></label>
          <select required defaultValue="">
            <option value="" disabled>지역 선택</option>
            {regionSlugs.map((s) => (
              <option key={s} value={s}>{regions[s].name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>보유 차량<span className="req">*</span></label>
          <select required defaultValue="">
            <option value="" disabled>선택</option>
            <option>오토바이</option>
            <option>다마스</option>
            <option>라보</option>
            <option>1톤 화물</option>
            <option>차량 준비 예정</option>
          </select>
        </div>

        <div className="field">
          <label>경력 여부</label>
          <select defaultValue="">
            <option value="" disabled>선택</option>
            <option>초보 (경력 없음)</option>
            <option>1년 미만</option>
            <option>1~3년</option>
            <option>3년 이상</option>
          </select>
        </div>
        <div className="field">
          <label>근무 형태</label>
          <select defaultValue="">
            <option value="" disabled>선택</option>
            <option>전업</option>
            <option>투잡·부업</option>
            <option>주말·시간제</option>
          </select>
        </div>

        <div className="field full">
          <label>문의·요청사항</label>
          <textarea placeholder="가입 절차, 수입, 수수료 등 궁금한 점을 남겨주세요." />
        </div>
      </div>

      <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%", marginTop: 18 }}>
        기사 지원하기
      </button>
      <p className="form-note">
        지원 시 입력하신 정보는 기사 모집 상담 목적으로만 사용됩니다. 초보·투잡·경력
        기사 모두 지원 가능합니다.
      </p>
    </form>
  );
}
