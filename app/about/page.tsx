"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main 
      /* フォールバックとして背景を白に固定。これで画像がなくても黒くならない */
      style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', color: 'black', position: 'relative', overflowX: 'hidden' }}
    >
      
      {/* --- 1. 背景画像 --- */}
      <img 
        src="/bg_blue.jpg" // ← ここを public フォルダ内の画像名に必ず書き換えてください（例：/bg.jpg）
        alt=""
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />

      {/* --- 2. 白いフィルター（画像の上、文字の下に敷く） --- */}
      <div 
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(2px)', zIndex: 1 }} 
      />
      
      {/* --- 3. コンテンツ（ここから zIndex: 2 にして一番手前に出す） --- */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', padding: '80px 20px 40px' }}>
        
        {/* 戻るボタン */}
        <Link href="/">
          <div style={{ position: 'fixed', top: '20px', left: '20px', backgroundColor: 'white', border: '4px solid black', borderRadius: '50px', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
            ← 戻る
          </div>
        </Link>

        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: '900', marginBottom: '40px', borderBottom: '8px solid black', display: 'inline-block' }}>
          ABOUT ME
        </h1>

        {/* 動画セクション */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', backgroundColor: 'black', color: 'white', display: 'inline-block', padding: '5px 15px' }}>
            INTRODUCTION MOVIE
          </h2>
          
          <div style={{ width: '100%', height: '450px', backgroundColor: 'white', border: '4px solid black', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WBA5aS7pHUE" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* テキストセクション */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '30px', border: '4px solid black', borderRadius: '15px' }}>
            <h3 style={{ fontWeight: '900', fontSize: '1.5rem', marginBottom: '15px', borderBottom: '4px solid black', display: 'inline-block' }}>MY STORY</h3>
            <p style={{ lineHeight: '1.8', fontWeight: '500' }}>
              大学の学費を自ら工面するなど、目標達成のために粘り強く努力する姿勢を大切にしています。
            </p>
          </div>
          <div style={{ backgroundColor: 'rgba(240, 240, 240, 0.9)', padding: '30px', borderLeft: '10px solid black', borderTop: '4px solid black', borderBottom: '4px solid black', borderRight: '4px solid black', borderRadius: '15px' }}>
            <h3 style={{ fontWeight: '900', fontSize: '1.5rem', marginBottom: '15px' }}>ASPIRATION</h3>
            <p style={{ lineHeight: '1.8', fontWeight: '700' }}>
              クリエイターを支える技術者を目指しています。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}