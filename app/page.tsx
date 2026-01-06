"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import comicImages from './comic-list.json';

export default function MangaRandomTopPage() {
  // --- 1. ロジック：画像リストとシャッフル ---
  const allImages = useMemo(() => (comicImages?.length > 0 ? comicImages : []), []);
  const [panelImages, setPanelImages] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (allImages.length === 0) return;

    const shuffle = () => setPanelImages([...allImages].sort(() => Math.random() - 0.5));
    shuffle(); // 初回実行

    const shuffleInterval = setInterval(shuffle, 3000);
    const fadeTimer = setTimeout(() => setIsFading(true), 1500);
    const removeTimer = setTimeout(() => setIsVisible(false), 3000);
    
    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [allImages]);

  // --- 2. スタイル：共通設定 ---
  const panelBaseStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '8px solid black',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '10px 10px 0px rgba(0,0,0,1)',
    transition: 'all 0.3s ease',
  };

  const getImg = (idx: number) => (panelImages[idx] ? `/comic/${panelImages[idx]}` : '');

  return (
    <main style={mainContainerStyle}>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* スプラッシュ画面 */}
      {isVisible && (
        <div style={{ ...splashStyle, opacity: isFading ? 0 : 1 }}>
          <h1 style={splashTitleStyle}>NAKANO PORTFOLIO</h1>
        </div>
      )}

      {/* --- メインコンテンツ：コマ割り --- */}
      
      {/* タイトルコマ */}
      <div className="manga-panel" style={{ ...panelBaseStyle, gridArea: '1 / 1 / 5 / 7', transform: 'rotate(-1deg)' }}>
        <div style={titleContentStyle}>
          <h2 style={titleTextStyle}>ENGINEER<br />RECONSTRUCTION</h2>
          <span style={badgeStyle}>TOKYO CITY UNIV. 2026.03</span>
        </div>
      </div>

      {/* 画像コマ1 */}
      <div className="manga-panel" style={{ ...panelBaseStyle, gridArea: '1 / 7 / 8 / 10', transform: 'rotate(1deg)' }}>
        {getImg(0) && <img src={getImg(0)} alt="" style={imgStyle} />}
      </div>

      {/* 研究紹介コマ */}
      <div className="manga-panel" style={{ ...panelBaseStyle, gridArea: '1 / 10 / 6 / 13', transform: 'rotate(-0.5deg)' }}>
        <div style={{ padding: '15px', fontWeight: '800' }}>
          <p style={{ borderBottom: '2px solid black' }}>研究：情報科学科</p>
          <p className="mt-2 text-xs">符号理論を用いたデータの最適化。</p>
        </div>
      </div>

      {/* 根性コマ */}
      <div className="manga-panel" style={{ ...panelBaseStyle, gridArea: '5 / 1 / 8 / 7', transform: 'rotate(0.5deg)', backgroundColor: 'black', color: 'white' }}>
        <div style={konjoContentStyle}>
  <div style={{ fontSize: '1.2vw', opacity: 0.8 }}>私にはガッツがあります</div>
  
  {/* ここで文字サイズをドカンと大きくする！ */}
  <div style={{ 
    fontSize: '2.2vw', 
    fontWeight: '1000', 
    color: '#ff4d4d', // 燃えるような赤
    lineHeight: '1.2',
    marginTop: '10px'
  }}>
    自力で学費<br />
    450万円を完納
  </div>
</div>
      </div>

      {/* 画像コマ2 */}
      <div className="manga-panel" style={{ ...panelBaseStyle, gridArea: '6 / 10 / 13 / 13', transform: 'rotate(1.5deg)' }}>
        {getImg(1) && <img src={getImg(1)} alt="" style={imgStyle} />}
      </div>

      {/* リンクボタン：自己紹介 */}
      <Link href="/about" style={{ gridArea: '8 / 1 / 13 / 5', textDecoration: 'none' }}>
        <div className="manga-panel branch-btn" style={panelBaseStyle}>
          <div className="centered-content"><h3>自己紹介</h3></div>
        </div>
      </Link>

      {/* リンクボタン：制作物 */}
      <Link href="/projects" style={{ gridArea: '8 / 5 / 13 / 10', textDecoration: 'none' }}>
        <div className="manga-panel branch-btn" style={panelBaseStyle}>
          <div className="centered-content"><h3>制作物一覧</h3></div>
        </div>
      </Link>
    </main>
  );
}

// --- 3. デザイン定義（外に出して見やすく！） ---

const mainContainerStyle: React.CSSProperties = {
  backgroundColor: '#f0f0f0',
  height: '100vh',
  overflow: 'hidden',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'repeat(12, 1fr)',
  gap: '15px',
  maxWidth: '1600px',
  margin: '0 auto',
  position: 'relative'
};

const splashStyle: React.CSSProperties = {
  backgroundColor: 'white',
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 1500ms'
};

const splashTitleStyle = { fontSize: '5vw', fontWeight: '900', fontStyle: 'italic', borderBottom: '20px solid black' };
const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover' };
const titleContentStyle: React.CSSProperties = { padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const titleTextStyle: React.CSSProperties = { fontSize: '3.5vw', fontWeight: '1000', fontStyle: 'italic', lineHeight: '0.9' };
const badgeStyle: React.CSSProperties = { marginTop: '10px', fontWeight: '900', backgroundColor: 'black', color: 'white', padding: '5px 10px', width: 'fit-content' };
const konjoContentStyle: React.CSSProperties = { padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' };

const globalStyles = `
  body { background-color: #f0f0f0 !important; overflow: hidden; }
  .manga-panel:hover { transform: scale(1.03) rotate(1deg); z-index: 50; box-shadow: 20px 20px 0px rgba(0,0,0,1) !important; }
  .branch-btn { height: 100%; cursor: pointer; border: 12px solid black !important; }
  .branch-btn:hover { background-color: black !important; color: white !important; }
  .centered-content { position: absolute; inset: 0; display: flex; alignItems: center; justifyContent: center; }
  .centered-content h3 { font-size: 2.5vw; fontWeight: 1000; }
`;