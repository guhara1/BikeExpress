"use client";

import { useState } from "react";
import { vehicles, company } from "@/app/data/site";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function OrderForm({ compact = false }) {
  // status: "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    payload.formType = "퀵서비스 접수";
    payload.source =
      typeof window !== "undefined" ? window.location.pathname : "";

    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        setErrMsg("");
        setStatus("sent");
      } else {
        const detail = body.detail ? ": " + body.detail : "";
        setErrMsg(`[${res.status}] ${body.error || "unknown"}${detail}`);
        setStatus("error");
      }
    } catch (err) {
      setErrMsg("network: " + String(err && err.message ? err.message : err));
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px" }}>✓</div>
        <h3>접수 요청이 전달되었습니다</h3>
        <p>
          상담원이 요금과 배차 가능 여부를 확인한 뒤 입력하신 연락처로 안내드립니다.
          급하신 경우 고객센터로 전화 주시면 더 빠르게 도와드립니다.
        </p>
        <button className="btn btn-outline" onClick={() => setStatus("idle")}>
          다시 접수하기
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="form-card text-center">
        <div className="card-icon" style={{ margin: "0 auto 14px", background: "var(--accent-soft)", color: "var(--accent-dark)", borderColor: "#ffe0c2" }}>!</div>
        <h3>접수 전송에 실패했습니다</h3>
        <p>
          일시적인 오류로 접수가 전달되지 않았습니다. 번거로우시겠지만 아래 번호로
          전화 주시면 바로 상담·배차를 도와드립니다.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 16 }}>
          <a href={`tel:${company.phoneRaw}`} className="btn btn-accent">
            <PhoneIcon /> {company.phone} 전화 접수
          </a>
          <button className="btn btn-outline" onClick={() => setStatus("idle")}>
            다시 시도
          </button>
        </div>
        {errMsg && (
          <p style={{ marginTop: 14, fontSize: 12, color: "var(--muted)", wordBreak: "break-all" }}>
            진단 코드: {errMsg}
          </p>
        )}
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label>출발지 주소<span className="req">*</span></label>
          <input name="origin" required placeholder="예) 서울 강남구 테헤란로 000" />
        </div>
        <div className="field">
          <label>도착지 주소<span className="req">*</span></label>
          <input name="destination" required placeholder="예) 경기 성남시 분당구 000" />
        </div>

        {!compact && (
          <>
            <div className="field">
              <label>경유지</label>
              <input name="waypoint" placeholder="경유지가 있으면 입력" />
            </div>
            <div className="field">
              <label>출발지 담당자</label>
              <input name="senderName" placeholder="보내는 분 성함" />
            </div>
          </>
        )}

        <div className="field">
          <label>물품 종류<span className="req">*</span></label>
          <input name="itemType" required placeholder="예) 서류, 소형 박스, 부품" />
        </div>
        <div className="field">
          <label>희망 차량<span className="req">*</span></label>
          <select name="vehicle" required defaultValue="">
            <option value="" disabled>차량 선택</option>
            {vehicles.map((v) => (
              <option key={v.slug} value={v.name}>{v.name}</option>
            ))}
            <option value="잘 모르겠어요 (상담 시 안내)">잘 모르겠어요 (상담 시 안내)</option>
          </select>
        </div>

        {!compact && (
          <div className="field">
            <label>물품 크기·무게</label>
            <input name="itemSize" placeholder="예) A4 박스 1개, 5kg 이내" />
          </div>
        )}

        <div className="field">
          <label>픽업 희망시간<span className="req">*</span></label>
          <select name="pickupTime" required defaultValue="">
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
            <select name="payment" defaultValue="">
              <option value="" disabled>선택</option>
              <option>현금·계좌이체</option>
              <option>카드결제</option>
              <option>기업 월 정산</option>
            </select>
          </div>
        )}

        <div className="field">
          <label>고객 연락처<span className="req">*</span></label>
          <input name="contact" required type="tel" placeholder="연락 가능한 휴대전화" />
        </div>

        {!compact && (
          <div className="field full">
            <label>기타 요청사항</label>
            <textarea name="note" placeholder="파손 주의, 도착지 연락 방법 등 요청사항을 적어주세요." />
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
          {sending ? "전송 중…" : "접수 요청하기"}
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
