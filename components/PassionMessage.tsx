"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import React from 'react';
// appフォルダ直下にあるcomic-list.jsonを読み込みます
import comicImages from '../comic-list.json';

export default function ProfessionalMakingEvolver() {
  const [refImg, setRefImg] = useState<string | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const canvasRefs = Array.from({ length: 7 }, () => useRef<HTMLCanvasElement>(null));

  // public/comicフォルダ内の画像リストを生成します
  const illustrationList = useMemo(() => {
    if (!comicImages || comicImages.length === 0) return [];
    return comicImages.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpeg')
    );
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setRefImg(reader.result as string);
    reader.readAsDataURL(file);
  };

  const extractLines = (ctx: CanvasRenderingContext2D, w: number, h: number, img: HTMLImageElement) => {
    ctx.drawImage(img, 0, 0);
    const src = ctx.getImageData(0, 0, w, h);
    const dst = ctx.createImageData(w, h);
    const s = src.data;
    const d = dst.data;
    
    const kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0];
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        let val = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const idx = ((y + ky) * w + (x + kx)) * 4;
            const avg = (s[idx] * 0.299 + s[idx+1] * 0.587 + s[idx+2] * 0.114);
            val += avg * kernel[(ky+1)*3 + (kx+1)];
          }
        }
        const edge = 255 - Math.abs(val) * 3;
        const o = (y * w + x) * 4;
        d[o] = d[o+1] = d[o+2] = edge; d[o+3] = 255;
      }
    }
    ctx.putImageData(dst, 0, 0);
  };

  const processStep = (canvas: HTMLCanvasElement, stepIdx: number) => {
    if (!refImg) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    const img = new Image();
    img.src = refImg;
    
    img.onload = () => {
      const w = canvas.width = img.width;
      const h = canvas.height = img.height;
      
      if (stepIdx === 0) {
        extractLines(ctx, w, h, img);
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      const thresholds = [0, 230, 195, 160, 125, 80, 0];
      const T = thresholds[stepIdx];

      for (let i = 0; i < data.length; i += 4) {
        const lum = 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2];
        if (lum < T) {
          data[i] = 255; data[i+1] = 255; data[i+2] = 255;
        } else if (lum < T + 15) {
          const ratio = (lum - T) / 15;
          data[i] = data[i] * ratio + 255 * (1 - ratio);
          data[i+1] = data[i+1] * ratio + 255 * (1 - ratio);
          data[i+2] = data[i+2] * ratio + 255 * (1 - ratio);
        }
      }
      ctx.putImageData(imageData, 0, 0);

      if (stepIdx < 6) {
        ctx.globalCompositeOperation = 'multiply';
        ctx.filter = "blur(" + Math.max(0, 5 - stepIdx) + "px) contrast(1.1)";
        ctx.drawImage(canvas, 0, 0);
        ctx.filter = 'none';
        ctx.globalCompositeOperation = 'source-over';
      }
    };
  };

  useEffect(() => {
    if (refImg) {
      canvasRefs.forEach((ref, i) => ref.current && processStep(ref.current, i));
    }
  }, [refImg]);

  const stepLabels = [
    "01. 主線抽出", "02. 下塗り", "03. 固有色",
    "04. 一影", "05. 二影", "06. 光", "07. 完成"
  ];

  return (
    <main className="demo-manga-container">
      <style dangerouslySetInnerHTML={{ __html: demoStyles }} />
      
      <nav className="fixed-nav">
        <Link href="/about">
          <div className="back-btn">← ABOUTに戻る</div>
        </Link>
      </nav>

      <div className="manga-wrapper">
        <header className="page-header">
          <p className="kicker">SYSTEM DEMO / REVERSE MAKING</p>
          <h1 className="main-title">Reverse Making System</h1>
          <div className="header-info">
            <span>応用数理研究室 / 中野 恭輔</span>
          </div>
        </header>

        <section className="manga-panel demo-panel">
          <div className="panel-badge">01. LIVE DEMO</div>
          <div className="demo-controls">
            <div className="control-text">
              <h2 className="panel-sub-title">イラストを解体・逆算する</h2>
              <p>完成したイラストから線画と塗りを分離しています。数学的アプローチによるメイキングの自動生成を体験することができます。</p>
            </div>
            <label className="upload-label">
              画像を選択する
              <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} />
            </label>
          </div>

          <div className="canvas-scroll-area">
            {refImg ? (
              <div className="canvas-grid">
                {canvasRefs.map((ref, i) => (
                  <div key={i} className="canvas-card">
                    <div className="canvas-info">
                      <span className="step-num">STEP {i + 1}</span>
                      <span className="step-label">{stepLabels[i]}</span>
                    </div>
                    <div className="canvas-frame">
                      <canvas ref={ref} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="waiting-box">
                <p>Waiting for Artwork...</p>
                <span>ここにイラストをドラッグまたは選択してください</span>
              </div>
            )}
          </div>
        </section>

        <div className="dual-grid">
          <section className="manga-panel link-panel-style">
            <div className="panel-badge">02. TECHNOLOGY</div>
            <div className="panel-content">
              <h3 className="section-title">符号理論の応用</h3>
              <p className="text-sm">
                卒業研究で扱っているしきい値判定の考え方を画像解析へ応用しています。数理モデルを実装し、客観的にメイキングを証明するプロセスは私のエンジニアリングの根幹となっています。
              </p>
              <Link href="/development">
                <div className="tech-link-btn">技術解剖・ソースコード解説 →</div>
              </Link>
            </div>
          </section>

          <section className="manga-panel dark-panel">
            <div className="panel-badge" style={{ background: '#e63946' }}>03. DETERMINATION</div>
            <div className="panel-content">
              <h3 className="section-title" style={{ color: '#fff' }}>覚悟の証明</h3>
              <p className="text-sm" style={{ color: '#fff' }}>
                自力で完納した約450万円の学費という数字には、私の信念が込められています。この数字は、私が目標から逃げない、そしてクリエイターを支え抜く覚悟の重さであると考えています。
              </p>
            </div>
          </section>
        </div>

        <section className="manga-panel gallery-panel">
          <div className="panel-badge">04. PORTFOLIO / ILLUSTRATIONS</div>
          <div className="gallery-header">
            <h2 className="panel-sub-title">今までの制作物</h2>
            <p className="gallery-desc">画像をクリックすると拡大表示します。</p>
          </div>
          <div className="illust-grid">
            {illustrationList.map((fileName, index) => (
              <div 
                key={index} 
                className="illust-card"
                onClick={() => setSelectedImg("/comic/" + fileName)}
              >
                <div className="illust-frame">
                  <img src={"/comic/" + fileName} alt="Portfolio Illustration" className="illust-img" />
                </div>
                {/* ここにあったタイトルの表示を完全に削除しました */}
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImg(null)}>×</button>
            <div className="modal-image-wrapper">
              <img src={selectedImg} alt="Enlarged Illustration" className="modal-image" />
            </div>
            <div className="modal-caption">CLICK OUTSIDE TO CLOSE</div>
          </div>
        </div>
      )}
    </main>
  );
}

const demoStyles = " .demo-manga-container { background-color: #f0f0f0; min-height: 100vh; padding: 60px 20px; background-image: radial-gradient(#ccc 1.5px, transparent 1.5px); background-size: 25px 25px; font-family: sans-serif; } .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; } .back-btn { background: white; border: 4px solid black; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px black; cursor: pointer; transition: 0.2s; } .back-btn:hover { background: black; color: white; } .manga-wrapper { max-width: 1100px; margin: 0 auto; } .page-header { border-bottom: 10px solid black; margin-bottom: 40px; padding-bottom: 10px; } .kicker { font-weight: 900; color: #e63946; font-size: 0.8rem; } .main-title { font-size: clamp(2rem, 5vw, 4rem); font-weight: 1000; letter-spacing: -2px; line-height: 1; } .header-info { font-weight: 800; color: #666; margin-top: 10px; } .manga-panel { background: white; border: 8px solid black; box-shadow: 15px 15px 0px black; position: relative; padding: 40px; margin-bottom: 40px; } .panel-badge { position: absolute; top: 0; left: 0; background: black; color: white; padding: 5px 15px; font-weight: 900; font-size: 0.8rem; } .demo-controls { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; flex-wrap: wrap; gap: 20px; } .panel-sub-title { font-size: 1.5rem; font-weight: 900; border-bottom: 4px solid black; display: inline-block; margin-bottom: 15px; } .upload-label { background: #e63946; color: white; padding: 15px 30px; font-weight: 900; cursor: pointer; border: 4px solid black; box-shadow: 5px 5px 0px black; } .upload-label:hover { background: #000; } .canvas-scroll-area { overflow-x: auto; padding-bottom: 20px; } .canvas-grid { display: flex; gap: 20px; } .canvas-card { flex-shrink: 0; width: 280px; } .canvas-info { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 900; font-size: 0.7rem; } .step-num { background: black; color: white; padding: 2px 8px; } .canvas-frame { border: 4px solid black; background: #eee; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; } canvas { max-width: 100%; max-height: 100%; object-fit: contain; } .waiting-box { height: 300px; border: 6px dashed #ccc; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #ccc; font-weight: 900; text-