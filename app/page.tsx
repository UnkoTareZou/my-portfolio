"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopPage() {
  const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.png', '/bg4.jpg', '/bg5.png', '/bg6.png'];
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 1500);
    const removeTimer = setTimeout(() => setIsVisible(false), 3000);
    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearInterval(slideTimer);
    };
  }, [images.length]);

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '80px' }}>
      
      {/* --- 1. 背景画像 (一番奥) --- */}
<img 
  src="/bg_top.jpg" // publicフォルダ内の画像名に書き換えてください
  alt=""
  style={{ 
    position: 'fixed', 
    inset: 0, 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    zIndex: 0  // 一番奥
  }}
/>

{/* --- 2. 背景を白っぽくしてボタンやモニターを見やすくする膜 --- */}
<div 
  style={{ 
    position: 'fixed', 
    inset: 0, 
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // 0.7を小さくすると画像が濃くなります
    zIndex: 1  // 画像の上、コンテンツの下
  }} 
/>

      <style dangerouslySetInnerHTML={{ __html: `body { background-color: white !important; }`}} />

      {/* --- A. 導入スプラッシュ画面 --- */}
      {isVisible && (
        <div style={{ backgroundColor: 'white', color: 'black', position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 1500ms ease-in-out', opacity: isFading ? 0 : 1, pointerEvents: isFading ? 'none' : 'auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', fontWeight: '900', textAlign: 'center', letterSpacing: '0.2em' }}>
            中野恭輔<br />ポートフォリオ
          </h1>
        </div>
      )}

      {/* --- B. 3Dモニターエリア（右側に配置） --- */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        zIndex: 10, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', // ★ flex-start から flex-end に変更して右寄せ
        paddingRight: '10%',       // ★ paddingLeft から paddingRight に変更
        paddingBottom: '100px', 
        pointerEvents: 'none' 
      }}>
        <div style={{ perspective: '1200px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          
          <div 
            style={{ 
              position: 'relative',
              backgroundColor: '#1a1a1a', 
              padding: '12px',
              borderRadius: '25px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)', 
              transform: 'rotateX(15deg) rotateY(-35deg) rotateZ(2deg) scale(0.7)',
              border: '4px solid #000',
              transformStyle: 'preserve-3d' 
            }}
          >
            <div style={{ position: 'relative', width: '70vw', maxWidth: '900px', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '15px', backgroundColor: 'black', border: '2px solid #333', transformStyle: 'preserve-3d' }}>
              {images.map((src, index) => (
                <img key={`${src}-${index}`} src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 2000ms ease-in-out', opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 1 : 0, filter: 'brightness(0.95)', transform: 'translateZ(1px)' }} />
              ))}
              <div style={{ position: 'absolute', inset: 0, zIndex: 5, background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)', pointerEvents: 'none', transform: 'translateZ(2px)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* --- C. ボタン部分（若干左に配置のまま） --- */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', gap: '25px', width: '100%', justifyContent: 'flex-start', paddingLeft: '15%', paddingBottom: '20px' }}>
        <Link href="/about">
          <div className="hover:scale-105 transition-transform" style={{ backgroundColor: 'white', height: '70px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '100px', border: '5px solid black', cursor: 'pointer', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '1000', color: 'black', letterSpacing: '0.3em' }}>自己紹介</h2>
          </div>
        </Link>
        <Link href="/projects">
          <div className="hover:scale-105 transition-transform" style={{ backgroundColor: 'white', height: '70px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '100px', border: '5px solid black', cursor: 'pointer', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '1000', color: 'black', letterSpacing: '0.1em' }}>制作物</h2>
          </div>
        </Link>
      </div>
    </main>
  );


}