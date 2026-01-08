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
      
      {baan && (
        <div className="baan-overlay-container" style={{ left: baan.x, top: baan.y }}>
          <img src="/baan.png" alt="バァーン！！" className="baan-img" />
        </div>
      )}

      <nav className="fixed-nav">
        <Link href="/">
          <div className="back-top-btn">← TOP</div>
        </Link>
      </nav>

      <div className="manga-page">
        
        {/* --- 01. IDENTITY：動画と支える決意 --- */}
        <section className="manga-panel area-identity">
          <div className="panel-header-badge">01. IDENTITY</div>
          <h1 className="main-passion-title">自己紹介VIDEO</h1>
          <div className="video-wrapper">
            <iframe 
              width="100%" height="100%" 
              src="https://www.youtube.com/embed/m-nYoPJ5HSE" 
              title="Identity Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="panel-message-footer">
            私の原動力について
          </div>
        </section>

        {/* --- 02. GRIT：不屈の記録（/gutsへ） --- */}
        <section className="manga-panel area-grit link-panel" onClick={handleGutsClick}>
          <div className="panel-header-badge">02. GRIT</div>
          <div className="guts-button-panel">
            <div className="guts-inner-text">
              <p>学費450万を完済した、その「先」へ</p>
              <h3>「不屈の記録」を見る</h3>
              <span className="click-me-badge">CLICK TO OPEN</span>
            </div>
            <div className="guts-bg-image" style={{ backgroundImage: 'url(/guts.png)' }}></div>
          </div>
        </section>

        {/* --- 03. INTELLECT：大学での学び（/studyへ） --- */}
        <Link href="/study" className="area-intellect" style={{ textDecoration: 'none', color: 'inherit' }}>
          <section className="manga-panel link-panel">
            <div className="panel-header-badge">03. INTELLECT</div>
            <div className="intellect-content">
              <h2 className="sub-panel-title">RESEARCH</h2>
              <p className="lab-name">東京都市大学 応用数理研究室</p>
              <div className="code-snippet-box">
                C言語：符号理論の実装
                スループット最大化への挑戦
              </div>
              <p className="intellect-desc">
                週6のバイトと並行し、技術への執着も一切緩めませんでした。
              </p>
              <div className="intellect-link-label">
                大学での研究詳細を見る →
              </div>
            </div>
          </section>
        </Link>

        {/* --- 04. MISSION：クリエイターへの貢献を誓う --- */}
        <section className="manga-panel area-mission">
          <div className="panel-header-badge" style={{ background: '#e63946' }}>MY MISSION</div>
          <div className="mission-content">
            <h2 className="mission-title">TO BE THE SUPPORT FOR ALL CREATORS.</h2>
            <div className="mission-quote">
              <p>
                かつて過酷な環境にいた私を救ってくれたのは、貴社の製品が生み出した創作の世界でした。
                今度は私が、世界中のクリエイターが1秒でも長く、何の不安もなく筆を動かし続けられる環境を守りたい。
              
                6年間の接客で培った粘り強さ も、情報科学で学んだ技術も 、すべてはクリエイターの皆様の笑顔のために捧げます。
                インフラ・テスト・CS、どのような役割であっても、それが創作を支えることに繋がるなら、私にとってこれ以上の喜びはありません。
              </p>
            </div>
            <div className="mission-footer">
              <p className="mission-sub">自力で完納した学費、奨学金。この数字は私の「誰かを支え抜く覚悟」の重さです。</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

const aboutStyles = " .about-manga-container { background-color: #f0f0f0; min-height: 100vh; padding: 80px 20px; background-image: radial-gradient(#ccc 1.5px, transparent 1.5px); background-size: 25px 25px; } .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; } .back-top-btn { background: white; border: 4px solid black; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px black; cursor: pointer; } .manga-page { max-width: 1100px; margin: 0 auto; display: grid; gap: 25px; grid-template-columns: repeat(12, 1fr); } .manga-panel { background: white; border: 8px solid black; box-shadow: 15px 15px 0px black; position: relative; overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); } .link-panel:hover { transform: scale(1.02); cursor: pointer; box-shadow: 20px 20px 0px black; } .panel-header-badge { position: absolute; top: 0; left: 0; background: black; color: white; padding: 5px 15px; font-weight: 900; z-index: 10; font-size: 0.8rem; } @media (min-width: 900px) { .area-identity { grid-area: 1 / 1 / 7 / 13; transform: rotate(-0.5deg); } .area-grit { grid-area: 7 / 1 / 13 / 7; transform: rotate(0.5deg); } .area-intellect { grid-area: 7 / 7 / 13 / 13; transform: rotate(-0.3deg); } .area-mission { grid-area: 13 / 1 / 17 / 13; transform: rotate(0.2deg); } } @media (max-width: 899px) { .manga-page { display: flex; flex-direction: column; } .manga-panel { transform: none !important; margin-bottom: 40px; } } .main-passion-title { font-size: clamp(2.5rem, 8vw, 5.5rem); font-weight: 1000; text-align: center; margin: 50px 0 30px; font-style: italic; letter-spacing: -3px; line-height: 1; } .video-wrapper { width: 100%; aspect-ratio: 16/9; border-top: 6px solid black; border-bottom: 6px solid black; background: #000; } .panel-message-footer { padding: 20px; font-weight: 900; text-align: center; font-style: italic; font-size: 1.1rem; color: #000; background: #fff; } .guts-button-panel { flex: 1; position: relative; min-height: 250px; display: flex; align-items: center; justify-content: center; } .guts-inner-text { position: relative; z-index: 5; text-align: center; color: white; background: rgba(0,0,0,0.7); padding: 30px; border: 4px solid white; margin: 20px; } .click-me-badge { background: #e63946; padding: 5px 15px; font-weight: 900; display: inline-block; } .guts-bg-image { position: absolute; inset: 0; background-size: cover; background-position: center; transition: 0.5s; } .intellect-content { padding: 40px 30px; flex: 1; display: flex; flex-direction: column; justify-content: center; } .sub-panel-title { font-size: 2rem; font-weight: 1000; border-bottom: 6px solid black; display: inline-block; margin-bottom: 15px; } .code-snippet-box { background: #000; color: #0f0; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 0.85rem; margin: 15px 0; } .intellect-link-label { margin-top: 10px; font-weight: 900; text-align: right; color: #e63946; font-style: italic; } .area-mission { background: #000; color: #fff; padding: 60px 40px; text-align: center; } .mission-title { font-size: clamp(2rem, 6vw, 4rem); font-weight: 1000; line-height: 0.9; margin-bottom: 20px; font-style: italic; } .mission-sub { font-weight: 800; font-style: italic; color: #aaa; margin-top: 15px; } .baan-overlay-container { position: fixed; z-index: 100000; transform: translate(-50%, -50%); pointer-events: none; } .baan-img { width: 50vw; max-width: 700px; animation: baan-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; } @keyframes baan-pop { 0% { transform: scale(0.1) rotate(-10deg); opacity: 0; } 30% { transform: scale(1.2) rotate(5deg); opacity: 1; } 100% { transform: scale(1) rotate(0deg); opacity: 1; } } ";