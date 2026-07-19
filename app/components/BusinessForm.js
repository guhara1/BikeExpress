"use client";

import { useState } from "react";

export default function BusinessForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px" }}>✓</div>
        <h3>기업 상담 신청이 접수되었습니다</h3>
        <p>
          담당자가 이용 규모와 배송 구간을 확인한 뒤, 맞춤 견적과 정기배송·월 정산 조건을
          안내해 드립니다.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>
          다시 신청하기
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>회사명<span className="req">*</span></label>
          <input required placeholder="회사·상호명" />
        </div>
        <div className="field">
          <label>담당자명<span className="req">*</span></label>
          <input required placeholder="담당자 성함" />
        </div>
        <div className="field">
          <label>연락처<span className="req">*</span></label>
          <input required type="tel" placeholder="연락 가능한 번호" />
        </div>
        <div className="field">
          <label>이메일</label>
          <input type="email" placeholder="견적 회신용 이메일" />
        </div>
        <div className="field">
          <label>월 예상 이용 건수</label>
          <select defaultValue="">
            <option value="" disabled>선택</option>
            <option>월 10건 이하</option>
            <option>월 10~50건</option>
            <option>월 50~200건</option>
            <option>월 200건 이상</option>
          </select>
        </div>
        <div className="field">
          <label>주로 이용할 차량</label>
          <select defaultValue="">
            <option value="" disabled>선택</option>
            <option>오토바이</option>
            <option>다마스</option>
            <option>라보</option>
            <option>1톤 이상 화물</option>
            <option>여러 차량 혼합</option>
          </select>
        </div>
        <div className="field">
          <label>주요 출발지역</label>
          <input placeholder="예) 서울 강남" />
        </div>
        <div className="field">
          <label>주요 도착지역</label>
          <input placeholder="예) 경기 전역" />
        </div>
        <div className="field full">
          <label>세금계산서 발행 필요 여부</label>
          <select defaultValue="">
            <option value="" disabled>선택</option>
            <option>필요</option>
            <option>불필요</option>
            <option>상담 후 결정</option>
          </select>
        </div>
        <div className="field full">
          <label>상담 요청사항</label>
          <textarea placeholder="정기배송 주기, 다지점 배송, 업종 특성 등 요청사항을 적어주세요." />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 18 }}>
        기업 상담 신청하기
      </button>
      <p className="form-note">
        신청해 주시면 담당자가 확인 후 맞춤 견적과 계약 조건을 안내합니다. 입력하신
        정보는 기업 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
