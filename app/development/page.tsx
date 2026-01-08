"use client";

import React from 'react';
import Link from 'next/link';

export default function DevelopmentDeepDive() {
  return (
    <main className="dev-container">
      <style dangerouslySetInnerHTML={{ __html: devStyles }} />
      
      <nav className="fixed-nav">
        <Link href="/projects">
          <div className="back-btn">← PROJECTSへ戻る</div>
        </Link>
      </nav>

      <article className="content-wrapper">
        <header className="page-header">
          <p className="kicker">PHILOSOPHY x ACADEMIC x AI COLLABORATION</p>
          <h1 className="main-title">Reverse Making System 開発思想と技術解剖</h1>
          <div className="meta-info">
            <span>東京都市大学 情報工学部 情報科学科</span>
            <span>中野 恭輔</span>
          </div>
        </header>

        {/* 1. 開発の狙い */}
        <section className="panel">
          <h2 className="panel-title">1. 開発の狙い：芸術という言語を解読する</h2>
          <div className="text-box vision-text">
            <p className="mb-6 leading-loose">
              私はイラストをはじめとする芸術は、言語を超えた意思の伝達方法であり、究極のコミュニケーションツールであると考えます。
              その塗り方や描き方を理解することは、言語における語彙や慣用句などの表現方法を覚えることと同義です。
            </p>
            <p className="mb-6 leading-loose">
              将来的に、タイムラプスが公開されていない作品からでも制作工程を完全に把握できるコーチング技術を確立したい。
              それによって一人でも多くのイラストレーターの卵を孵化させることが私の願いです。
             クリエイターが自身の好きに熱中できるようなツールのどのような形でもお手伝いなどができればと考えております。
            </p>
          </div>
        </section>

        {/* 2. 自力とAIの境界線 */}
        <section className="panel">
          <h2 className="panel-title">2. 自力の土台とAIとの共創プロセス</h2>
          <div className="role-grid">
            <div className="role-card self">
              <h3>My Foundation (自力)</h3>
              <ul className="role-list">
                <li>コンセプト設計: イラストを言語として捉える哲学の構築</li>
                <li>レイヤー分離ロジック: 卒業研究の符号理論を応用した平坦化アルゴリズム</li>
                <li>画像処理の基礎: 輝度計算や行列演算の基本実装経験</li>
                <li>不屈の実装力: 6年間の現場経験と学費完納で培った粘り強さ</li>
              </ul>
            </div>
            <div className="role-card ai">
              <h3>AI Collaboration (学び)</h3>
              <ul className="role-list">
                <li>高度な数理習得: ラプラシアンカーネルの数学的意味の学習</li>
                <li>実装の洗練: 2次元畳み込み演算の最適化アドバイス</li>
                <li>技術移植: PythonからJavaScriptへの変換支援</li>
              </ul>
            </div>
          </div>
          <div className="note-box mt-6">
            <p className="font-bold text-sm leading-relaxed">
              大学で学んだ行列演算や信号処理の基礎知識があったからこそ、AIが提示する数理モデルの本質を即座に理解できました。
              基礎という武器を持っていたからこそ、AIを最高のメンターとして使いこなせたのだと確信しています。
            </p>
          </div>
        </section>

        {/* 3. ソースコード */}
        <section className="panel">
          <h2 className="panel-title">3. 実装の記録：logic.py</h2>
          <p className="desc mb-4 font-bold text-sm">
            本システムの核心です。線画を全工程に合成し、薄い色から順に平坦化を繰り返し、最後にハイライトを乗せることで、イラストレーターの思考プロセスを逆算します。
          </p>
          <div className="code-container">
            <div className="code-header font-mono">logic.py</div>
            <pre className="code-view">
{`import numpy as np
from PIL import Image

def process_reverse_making(input_path):
    img_pil = Image.open(input_path).convert('RGBA')
    img_np = np.array(img_pil).astype(float)
    gray = 0.299*img_np[:,:,0] + 0.587*img_np[:,:,1] + 0.114*img_np[:,:,2]

    # STEP 01: 線画抽出 (AIと共同学習)
    kernel = np.array([[0, 1, 0], [1, -4, 1], [0, 1, 0]])
    edge = convolution_process(gray, kernel)
    line_norm = (255 - np.clip(edge * 3, 0, 255)) / 255.0

    # STEP 02-06: 段階的な色の積み上げ
    mask_light = gray > 120 
    avg_color = np.mean(img_np[mask_light], axis=0)

    thresholds = [240, 210, 170, 130, 90]
    for i, T in enumerate(thresholds):
        current_layer = np.full_like(img_np, avg_color)
        mask_drawn = (gray >= T) & (gray < 240)
        current_layer[mask_drawn] = img_np[mask_drawn]
        
        # 線画を常に合成し視認性を確保
        combined = current_layer * line_norm[:,:,None]
        save_image(combined, f"step0{i+2}_line.png")

    # STEP 07: 完成
    save_image(img_np * line_norm[:,:,None], "step07_final.png")`}
            </pre>
          </div>
        </section>

        {/* 4. ギャラリー */}
        <section className="panel">
          <h2 className="panel-title">4. 解析成果：7-Steps Process</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <p className="label">ORIGINAL</p>
              <img src="/input.png" alt="Input" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 01: LINE</p>
              <img src="/step01_line.png" alt="Step 01" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 02: FLAT BASE</p>
              <img src="/step02_base_flat.png" alt="Step 02" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 03: SHADE LIGHT</p>
              <img src="/step03_shade_light.png" alt="Step 03" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 04: SHADE MID</p>
              <img src="/step04_shade_mid.png" alt="Step 04" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 05: SHADE DEEP</p>
              <img src="/step05_shade_deep.png" alt="Step 05" className="process-img" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 06: SHADING DONE</p>
              <img src="/step06_shading_done.png" alt="Step 06" className="process-img border-red" />
            </div>
            <div className="gallery-item">
              <p className="label">STEP 07: FINAL</p>
              <img src="/step07_final.png" alt="Step 07" className="process-img border-red" />
            </div>
          </div>
        </section>

        <section className="panel dark-panel">
          <div className="text-box white-text text-center">
            <p className="text-lg font-bold leading-loose">
              大学での理論、AIという知性、そして創作への熱意。
              自力で完納した約450万円の学費と多額の奨学金は、私が目標から逃げない覚悟の重さです。
              不屈のガッツを武器に、クリエイターを支え抜くエンジニアになります。
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

const devStyles = ".dev-container { background: #fdfdfd; min-height: 100vh; padding: 100px 20px; font-family: sans-serif; color: #1a1a1a; } .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; } .back-btn { background: #000; color: #fff; padding: 10px 25px; font-weight: 900; border: 3px solid #000; cursor: pointer; } .content-wrapper { max-width: 1000px; margin: 0 auto; } .page-header { margin-bottom: 60px; border-bottom: 12px solid #000; padding-bottom: 20px; } .main-title { font-size: 2.5rem; font-weight: 1000; line-height: 1.1; letter-spacing: -2px; } .meta-info { margin-top: 20px; font-weight: 800; color: #666; } .panel { background: #fff; border: 4px solid #000; padding: 45px; margin-bottom: 50px; box-shadow: 20px 20px 0px #000; } .panel-title { font-size: 1.3rem; font-weight: 900; background: #000; color: #fff; display: inline-block; padding: 6px 20px; margin-bottom: 30px; } .vision-text { font-size: 1.1rem; font-weight: 700; } .role-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; } .role-card { padding: 25px; border: 3px solid #000; } .role-list { list-style: disc; padding-left: 20px; font-size: 0.85rem; font-weight: 700; } .self { background: #fff; } .ai { background: #f0f0f0; } .note-box { background: #fff9c4; border: 2px dashed #000; padding: 20px; } .code-view { background: #1a1a1a; color: #d4d4d4; padding: 30px; font-size: 0.85rem; line-height: 1.6; overflow-x: auto; border-left: 10px solid #e63946; } .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; } .process-img { border: 4px solid #000; width: 100%; aspect-ratio: 1; object-fit: cover; } .border-red { border-color: #e63946; } .label { font-size: 0.7rem; font-weight: 900; color: #888; margin-bottom: 5px; } .dark-panel { background: #000; color: #fff; border: none; box-shadow: 25px 25px 0px #e63946; } .white-text { color: #fff; }";