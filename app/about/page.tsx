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
    // 0.6秒の溜めの後にガッツ専用ページへ！
    setTimeout(() => {
      router.push('/guts');
    }, 600);
  };

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black', position: 'relative', fontFamily: 'sans-serif' }}>
      
      {/* バァーン！！演出用画像 */}
      {baan && (
        <img 
          src="/baan.png" 
          alt="バァーン！！"
          style={{
            position: 'fixed', left: baan.x, top: baan.y,
            transform: 'translate(-50%, -50%)', zIndex: 100000,
            width: '40vw', pointerEvents: 'none',
            animation: 'baan-pop 0.6s ease-out forwards'
          }}
        />
      )}

      {/* ナビゲーション */}
      <nav style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 100 }}>
        <Link href="/">
          <div style={{ backgroundColor: 'white', border: '4px solid black', padding: '10px 20px', cursor: 'pointer', fontWeight: '900', boxShadow: '5px 5px 0px black' }}>
            ← TOPに戻る
          </div>
        </Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* --- 1. IDENTITY: セルシスへの誓い --- */}
        <section style={{ marginBottom: '100px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: '900', marginBottom: '30px', fontStyle: 'italic' }}>
            <span style={{ backgroundColor: 'black', color: 'white', padding: '0 15px' }}>LOVE CELSYS</span>
          </h1>
          <div style={{ width: '100%', aspectRatio: '16/9', border: '8px solid black', boxShadow: '15px 15px 0px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/m-nYoPJ5HSE" title="Identity Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </section>

        {/* --- 2. GRIT & REALITY: ここにガッツのコマを配置！ --- */}
        <section style={{ marginBottom: '120px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', backgroundColor: 'black', color: 'white', padding: '10px 30px', transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: '40px' }}>
            GRIT & REALITY
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* 🚀 ガッツ・ボタンコマ (guts.png) */}
            <div 
              onClick={handleGutsClick}
              style={{ 
                border: '8px solid black', aspectRatio: '1/1', cursor: 'pointer',
                backgroundImage: 'url(/guts.png)', backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden', boxShadow: '15px 15px 0px #000'
              }}
              className="guts-manga-panel"
            >
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>450万を完済した、その「先」へ</div>
                <div style={{ fontSize: '2rem', fontWeight: '1000', marginTop: '10px' }}>詳細な記録を<br />見る</div>
                <div style={{ marginTop: '15px', backgroundColor: 'red', padding: '5px 15px', fontWeight: '900' }}>CRICK HERE</div>
              </div>
            </div>

            {/* 概要テキストカード */}
            <div style={{ padding: '30px', border: '6px solid black', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '15px', borderBottom: '4px solid black' }}>数字が語る、私の根性。</h3>
              <p style={{ fontSize: '1rem', fontWeight: '700', lineHeight: '1.8' }}>
                3年間の独学、学費450万円の自力完納、そして自由が丘での全国12位の戦績。
                この先のストーリーは私が絶対に折れない「心の強さ」の証明であり、
                私が背負う多額の奨学金は、未来への投資であり、逃げ出さない「覚悟」の証明です。
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. RESEARCH & INTELLECT --- */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', borderBottom: '8px solid black', display: 'inline-block', marginBottom: '40px' }}>
            RESEARCH & INTELLECT
          </h2>
          <div style={{ padding: '30px', border: '4px solid black', borderRadius: '20px' }}>
            <p style={{ lineHeight: '1.8', fontWeight: '700' }}>
              応用数理研究室にて、符号理論を用いたスループット改善を研究。
              C言語で独自の復号アルゴリズムを実装し、1万回のシミュレーションでその有効性を証明しました。
            </p>
          </div>
        </section>

        {/* --- 4. THE MISSION --- */}
        <section style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{ padding: '50px', border: '10px solid black', backgroundColor: '#000', color: '#fff' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '1000' }}>ANY ROLE. ANY MISSION.</h2>
            <p style={{ marginTop: '20px', fontWeight: '800' }}>およそ自分の力でできることなら、職種を問わず何でもやります。</p>
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .guts-manga-panel:hover { transform: scale(1.02) rotate(1deg); }
        @keyframes baan-pop {
          0% { transform: translate(-50%, -50%) scale(0.1) rotate(-10deg); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.3) rotate(5deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
        }
      `}} />
    </main>
  );
}