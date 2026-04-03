import React from 'react'
export default function App() {
  const lineUrl = "https://lin.ee/SFmihhUx";
  const qrUrl = "https://qr-official.line.me/gs/M_957ridwt_GW.png?oat_content=qr";

  const features = [
    {
      title: "資料整理更直覺",
      desc: "把複雜資訊整理成清楚易讀的內容，讓你快速掌握重點。",
    },
    {
      title: "趨勢觀察更方便",
      desc: "透過歷史資料、變化節奏與整理邏輯，提供清楚的資訊參考。",
    },
    {
      title: "加入 LINE 即可使用",
      desc: "不需額外下載其他 App，點擊加入後就能快速查看內容。",
    },
  ];

  const steps = [
    "點擊按鈕或掃描 QR Code 加入 LINE",
    "進入聊天視窗後查看功能說明與最新資訊",
    "依照需求瀏覽整理內容與分析重點",
  ];

  const faqs = [
    {
      q: "需要下載其他 App 嗎？",
      a: "不需要，直接透過 LINE 就能查看內容與使用功能。",
    },
    {
      q: "適合新手嗎？",
      a: "可以，頁面與內容設計都以簡單清楚為主，方便快速理解。",
    },
    {
      q: "主要提供什麼？",
      a: "以資料整理、趨勢觀察、重點彙整與使用說明為主。",
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
              <span>資料整理與趨勢分析入口</span>
            </h1>
            <p className="hero-text">
              以清楚、乾淨、好理解為核心，把資料整理、趨勢觀察與重點資訊集中在 LINE 裡，
              讓使用者可以更快找到需要的內容。
            </p>

            <div className="hero-actions">
              <a href={lineUrl} className="btn btn-primary">立即加入 LINE</a>
              <a href="#faq" className="btn btn-secondary">先看常見問題</a>
            </div>

            <div className="tag-row">
              <span className="tag">手機瀏覽友善</span>
              <span className="tag">純 LINE 導流</span>
              <span className="tag">正式品牌版面</span>
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
                <p className="join-label">加入方式</p>
                <h2>掃描 QR 或直接點擊加入</h2>
                <p>
                  進入 LINE 後即可查看資料整理、使用說明與最新資訊，流程簡單、操作直覺。
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>這個頁面能幫你什麼</h2>
            <p>
              讓訪客在最短時間內看懂你的服務定位，並且用最直接的方式加入 LINE，
              減少跳出與猶豫。
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
            <p className="mini-label">3 Steps</p>
            <h2>三步驟快速開始</h2>

            <div className="steps">
              {steps.map((step, index) => (
                <div className="step-card" key={step}>
                  <div className="step-number">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-card">
            <p className="mini-label">User Feedback</p>
            <h3>使用者回饋</h3>
            <blockquote>
              「介面很清楚，資料整理速度快，加入後能很快理解重點，使用起來很順。」
            </blockquote>
            <p className="note">
              你之後也可以把自己的聊天截圖、回饋圖片或品牌素材補進這一區，
              整體信任感會更完整。
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
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
            <h2>現在就加入 LINE 開始使用</h2>
            <p>
              如果你想快速查看整理內容與最新資訊，直接加入 LINE 就是最簡單的開始方式。
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
