// Cloudflare Pages Function — 퀵서비스 접수를 텔레그램 봇으로 전송
// 라우트: POST /api/order
// 필요한 환경변수(Cloudflare Pages > Settings > Environment variables):
//   TELEGRAM_BOT_TOKEN  : @BotFather에서 발급받은 봇 토큰
//   TELEGRAM_CHAT_ID    : 메시지를 받을 채팅 ID (개인 또는 그룹)
// 토큰은 서버(Functions)에서만 사용되며 브라우저에 노출되지 않습니다.

const FIELD_LABELS = {
  formType: "접수 유형",
  origin: "출발지",
  destination: "도착지",
  waypoint: "경유지",
  senderName: "출발지 담당자",
  itemType: "물품 종류",
  vehicle: "희망 차량",
  itemSize: "물품 크기·무게",
  pickupTime: "픽업 희망시간",
  payment: "결제 방법",
  contact: "고객 연락처",
  note: "요청사항",
  source: "접수 페이지",
};

const FIELD_ORDER = [
  "origin",
  "destination",
  "waypoint",
  "senderName",
  "itemType",
  "vehicle",
  "itemSize",
  "pickupTime",
  "payment",
  "contact",
  "note",
  "source",
];

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function esc(s) {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

function kstNow() {
  // Workers 런타임은 UTC 기준. KST(+9h)로 보정해 표기.
  const t = new Date(Date.now() + 9 * 60 * 60 * 1000);
  return t.toISOString().replace("T", " ").slice(0, 16) + " (KST)";
}

// 봇 토큰 형태(예: 5270773696:AAH...)인지 판별
const TOKEN_RE = /^\d{6,}:[A-Za-z0-9_-]{30,}$/;

// 환경변수에서 토큰/챗ID를 유연하게 찾음
//  1) 표준 방식: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID
//  2) 호환 방식: 변수 '이름'에 봇 토큰, '값'에 챗ID를 넣은 경우 자동 인식
function resolveCreds(env) {
  let token = env.TELEGRAM_BOT_TOKEN || env.BOT_TOKEN || "";
  let chatId = env.TELEGRAM_CHAT_ID || env.CHAT_ID || "";
  if (token && chatId) return { token, chatId };

  for (const [k, v] of Object.entries(env || {})) {
    if (typeof v !== "string") continue;
    // 이름이 토큰 형태면 → 이름=토큰, 값=챗ID
    if (TOKEN_RE.test(k)) {
      token = token || k;
      chatId = chatId || v;
      break;
    }
    // 값이 토큰 형태면 → 값=토큰, 이름=챗ID (반대로 넣은 다른 경우)
    if (TOKEN_RE.test(v)) {
      token = token || v;
      chatId = chatId || k;
      break;
    }
  }
  return { token, chatId };
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const { token, chatId } = resolveCreds(env);

  if (!token || !chatId) {
    // 비밀값은 노출하지 않고, 인식 여부와 개수만 진단용으로 전달
    const keys = Object.keys(env || {});
    return json(
      {
        ok: false,
        error: "not_configured",
        detail: `TOKEN=${token ? "O" : "X"} CHAT_ID=${chatId ? "O" : "X"} envCount=${keys.length}`,
      },
      503
    );
  }

  let data = {};
  try {
    data = await request.json();
  } catch (_) {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  const title = data.formType ? esc(data.formType) : "퀵서비스 접수";
  const lines = [`🛵 <b>새 ${title}</b>`, ""];
  for (const key of FIELD_ORDER) {
    const val = data[key];
    if (val !== undefined && val !== null && String(val).trim() !== "") {
      lines.push(`<b>${FIELD_LABELS[key] || key}</b>: ${esc(val)}`);
    }
  }
  lines.push("", `🕒 ${kstNow()}`);
  const text = lines.join("\n");

  let tg;
  try {
    tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (err) {
    return json({ ok: false, error: "network", detail: String(err) }, 502);
  }

  if (!tg.ok) {
    const detail = await tg.text().catch(() => "");
    return json({ ok: false, error: "telegram_failed", detail }, 502);
  }

  return json({ ok: true });
}

// 헬스체크용 (선택)
export async function onRequestGet() {
  return json({ ok: true, service: "order-webhook" });
}
