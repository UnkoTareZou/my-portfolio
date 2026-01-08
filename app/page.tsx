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

      {/* 熱意と感謝 */}
      <Link href="/research" className="area-research" style={{ textDecoration: 'none' }}>
        <div className="manga-panel" style={{ height: '100%', backgroundImage: 'url(/betaflash.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1 }}></div>
          <div className="research-content" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <p className="research-title-text">3.熱意と感謝</p>
            <p className="research-sub-text">クリップスタジオへの感謝</p>
            <div className="details-btn">DETAILS →</div>
          </div>
        </div>
      </Link>

   {/* 根性コマ：希望職種サイトへのリンクへ進化 */}
<Link href="/career" className="area-grit" style={{ textDecoration: 'none' }}>
  <div className="manga-panel branch-btn" style={{ transform: 'rotate(0.5deg)', backgroundColor: 'black', color: 'white', height: '100%' }}>
    <div className="grit-content">
      <div className="grit-sub">希望職種</div>
      <div className="grit-main">わたくしが<br/>PROJECT LEADER</div>
      <div className="details-btn" style={{ background: 'white', color: 'black' }}>GO TO GOAL →</div>
    </div>
  </div>
</Link>

      {/* 画像コマ2 */}
      <div className="manga-panel area-img2" style={{ transform: 'rotate(1.5deg)' }}>
        {getImg(1) && <img src={getImg(1)} alt="" className="panel-img" />}
      </div>

      {/* 自己紹介リンク */}
      <Link href="/about" className="area-btn1">
        <div className="manga-panel branch-btn">
          <div className="centered-content"><h3>1.自己紹介</h3></div>
        </div>
      </Link>

      {/* 制作物リンク */}
      <Link href="/projects" className="area-btn2">
        <div className="manga-panel branch-btn">
          <div className="centered-content"><h3>2.制作物一覧</h3></div>
        </div>
      </Link>
    </main>
  );
}

const globalStyles = `
  body { background-color: #f0f0f0 !important; margin: 0; font-family: 'Inter', sans-serif; }

  .manga-grid-container {
    display: grid;
    gap: 15px;
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
    min-height: 100vh;
  }

  /* --- PCレイアウト：王道のバランス型 --- */
  @media (min-width: 768px) {
    .manga-grid-container {
      height: 100vh;
      overflow: hidden;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(12, 1fr);
    }
    .area-title    { grid-area: 1 / 1 / 5 / 7; }
    .area-img1     { grid-area: 1 / 7 / 8 / 10; }
    .area-research { grid-area: 1 / 10 / 6 / 13; }
    .area-grit     { grid-area: 5 / 1 / 8 / 7; }
    .area-img2     { grid-area: 6 / 10 / 13 / 13; }
    .area-btn1     { grid-area: 8 / 1 / 13 / 5; }
    .area-btn2     { grid-area: 8 / 5 / 13 / 10; }
  }

  /* --- スマホレイアウト：縦読みマンガ --- */
  @media (max-width: 767px) {
    .manga-grid-container { grid-template-columns: 1fr; height: auto; }
    .manga-panel { min-height: 200px; transform: none !important; }
    .area-title { order: 1; }
    .area-img1 { order: 2; height: 300px; }
    .area-research { order: 3; }
    .area-grit { order: 4; }
    .area-img2 { order: 5; height: 300px; }
    .area-btn1 { order: 6; }
    .area-btn2 { order: 7; }
  }

  /* 共通スタイル */
  .manga-panel {
    background-color: white; border: 8px solid black; position: relative;
    overflow: hidden; box-shadow: 10px 10px 0px black; transition: 0.3s;
  }
  .manga-panel:hover { transform: scale(1.02) rotate(1deg); z-index: 10; box-shadow: 15px 15px 0px black; }

  .title-content { padding: 20px; display: flex; flex-direction: column; justify-content: center; height: 100%; }
  .main-title { font-size: clamp(1.5rem, 4vw, 3.5rem); font-weight: 900; font-style: italic; line-height: 0.9; margin: 0; }
  .badge { margin-top: 10px; font-weight: 900; background-color: black; color: white; padding: 5px 10px; font-size: 0.8rem; width: fit-content; }
  
  .panel-img { width: 100%; height: 100%; object-fit: cover; }
  
  .research-title-text { font-size: clamp(1.2rem, 2vw, 2.5rem); font-weight: 1000; color: white; text-shadow: 2px 2px 4px black; margin: 0; }
  .research-sub-text { font-size: 0.8rem; font-weight: 800; color: white; margin-top: 10px; }
  .details-btn { margin-top: 15px; background: black; color: white; padding: 5px 15px; font-size: 0.8rem; font-weight: 900; align-self: center; border-radius: 4px; }

  .grit-content { padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
  .grit-sub { font-size: 1rem; opacity: 0.8; }
  .grit-main { font-size: clamp(1.1rem, 2.5vw, 2rem); font-weight: 1000; color: #ff4d4d; margin-top: 10px; }

  .branch-btn { height: 100%; cursor: pointer; border: 10px solid black !important; text-decoration: none; color: black; }
  .branch-btn:hover { background-color: black !important; color: white !important; }
  .centered-content { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
  .centered-content h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 900; margin: 0; }

  .splash-screen {
    background-color: white; position: fixed; inset: 0; z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    transition: opacity 1200ms; pointer-events: none;
  }
  .splash-screen h1 { font-size: 8vw; font-weight: 900; font-style: italic; border-bottom: 15px solid black; }
`;