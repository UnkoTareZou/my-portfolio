"use client";

import React from 'react';
import Link from 'next/link';

export default function StudyDetailPage() {
  return (
    <main className="study-container">
      <style dangerouslySetInnerHTML={{ __html: studyStyles }} />
      
      <nav className="fixed-nav">
        <Link href="/about">
          <div className="back-btn">← ABOUTに戻る</div>
        </Link>
      </nav>

      <div className="content-wrapper">
        <header className="page-header">
          <p className="label">ACADEMIC & RESEARCH</p>
          <h1 className="title">研究内容と学問的背景</h1>
          <p className="author">東京都市大学 情報工学部 情報科学科 | 中野 恭輔</p>
        </header>

        {/* 1. 卒業研究の要約 */}
        <section className="research-panel">
          <div className="panel-inner">
            <h2 className="section-title">卒業研究：通信の効率化とエラー低減</h2>
            <div className="text-content">
              <p>
                卒業研究では、雑音のある通信路において、データの復号にかかる「計算回数」や「誤り確率」を低減させるためのアルゴリズムを研究しました。
              </p>
              <p>
                具体的には、受信したデータのうち雑音が加わり信頼性が低くなったシンボルを、数学的に「未知数（消失）」として扱います。
                ここで、計算負荷と精度のバランスを取るために、通信路の状態（SN比）に応じて二通りの復号手法を最適に使い分ける提案手法を実装しました。
              </p>
              <p>
                自作したC言語によるシミュレーションの結果、従来手法と比較して計算回数を約6%削減（94%まで低減）し、再送要求の回数も抑制できることを客観的なデータで証明しました。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 情報工学の基盤 */}
        <section className="research-panel">
          <div className="panel-inner">
            <h2 className="section-title">情報工学における広範な基礎知識</h2>
            <div className="text-content">
              <p>
                大学の講義を通じ、ソフトウェアからハードウェア、理論まで一貫した情報系の基礎を網羅的に学習してきました。
              </p>
              <div className="course-grid">
                <div className="course-cat">
                  <h4>プログラミング・開発</h4>
                  <ul>
                    <li>プログラミング(1)〜(4)（C言語・Java）</li>
                    <li>オブジェクト指向プログラミング</li>
                    <li>アルゴリズムとデータ構造</li>
                    <li>ソフトウェア工学</li>
                  </ul>
                </div>
                <div className="course-cat">
                  <h4>システム・基盤理論</h4>
                  <ul>
                    <li>オペレーティングシステム</li>
                    <li>コンピュータシステム・構成</li>
                    <li>コンピュータネットワーク</li>
                    <li>情報理論・符号理論</li>
                  </ul>
                </div>
                <div className="course-cat">
                  <h4>応用・先端技術</h4>
                  <ul>
                    <li>人工知能(AI)</li>
                    <li>並列分散処理</li>
                    <li>画像処理・CG</li>
                    <li>デジタル信号処理</li>
                  </ul>
                </div>
              </div>
              <p className="course-summary">
                これらの講義を通じて得た知識を土台に、ただコードを書く物理的な作業だけでなく、システムの裏側にある数理的な最適化や理論回景を考慮した開発を行うことができます。
              </p>
            </div>
          </div>
        </section>

        {/* 3. 結論 */}
        <section className="research-panel dark-section">
          <div className="panel-inner">
            <h2 className="section-title">結論</h2>
            <p className="conclusion-text">
              「泥臭く手を動かす実装力」と「理論に基づいた客観的分析」。
              この両輪を回しながら、貴社の製品開発において技術的な課題を一つずつ突破していく覚悟です。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

const studyStyles = `
  .study-container { background: #fdfdfd; color: #1a1a1a; min-height: 100vh; padding: 60px 20px; font-family: sans-serif; }
  .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; }
  .back-btn { background: #fff; border: 3px solid #000; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px #000; cursor: pointer; }

  .content-wrapper { max-width: 1000px; margin: 0 auto; }
  .page-header { margin-bottom: 40px; border-bottom: 8px solid #000; padding-bottom: 15px; }
  .label { font-weight: 800; color: #888; font-size: 0.8rem; }
  .title { font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 900; line-height: 1.2; }
  .author { font-weight: 700; color: #444; margin-top: 10px; }

  .research-panel { background: #fff; border: 3px solid #000; margin-bottom: 30px; box-shadow: 10px 10px 0px #000; }
  .panel-inner { padding: 30px; }
  .section-title { font-size: 1.1rem; font-weight: 900; background: #000; color: #fff; display: inline-block; padding: 4px 15px; margin-bottom: 20px; }

  .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
  .course-cat h4 { border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 10px; font-weight: 900; }
  .course-cat ul { list-style: square; padding-left: 20px; }
  .course-cat li { font-size: 0.85rem; margin-bottom: 5px; font-weight: 600; }

  .dark-section { background: #1a1a1a; color: #fff; border: none; }
  .dark-section .section-title { background: #fff; color: #1a1a1a; }
  .conclusion-text { font-size: 1.05rem; line-height: 1.8; font-weight: 600; }

  p { line-height: 1.8; margin-bottom: 15px; font-weight: 500; font-size: 1rem; }
  .course-summary { font-size: 0.9rem; font-style: italic; color: #666; margin-top: 20px; }
  
  @media (max-width: 600px) { .panel-inner { padding: 20px; } }
`;