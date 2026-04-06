import React from 'react'

export default function App() {
  const igUrl = "https://www.instagram.com/ck76888/";
  const lineUrl = "https://lin.ee/SFmihhUx";
  const qrUrl = "https://qr-official.line.me/gs/M_957ridwt_GW.png?oat_content=qr";

  const services = [
    {
      title: "每日內容整理",
      desc: "每日更新重點內容與簡易整理，幫你更快掌握當下值得注意的資訊。",
    },
    {
      title: "社群互動更新",
      desc: "透過社群交流與即時互動，補充更多觀察角度與整理脈絡。",
    },
    {
      title: "會員群交流",
      desc: "把資訊從看過提升到看懂，用交流幫助理解，而不是只接收內容。",
    },
    {
      title: "品牌觀點輸出",
      desc: "從內容、分析到整理方式，慢慢建立屬於自己的節奏與判斷邏輯。",
    },
  ];

  const dailyCards = [
    {
      title: "今日重點整理",
      body: "快速掌握當日更新內容，先看濃縮版重點，再決定是否深入查看完整內容。",
    },
    {
      title: "簡易分析更新",
      body: "用更直覺的方式理解資訊，不需要先面對過量內容，也能先抓到重點。",
    },
    {
      title: "社群同步內容",
      body: "網站、IG、社群與機器人互相串聯，讓更新不會散落在不同地方。",
    },
  ];

  const viewpoints = [
    "不是資訊太少，而是資訊太亂。",
    "不是缺方法，而是缺整理過的內容。",
    "先建立節奏，再建立自己的理解方式。",
  ];

  const feedbacks = [
    "「內容整理得很清楚，打開就知道先看哪裡。」",
    "「比起自己找一堆資訊，這種整理方式省時很多。」",
    "「每天先看簡易版，再去看完整內容，節奏很順。」",
  ];

  const faqs = [
    {
      q: "這個網站主要提供什麼？",
      a: "提供每日整理、簡易分析、品牌觀點、社群入口與工具連結，讓內容集中在同一個入口。",
    },
    {
      q: "新手適合看嗎？",
      a: "可以。整體內容會以重點整理、清楚排版與容易閱讀為主，方便快速上手。",
    },
    {
      q: "我要從哪裡開始？",
      a: "最簡單的方式是先看首頁內容，再追蹤 IG 或加入社群，從每日更新開始熟悉。",
    },
  ];

  return (
    <div className="page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">製作｜陳翔平</div>

            <h1 className="hero-title">
              AI 理性陪跑研究室
              <span>用內容、分析、系統化整理，建立屬於自己的節奏。</span>
            </h1>

            <p className="hero-text">
              這裡不是把大量資訊丟給你，而是把資訊整理成更容易理解的內容。
              從每日更新、簡易整理、社群互動到品牌觀點，讓你用更清楚的方式掌握重點。
            </p>

            <div className="hero-actions">
              <a href="#daily" className="btn btn-primary">查看今日整理</a>
              <a href={igUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                追蹤 IG 最新更新
              </a>
            </div>

            <div className="tag-row">
              <span className="tag">內容整理</span>
              <span className="tag">分析觀點</span>
              <span className="tag">社群交流</span>
              <span className="tag">品牌輸出</span>
            </div>

            <div className="hero-checks">
              <p>✔ 不是給你答案，而是讓你看懂脈絡</p>
              <p>✔ 先建立節奏，再建立自己的理解方式</p>
              <p>✔ 把混亂資訊，整理成能被理解的內容</p>
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
                <p className="join-label">官方入口</p>
                <h2>從 IG、社群與機器人開始</h2>
                <p>
                  想看更多內容、追蹤每日更新或加入交流，
                  可以先從我的 IG、社群與 LINE 機器人入口開始。
                </p>

                <div className="stack-actions">
                  <a href={igUrl} className="btn btn-primary small" target="_blank" rel="noreferrer">
                    前往 IG
                  </a>
                  <a href={lineUrl} className="btn btn-secondary small">
                    加入 LINE
                  </a>
                </div>
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
            <div className="stat-label">內容整理更新</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">社群</div>
            <div className="stat-label">即時互動交流</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">品牌</div>
            <div className="stat-label">觀點持續輸出</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>你可以在這裡得到什麼</h2>
            <p>
              網站不是只有一個連結，而是把你的內容、更新、觀點與入口集中起來，
              讓第一次看到的人也能快速理解你在做什麼。
            </p>
          </div>

          <div className="feature-grid">
            {services.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="daily">
        <div className="container">
          <div className="section-heading">
            <p className="mini-label">Daily Update</p>
            <h2>今日整理 / 每日更新</h2>
            <p>
              這一區可以每天更新一段簡易內容，讓進站的人第一眼就能看到最新重點。
            </p>
          </div>

          <div className="feature-grid">
            {dailyCards.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <div className="daily-note">
            <p className="daily-date">今日簡易更新</p>
            <p>
              今天建議先從整體內容去看，再回到細部重點。先理解整理邏輯，
              再看進一步內容，通常會比直接面對大量資訊更有效率。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <p className="mini-label">Brand View</p>
            <h2>品牌觀點</h2>
            <div className="steps">
              {viewpoints.map((item, index) => (
                <div className="step-card" key={item}>
                  <div className="step-number">{index + 1}</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-card">
            <p className="mini-label">Core Idea</p>
            <h3>這不是單純資訊頁，而是你的節奏入口</h3>
            <blockquote>
              「多數人不是不努力，而是被太多零散內容打亂節奏。整理過的內容，才真正有價值。」
            </blockquote>
            <p className="note">
              你的品牌價值，不只是發布內容，而是幫別人更快理解重點。
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="feedback">
        <div className="container narrow">
          <div className="section-heading centered">
            <h2>回饋 / 使用者感受</h2>
            <p>這一區可以放文字回饋、對話截圖或社群互動截圖。</p>
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
            <h2>想看更多內容或加入交流，從我的 IG / 社群開始。</h2>
            <p>
              想持續追蹤每日整理、品牌觀點、社群更新與後續內容，
              可以先從 IG 開始，再進一步加入 LINE 與社群入口。
            </p>

            <div className="cta-actions">
              <a href={igUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                前往 IG
              </a>
              <a href={lineUrl} className="btn btn-secondary">
                加入 LINE
              </a>
            </div>

            <p className="footer-note">
              AI 理性陪跑研究室｜製作：陳翔平
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © 2026 AI 理性陪跑研究室｜製作：陳翔平
      </footer>
    </div>
  );
}
