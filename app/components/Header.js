"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { company, primaryNav, ctaButtons } from "@/app/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label={`${company.name} 홈`}>
          <span className="logo-mark">B</span>
          <span>
            {company.name}
            <small>전국 퀵서비스</small>
          </span>
        </Link>

        <nav className="nav" aria-label="주요 메뉴">
          {primaryNav.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
              {item.children && (
                <div className="dropdown">
                  {item.children.map((c) => (
                    <Link href={c.href} key={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-cta">
          {ctaButtons.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className={`btn ${b.variant === "primary" ? "btn-accent" : "btn-outline"}`}
            >
              {b.label}
            </Link>
          ))}
          <button
            className="menu-toggle"
            aria-label="메뉴 열기"
            onClick={() => setOpen(true)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-overlay" onClick={() => setOpen(false)} />
        <div className="drawer-panel">
          <div className="drawer-head">
            <span className="logo">
              <span className="logo-mark">B</span>
              {company.name}
            </span>
            <button
              className="menu-toggle"
              aria-label="메뉴 닫기"
              onClick={() => setOpen(false)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          <div className="drawer-cta">
            <Link href="/order/" className="btn btn-accent" onClick={() => setOpen(false)}>
              바로 접수
            </Link>
            <Link href="/rider/apply/" className="btn btn-outline" onClick={() => setOpen(false)}>
              기사 지원
            </Link>
          </div>

          {primaryNav.map((item) => (
            <div className="drawer-group" key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className="drawer-sub">
                  {item.children.map((c) => (
                    <Link href={c.href} key={c.href} onClick={() => setOpen(false)}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
