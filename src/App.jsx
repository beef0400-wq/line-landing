import React from 'react'

export default function App() {
  const lineUrl = "https://lin.ee/SFmihhUx";
  const qrUrl = "https://qr-official.line.me/gs/M_957ridwt_GW.png?oat_content=qr";

  const features = [
    {
      title: "每日重點整理",
      desc: "把資料整理成清楚易讀的內容，讓你更快掌握當日重點與變化。",
    },
    {
      title: "趨勢觀察更省時",
      desc: "不需要自己慢慢找資料，直接查看整理後的重點資訊。",
    },
    {
      title: "加入 LINE 即可查看",
      desc: "不需額外下載其他 App，加入後就能直接在 LINE 內查看內容。",
    },
  ];

  const reasons = [
    "不用自己整理資料，重點已經幫你濃縮好",
    "手機就能快速查看，操作直覺、上手簡單",
    "適合想要快速掌握每日重點的人",
  ];

  const feedbacks = [
    "「介面很清楚，資料整理很快，重點一看就懂。」",
    "「不用自己找半天，直接看重點真的方便很多。」",
    "「加入之後每天都會看，省下不少時間。」",
  ];

  const proofImages = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
  ];

  const faqs = [
    {
      q: "需要下載其他 App 嗎？",
      a: "不需要，直接透過 LINE 就能查看內容與使用功能。",
    },
    {
      q: "內容多久更新一次？",
      a: "頁面與 LINE 內容會持續更新，方便你查看最新整理資訊。",
    },
    {
      q: "適合新手嗎？",
      a: "可以，整體內容是以簡單、好懂、容易上手為主。",
    },
  ];

  return (
    <div className="page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">AI理性陪跑研究室</div>

            <h1 className="hero-title">
              今彩539 / 賓果賓果
              <span>每日資料整理與趨勢觀察入口</span>
            </h1>

            <p className="hero-text">
              每日整理重點資訊，快速掌握資料變化與趨勢內容。
              用更直覺的方式查看整理結果，幫你省下大量自己查找與整理的時間。
            </p>

            <div className="hero-actions">
              <a href={lineUrl} className="btn btn-primary">免費加入 LINE 查看最新整理</a>
              <a href="#feedback" className="btn btn-secondary">先看使用者回饋</a>
            </div>

            <div className="tag-row">
              <span className="tag">每日更新整理</span>
              <span className="tag">手機瀏覽友善</span>
              <span className="tag">加入 LINE 即可查看</span>
            </div>

            <div className="hero-checks">
              <p>✔ 每日持續整理重點內容</p>
              <p>✔ 使用流程簡單直覺</p>
              <p>✔ 想快速掌握資訊的人都適合</p>
            </div>
          </div>

          <div className="card shell">
            <div className="window-dots">
              <span className="dot rose"></span>
              <span className="dot amber"></span>
              <span className="dot emerald"></span>
            </div>

            <div className="join-card">
              <div className="join-copy">
                <p className="join-label">立即加入</p>
                <h2>掃描 QR 或直接點擊加入 LINE</h2>
                <p>
                  進入 LINE 後即可查看每日整理、功能說明、重點資訊與最新更新內容。
                </p>
                <a href={lineUrl} className="btn btn-primary small">打開 LINE 加入</a>
              </div>

              <div className="qr-wrap">
                <img src={qrUrl} alt="LINE QR Code" className="qr-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-number">每日</div>
            <div className="stat-label">持續整理更新</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">快速</div>
            <div className="stat-label">查看重點內容</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">LINE</div>
            <div className="stat-label">直接加入使用</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>為什麼很多人會先加入 LINE 看內容</h2>
            <p>
              真正有價值的不是資訊很多，而是有人幫你把重點整理好。
              先看懂，再決定怎麼使用，會比自己慢慢找更有效率。
            </p>
          </div>

          <div className="feature-grid">
            {features.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-grid">
          <div>
            <p className="mini-label">Why Join</p>
            <h2>加入後你能得到什麼</h2>

            <div className="steps">
              {reasons.map((item, index) => (
                <div className="step-card" key={item}>
                  <div className="step-number">{index + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-card">
            <p className="mini-label">Daily Update</p>
            <h3>每天整理，快速查看</h3>
            <blockquote>
              「不用自己一直切資料、找重點，打開 LINE 就能先看到整理好的內容。」
            </blockquote>
            <p className="note">
              內容重點是讓使用者更快理解資訊，不需要花大量時間自己整理。
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="feedback">
        <div className="container narrow">
          <div className="section-heading centered">
            <h2>使用者回饋 / 對話分享</h2>
            <p>以下為部分使用體驗回饋，幫助新加入的人更快了解頁面價值。</p>
          </div>

          <div className="feedback-grid">
            {feedbacks.map((item, index) => (
              <div className="feedback-card" key={index}>
                <div className="feedback-badge">回饋 {index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading centered">
            <h2>內容展示 / 圖片區塊</h2>
            <p>這一區之後可以換成你的聊天截圖、成果截圖或品牌素材。</p>
          </div>

          <div className="proof-grid">
            {proofImages.map((img, index) => (
              <div className="proof-card" key={index}>
                <img src={img} alt={`proof-${index + 1}`} className="proof-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="faq">
        <div className="container narrow">
          <div className="section-heading centered">
            <h2>常見問題</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bottom">
        <div className="container">
          <div className="cta-panel">
            <h2>現在就加入 LINE 查看最新整理</h2>
            <p>
              每日重點資訊都會持續更新。想第一時間查看內容，
              最簡單的方式就是直接加入 LINE。
            </p>

            <div className="cta-actions">
              <a href={lineUrl} className="btn btn-primary">立即加入 LINE</a>
              <div className="qr-mini-wrap">
                <img src={qrUrl} alt="LINE QR Code" className="qr-mini" />
              </div>
            </div>

            <p className="footer-note">
              本頁內容以資訊整理、趨勢觀察與使用說明為主，請理性看待分析內容。
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">© 2026 AI理性陪跑研究室</footer>
    </div>
  );
}
