"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import comicImages from './comic-list.json';

export default function MangaRandomTopPage() {
  const allImages = useMemo(() => (comicImages?.length > 0 ? comicImages : []), []);
  const [panelImages, setPanelImages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (allImages.length === 0) return;
    const shuffle = () => setPanelImages([...allImages].sort(() => Math.random() - 0.5));
    shuffle();
    const shuffleInterval = setInterval(shuffle, 3000);
    const fadeTimer = setTimeout(() => setIsFading(true), 1500);
    const removeTimer = setTimeout(() => setIsVisible(false), 3000);
    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [allImages]);

  const getImg = (idx: number) => (panelImages[idx] ? `/comic/${panelImages[idx]}` : '');

  return (
    <main className="manga-grid-container">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* スプラッシュ画面 */}
      {isVisible && (
        <div className="splash-screen" style={{ opacity: isFading ? 0 : 1 }}>
          <h1>NAKANO PORTFOLIO</h1>
        </div>
      )}

      {/* タイトルコマ */}
      <div className="manga-panel area-title" style={{ transform: 'rotate(-1deg)' }}>
        <div className="title-content">
          <h2 className="main-title">ENGINEER<br />RECONSTRUCTION</h2>
          <span className="badge">TOKYO CITY UNIV. 2026.03</span>
        </div>
      </div>

      {/* 画像コマ1 */}
      <div className="manga-panel area-img1" style={{ transform: 'rotate(1deg)' }}>
        {getImg(0) && <img src={getImg(0)} alt="" className="panel-img" />}
      </div>

      {/* 研究紹介コマ */}
      <div className="manga-panel area-research" style={{ transform: 'rotate(-0.5deg)' }}>
        <div className="research-content">
          <p className="research-label">研究：情報科学科</p>
          <p className="research-text">符号理論を用いたデータの最適化。</p>
        </div>
      </div>

      {/* 根性コマ */}
      <div className="manga-panel area-grit" style={{ transform: 'rotate(0.5deg)', backgroundColor: 'black', color: 'white' }}>
        <div className="grit-content">
          <div className="grit-sub">私にはガッツがあります</div>
          <div className="grit-main">
            自力で学費<br />
            450万円を完納
          </div>
        </div>
      </div>

      {/* 画像コマ2 */}
      <div className="manga-panel area-img2" style={{ transform: 'rotate(1.5deg)' }}>
        {getImg(1) && <img src={getImg(1)} alt="" className="panel-img" />}
      </div>

      {/* リンク：自己紹介 */}
      <Link href="/about" className="area-btn1">
        <div className="manga-panel branch-btn">
          <div className="centered-content"><h3>自己紹介</h3></div>
        </div>
      </Link>

      {/* リンク：制作物 */}
      <Link href="/projects" className="area-btn2">
        <div className="manga-panel branch-btn">
          <div className="centered-content"><h3>制作物一覧</h3></div>
        </div>
      </Link>
    </main>
  );
}

const globalStyles = `
  /* 基本設定 */
  body { 
    background-color: #f0f0f0 !important; 
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  /* グリッドコンテナの設定 */
  .manga-grid-container {
    display: grid;
    gap: 15px;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
    min-height: 100vh;
  }

  /* PCレイアウト (768px以上) */
  @media (min-width: 768px) {
    .manga-grid-container {
      height: 100vh;
      overflow: hidden;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, 1fr);
    }
    .area-title { grid-area: 1 / 1 / 5 / 7; }
    .area-img1 { grid-area: 1 / 7 / 8 / 10; }
    .area-research { grid-area: 1 / 10 / 6 / 13; }
    .area-grit { grid-area: 5 / 1 / 8 / 7; }
    .area-img2 { grid-area: 6 / 10 / 13 / 13; }
    .area-btn1 { grid-area: 8 / 1 / 13 / 5; }
    .area-btn2 { grid-area: 8 / 5 / 13 / 10; }
  }

  /* スマホレイアウト (767px以下) - 縦読みマンガ形式 */
  @media (max-width: 767px) {
    .manga-grid-container {
      grid-template-columns: 1fr;
      height: auto;
      overflow: visible;
    }
    .manga-panel {
      min-height: 200px;
      transform: none !important; /* スマホでは斜めを解除して読みやすく */
    }
    .area-title { order: 1; min-height: 250px; }
    .area-img1 { order: 2; height: 300px; }
    .area-research { order: 3; }
    .area-grit { order: 4; min-height: 200px; }
    .area-img2 { order: 5; height: 300px; }
    .area-btn1 { order: 6; }
    .area-btn2 { order: 7; }
  }

  /* パネル共通スタイル */
  .manga-panel {
    background-color: white;
    border: 8px solid black;
    position: relative;
    overflow: hidden;
    box-shadow: 10px 10px 0px rgba(0,0,0,1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .manga-panel:hover {
    transform: scale(1.02) rotate(1deg);
    z-index: 10;
    box-shadow: 15px 15px 0px rgba(0,0,0,1);
  }

  /* コンテンツ内スタイル */
  .title-content { padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
  .main-title { font-size: clamp(1.5rem, 4vw, 3.5rem); font-weight: 900; font-style: italic; line-height: 0.9; margin: 0; }
  .badge { margin-top: 10px; font-weight: 900; background-color: black; color: white; padding: 5px 10px; width: fit-content; font-size: 0.8rem; }
  
  .panel-img { width: 100%; height: 100%; object-fit: cover; }
  
  .research-content { padding: 15px; font-weight: 800; }
  .research-label { border-bottom: 2px solid black; margin: 0; padding-bottom: 5px; }
  .research-text { margin-top: 8px; font-size: 0.8rem; }

  .grit-content { padding: 20px; display: flex; flex-direction: column; justify-content: center; height: 100%; }
  .grit-sub { font-size: 1rem; opacity: 0.8; }
  .grit-main { font-size: clamp(1.2rem, 3vw, 2.2rem); font-weight: 1000; color: #ff4d4d; line-height: 1.2; margin-top: 10px; }

  .branch-btn { height: 100%; cursor: pointer; border: 10px solid black !important; min-height: 120px; text-decoration: none; color: black; }
  .branch-btn:hover { background-color: black !important; color: white !important; }
  .centered-content { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .centered-content h3 { font-size: clamp(1.2rem, 2.5vw, 2rem); font-weight: 900; margin: 0; }

  /* スプラッシュ */
  .splash-screen {
    background-color: white;
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1500ms;
    pointer-events: none;
  }
  .splash-screen h1 { font-size: 8vw; font-weight: 900; font-style: italic; border-bottom: 15px solid black; margin: 0; }
`;