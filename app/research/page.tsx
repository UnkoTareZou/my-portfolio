"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useColor } from '../ColorContext';

export default function ResearchPassionPage() {
  const { makeColorful, resetColor, isColorful } = useColor();
  const [isClicking, setIsClicking] = useState(false);
  const [showKachi, setShowKachi] = useState(false); // 「カチッ」画像用の状態

  // カチッ！という手応えと画像を演出するためのハンドラー
  const handleTrigger = () => {
    setIsClicking(true);
    setShowKachi(true); // 画像を表示！
    
    // 0.4秒（少し長めにして画像を見せる）溜めてから世界を変えるぜ！
    setTimeout(() => {
      makeColorful();
      setIsClicking(false);
      setShowKachi(false); // 世界が変わると同時に画像は消す
    }, 400);
  };

  return (
    <main style={containerStyle}>
      <style dangerouslySetInnerHTML={{ __html: pageCSS }} />

      {/* 「カチッ！！」描き文字演出 */}
      {showKachi && (
        <div className="kachi-overlay">
          <img src="/kachi.png" alt="カチッ！！" className="kachi-img" />
        </div>
      )}

      <nav style={{ marginBottom: '30px', position: 'relative', zIndex: 10 }}>
        <Link href="/">
          <div className="back-btn">← TOPに戻る</div>
        </Link>
      </nav>

      <div className="wrapper">
        <header className="page-header">
          <p className="label">MESSAGE FOR CELSYS</p>
          <h1 className="title">熱意と感謝</h1>
        </header>

        {/* 1. プレゼン動画 */}
        <section className="video-area">
          <div className="video-intro-text">
            <p>
              ポートフォリオの最後に、私の想いを直接お伝えしたく動画を添えさせていただきました。
              貴社が掲げるクリエイタージャーニーという理念を、一人のユーザーとして、そして一人の技術者志望として私なりに解釈し、具体的な形に落とし込んだものです。
              緊張のあまりお聞き苦しい点も多々ございます。大変申し訳ございません。しかしながら
              学費を自力で完納した粘り強さと、貴社で未来を創りたいという熱意だけは、どの志望者にも負けない本物です。飾らない言葉として受け取っていただければ幸いです。
            </p>
            <p className="volume-warning">※音量にご注意ください</p>
          </div>

          <div className="video-box">
            <iframe 
              width="100%" height="100%" 
              src="https://www.youtube.com/embed/bE3eSfCN4tY"
              title="Identity Video" frameBorder="0" allowFullScreen
            ></iframe>
          </div>
          <p className="caption">▲ 貴社が掲げる理念についてのプレゼンテーション動画</p>
        </section>

        {/* 2. 魂のメッセージ */}
        <section className="message-area">
          <div className="text-card">
            <p>私は貴社製品に人生を救われました。<br />創作（特に漫画）は私の人生そのものです。</p>
            
            <p>
              幼少期より過酷な環境にいた私は、クリップスタジオ（またはコミックスタジオ）で制作された<br />
              漫画やイラスト、二次創作がなければ、笑えない日々の連続でした。
            </p>

            <p>しかし今、世界中のクリエイター様の作品のおかげで幸せです。</p>

            <p className="highlight-text">
              灰色だったはずの私から見える世界は、色を持って輝いています。
            </p>

            <p>
              それは紛れもなく貴社製品や、情熱をもったクリエイターのおかげだと思います。<br />
              私はこの情熱のパレットが何億人の笑顔をのせているか、貴社が一人一人に与える影響の大きさを知っています。
            </p>

            <p>
              今も貴社の方がこのメッセージを読んでくださっていると考えると、尊敬の念を感じると同時に、その先のユーザー様の熱意がヒシヒシと伝わります。
            </p>

            <p>
              動画やポートフォリオでもアピールさせていただきました通り、<br />
              <strong>忍耐力、自己解決能力、やり通す力、体力、ガッツ、</strong>そして<strong>クリエイターを尊敬する心</strong>には確固たる自信があります。
            </p>

            <p>
              私の人生を支えてくださった、クリエイターの皆様や貴社社員様のために、私の情報工学の知識、接客技術、上記内的要因を最大限活かしていく所存です。
            </p>

            <p className="emphasis-box">
              全てのクリエイターへの恩返しと、これから共に作るカラフルな世界の黒子として、貴社で活躍したいと考えております。
            </p>

            <p>長文失礼いたしました。</p>

            <p>
              私の動画やポートフォリオが言語を超えたコミュニケーションツールとなっていればこれ以上の幸せはありません。
            </p>

            <p className="closing-call">どうか一度お会いいただけたら、幸いです。</p>

            {/* --- 運命の分岐点：ボタン --- */}
            <div className="button-zone">
              {!isColorful ? (
                <button 
                  className={`colorful-trigger ${isClicking ? 'is-active' : ''}`} 
                  onClick={handleTrigger}
                >
                  世界をカラフルにする
                </button>
              ) : (
                <button className="reset-trigger" onClick={resetColor}>
                  モノクロに戻す（確認用）
                </button>
              )}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

const containerStyle: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  minHeight: '100vh',
  padding: '40px 20px',
  color: '#333',
  fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif',
};

const pageCSS = `
  .wrapper { max-width: 850px; margin: 0 auto; position: relative; z-index: 2; }
  .back-btn { display: inline-block; border: 2px solid black; padding: 10px 20px; font-weight: bold; background: white; cursor: pointer; transition: 0.2s; }
  .back-btn:hover { background: black; color: white; }
  
  .page-header { border-bottom: 5px solid black; margin-bottom: 40px; }
  .label { font-weight: bold; color: #888; font-size: 0.9rem; margin-bottom: 5px; }
  .title { font-size: 2.5rem; font-weight: 900; margin: 0; }
  
  .video-area { margin-bottom: 50px; }
  .video-intro-text { 
    font-size: 1rem; line-height: 1.8; font-weight: 500; color: #444; 
    margin-bottom: 20px; background: #fff; padding: 20px; border-left: 5px solid black;
  }
  .volume-warning { color: #e63946; font-weight: 900; margin-top: 10px; font-size: 0.9rem; }
  .video-box { aspect-ratio: 16/9; border: 4px solid black; box-shadow: 10px 10px 0px black; background: #000; }
  .caption { font-size: 0.8rem; color: #666; margin-top: 10px; text-align: center; font-weight: bold; }

  .message-area { margin-bottom: 60px; }
  .text-card { 
    background: white; border: 1px solid #ddd; padding: 50px; line-height: 2; font-size: 1.15rem; 
    box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 1s ease;
  }
  .text-card p { margin-bottom: 25px; }

  .highlight-text { 
    font-size: 1.5rem; font-weight: bold; color: #e63946; 
    border-left: 8px solid #e63946; padding-left: 20px; margin: 40px 0 !important; 
  }
  .emphasis-box { 
    background: #f0f0f0; padding: 25px; border: 2px dashed black; 
    font-weight: bold; margin: 30px 0; 
  }
  .closing-call { text-align: center; font-size: 1.6rem; font-weight: 900; margin-top: 40px; color: #000; }

  /* 覚醒ボタン！ */
  .button-zone { text-align: center; margin-top: 80px; position: relative; }
  .colorful-trigger {
    background: #000; color: #fff; border: none; padding: 25px 60px;
    font-size: 1.8rem; font-weight: 1000; cursor: pointer;
    box-shadow: 0 10px 0px #444; transition: transform 0.1s, box-shadow 0.1s;
    outline: none;
  }
  
  .colorful-trigger:active, .colorful-trigger.is-active {
    transform: translateY(8px);
    box-shadow: 0 2px 0px #444;
  }
  .colorful-trigger:hover { background: #ff4d4d; }

  /* --- 「カチッ！！」オーバーレイ演出 --- */
  .kachi-overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    pointer-events: none;
  }
  .kachi-img {
    width: 60vw;
    max-width: 600px;
    animation: kachi-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }

  @keyframes kachi-pop {
    0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
    50% { transform: scale(1.1) rotate(5deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  
  .reset-trigger { background: #eee; border: 1px solid #ccc; padding: 10px 20px; cursor: pointer; font-size: 0.8rem; margin-top: 20px; opacity: 0.6; }
`;