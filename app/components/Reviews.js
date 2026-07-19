import { reviews, reviewStats } from "@/app/data/reviews";

function Stars({ rating, size = 16 }) {
  return (
    <span className="stars" style={{ fontSize: size }} aria-label={`5점 만점에 ${rating}점`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? "on" : "off"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Reviews({ limit }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section className="section soft" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">REVIEWS</span>
          <h2>고객 후기</h2>
          <div className="review-summary">
            <Stars rating={Math.round(reviewStats.average)} size={22} />
            <b>{reviewStats.average.toFixed(1)}</b>
            <span>/ 5 · 실제 이용 후기 {reviewStats.count}건</span>
          </div>
        </div>
        <div className="grid grid-3 review-grid">
          {list.map((r, i) => (
            <div className="card review-card" key={i}>
              <div className="review-head">
                <Stars rating={r.rating} />
                <span className="review-date">{r.date}</span>
              </div>
              <p className="review-body">{r.body}</p>
              <div className="review-author">
                <span className="review-avatar">{r.author.charAt(0)}</span>
                <span>
                  {r.author} · {r.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
