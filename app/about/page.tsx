"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const router = useRouter();
  const [baan, setBaan] = useState<{ x: number; y: number } | null>(null);

  // ガッツボタン専用のハンドラー
  const handleGutsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setBaan({ x: e.clientX, y: e.clientY });
    setTimeout(() => {
      router.push('/guts');
    }, 600);
  };

  return (
    <main className="about-manga-container">
      <style dangerouslySetInnerHTML={{ __html: aboutStyles }} />
      
      {/* バァーン！！演出 */}
      {baan && (
        <img 
          src="/baan.png" 
          alt="バァーン！！"
          className="baan-overlay"
          style={{ left: baan.x, top: baan.y }}
        />
      )}

      {/* 固定ナビ */}
      <nav className="fixed-nav">
        <Link href="/">
          <div className="back-top-btn">← TOP</div>
        </Link>
      </nav>

      {/* --- マンガ・グリッド・レイアウト --- */}
      <div className="manga-page">
        
        {/* 【大ゴマ】 1. LOVE CELSYS (一番デカく！) */}
        <section className="manga-panel area-identity">
          <div className="panel-header-badge">IDENTITY</div>
          <h1 className="main-passion-title">LOVE CELSYS</h1>
          <div className="video-wrapper">
            <iframe 
              width="100%" height="100%" 
              src="https://www.youtube.com/embed/m-nYoPJ5HSE" 
              title="Identity Video" frameBorder="0" allowFullScreen
            ></iframe>
          </div>
          <div className="panel-caption">「描く」という情熱を、誰よりも理解し、支えたい。</div>
        </section>

        {/* 【中ゴマ】 2. GRIT & REALITY (ガッツボタン) */}
        <section className="manga-panel area-grit" onClick={handleGutsClick}>
          <div className="panel-header-badge">GRIT</div>
          <div className="guts-button-panel">
            <div className="guts-inner-text">
              <p>450万を完済した、その「先」へ</p>
              <h3>詳細な記録を見る</h3>
              <span className="click-me-badge">CLICK HERE</span>
            </div>
            {/* ここに guts.png が背景として入る */}
            <div className="guts-bg-image" style={{ backgroundImage: 'url(/guts.png)' }}></div>
          </div>
        </section>

        {/* 【中ゴマ】 3. RESEARCH & INTELLECT */}
        <section className="manga-panel area-intellect">
          <div className="panel-header-badge">INTELLECT</div>
          <div className="intellect-content">
            <h2 className="sub-panel-title">RESEARCH</h2>
            <p>応用数理研究室：符号理論</p>
            <div className="code-snippet-box">
              C言語による復号アルゴリズムの実装<br />
              1万回の試行とスループットの追求
            </div>
            <p className="intellect-desc">
              学費完納と並行し、技術への執着も一切緩めませんでした。
            </p>
          </div>
        </section>

        {/* 【横長コマ】 4. MISSION (締め) */}
        <section className="manga-panel area-mission">
          <div className="mission-content">
            <h2 className="mission-title">ANY ROLE. ANY MISSION.</h2>
            <p>「このポートフォリオを制作する過程で、私が本当にやりたいことは『コードを書くこと自体』ではなく、
              『技術を用いて誰かの創作を支えること』だと確信しました。
              そのため、当初のエンジニア志望に固執せず、テスト・CS等、
              クリエイターの皆様に最も近い場所で、
              自分のエンジニアリング知識とコミュニケーション能力を役立てたいと考えています。 
              目的のためなら、どのような現場でも最速で結果を出します。」</p>
            <p className="mission-sub">多額の奨学金は、私の「逃げない覚悟」の証明です。</p>
          </div>
        </section>

      </div>
    </main>
  );
}

// --- マンガ風グリッドCSS ---
const aboutStyles = `
  .about-manga-container {
    background-color: #f0f0f0;
    min-height: 100vh;
    padding: 60px 20px;
    background-image: radial-gradient(#ccc 1.5px, transparent 1.5px);
    background-size: 25px 25px;
  }

  .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; }
  .back-top-btn { background: white; border: 4px solid black; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px black; cursor: pointer; }

  .manga-page {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    /* PCでのグリッド割り当て */
    grid-template-columns: repeat(12, 1fr);
  }

  /* パネル共通 */
  .manga-panel {
    background: white;
    border: 8px solid black;
    box-shadow: 15px 15px 0px black;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s;
  }
  .manga-panel:hover { transform: scale(1.01); }

  .panel-header-badge {
    position: absolute; top: 0; left: 0; background: black; color: white;
    padding: 5px 15px; font-weight: 900; z-index: 10;
  }

  /* 各エリアの配置 (PC) */
  @media (min-width: 900px) {
    .area-identity { grid-area: 1 / 1 / 7 / 13; transform: rotate(-0.5deg); } /* 大ゴマ */
    .area-grit { grid-area: 7 / 1 / 12 / 6; transform: rotate(0.5deg); }
    .area-intellect { grid-area: 7 / 6 / 12 / 13; transform: rotate(-0.3deg); }
    .area-mission { grid-area: 12 / 1 / 15 / 13; transform: rotate(0.2deg); }
  }

  /* スマホレイアウト */
  @media (max-width: 899px) {
    .manga-page { display: flex; flex-direction: column; }
    .manga-panel { transform: none !important; margin-bottom: 30px; }
    .main-passion-title { font-size: 2.5rem !important; }
  }

  /* 内部コンテンツ用スタイル */
  .main-passion-title { 
    font-size: clamp(3rem, 8vw, 6rem); font-weight: 1000; text-align: center; 
    margin: 40px 0 20px; font-style: italic; letter-spacing: -2px;
  }
  .video-wrapper { width: 100%; aspect-ratio: 16/9; border-top: 4px solid black; border-bottom: 4px solid black; }
  .panel-caption { padding: 15px; font-weight: 900; text-align: right; font-style: italic; }

  /* ガッツボタン・パネル */
  .guts-button-panel { flex: 1; position: relative; cursor: pointer; display: flex; align-items: center; justify-content: center; }
  .guts-inner-text { z-index: 5; text-align: center; color: white; background: rgba(0,0,0,0.6); padding: 20px; border: 4px solid white; }
  .guts-inner-text h3 { font-size: 2rem; font-weight: 1000; margin: 10px 0; }
  .click-me-badge { background: red; padding: 5px 15px; font-weight: 900; }
  .guts-bg-image { position: absolute; inset: 0; background-size: cover; background-position: center; transition: 0.3s; }
  .area-grit:hover .guts-bg-image { transform: scale(1.1); }

  /* 研究パネル */
  .intellect-content { padding: 40px 20px; }
  .sub-panel-title { font-size: 2rem; font-weight: 900; border-bottom: 6px solid black; display: inline-block; margin-bottom: 20px; }
  .code-snippet-box { background: #eee; padding: 15px; border-left: 8px solid black; font-family: monospace; font-weight: 700; margin: 20px 0; }

  /* ミッションパネル */
  .area-mission { background: black; color: white; padding: 40px; text-align: center; }
  .mission-title { font-size: 2.5rem; font-weight: 1000; margin-bottom: 10px; }
  .mission-sub { opacity: 0.8; font-size: 0.9rem; margin-top: 10px; }

  /* バァーン演出 */
  .baan-overlay {
    position: fixed; z-index: 100000; width: 40vw; pointer-events: none;
    transform: translate(-50%, -50%); animation: baan-pop 0.6s ease-out forwards;
  }
  @keyframes baan-pop {
    0% { transform: translate(-50%, -50%) scale(0.1) rotate(-10deg); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3) rotate(5deg); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
  }
`;