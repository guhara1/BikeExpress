"use client";

import { useState } from "react";
import { vehicles, company } from "@/app/data/site";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function OrderForm({ compact = false }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // 데모 환경: 실제 접수 대신 확인 메시지를 표시합니다.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px" }}>✓</div>
        <h3>접수 요청이 전달되었습니다</h3>
        <p>
          상담원이 요금과 배차 가능 여부를 확인한 뒤 입력하신 연락처로 안내드립니다.
          급하신 경우 고객센터로 전화 주시면 더 빠르게 도와드립니다.
        </p>
        <button className="btn btn-outline" onClick={() => setSent(false)}>
          다시 접수하기
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>출발지 주소<span className="req">*</span></label>
          <input required placeholder="예) 서울 강남구 테헤란로 000" />
        </div>
        <div className="field">
          <label>도착지 주소<span className="req">*</span></label>
          <input required placeholder="예) 경기 성남시 분당구 000" />
        </div>

        {!compact && (
          <>
            <div className="field">
              <label>경유지</label>
              <input placeholder="경유지가 있으면 입력" />
            </div>
            <div className="field">
              <label>출발지 담당자</label>
              <input placeholder="보내는 분 성함" />
            </div>
          </>
        )}

        <div className="field">
          <label>물품 종류<span className="req">*</span></label>
          <input required placeholder="예) 서류, 소형 박스, 부품" />
        </div>
        <div className="field">
          <label>희망 차량<span className="req">*</span></label>
          <select required defaultValue="">
            <option value="" disabled>차량 선택</option>
            {vehicles.map((v) => (
              <option key={v.slug} value={v.slug}>{v.name}</option>
            ))}
            <option value="unsure">잘 모르겠어요 (상담 시 안내)</option>
          </select>
        </div>

        {!compact && (
          <div className="field">
            <label>물품 크기·무게</label>
            <input placeholder="예) A4 박스 1개, 5kg 이내" />
          </div>
        )}

        <div className="field">
          <label>픽업 희망시간<span className="req">*</span></label>
          <select required defaultValue="">
            <option value="" disabled>시간 선택</option>
            <option>가능한 한 빨리</option>
            <option>1~2시간 이내</option>
            <option>오늘 중</option>
            <option>날짜·시간 예약</option>
          </select>
        </div>

        {!compact && (
          <div className="field">
            <label>결제 방법</label>
            <select defaultValue="">
              <option value="" disabled>선택</option>
              <option>현금·계좌이체</option>
              <option>카드결제</option>
              <option>기업 월 정산</option>
            </select>
          </div>
        )}

        <div className="field">
          <label>고객 연락처<span className="req">*</span></label>
          <input required type="tel" placeholder="연락 가능한 휴대전화" />
        </div>

        {!compact && (
          <div className="field full">
            <label>기타 요청사항</label>
            <textarea placeholder="파손 주의, 도착지 연락 방법 등 요청사항을 적어주세요." />
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg">
          접수 요청하기
        </button>
        <a
          href={`tel:${company.phoneRaw}`}
          className="btn btn-accent btn-lg btn-call"
          aria-label={`전화로 즉시 예약 ${company.phone}`}
        >
          <PhoneIcon />
          <span>
            <b>전화 즉시 예약</b>
            <em>{company.phone}</em>
          </span>
        </a>
      </div>
      <p className="form-note">
        온라인 접수 후 상담원이 요금과 배차 가능 여부를 확인한 뒤 확정합니다. 급하시면
        <b> 전화 즉시 예약</b>으로 바로 상담·배차받으실 수 있습니다. 입력하신 정보는 배송
        상담 목적 외에는 사용되지 않습니다.
      </p>
    </form>
  );
}
