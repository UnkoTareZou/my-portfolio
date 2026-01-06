"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProfessionalMakingEvolver() {
  const [refImg, setRefImg] = useState<string | null>(null);
  const canvasRefs = Array.from({ length: 7 }, () => useRef<HTMLCanvasElement>(null));

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setRefImg(reader.result as string);
    reader.readAsDataURL(file);
  };

  // --- 高度なエッジ抽出（線画化） ---
  const extractLines = (ctx: CanvasRenderingContext2D, w: number, h: number, img: HTMLImageElement) => {
    ctx.drawImage(img, 0, 0);
    const src = ctx.getImageData(0, 0, w, h);
    const dst = ctx.createImageData(w, h);
    const s = src.data;
    const d = dst.data;
    
    // ラプラシアンカーネルによるエッジ検出
    const kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0];
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        let val = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const idx = ((y + ky) * w + (x + kx)) * 4;
            const avg = (s[idx] + s[idx+1] + s[idx+2]) / 3;
            val += avg * kernel[(ky+1)*3 + (kx+1)];
          }
        }
        const edge = 255 - Math.abs(val) * 3; // 線を黒く、背景を白に
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
      const thresholds = [0, 230, 195, 160, 125, 80, 0]; // 輝度しきい値
      const T = thresholds[stepIdx];

      for (let i = 0; i < data.length; i += 4) {
        const lum = 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2];
        
        // 色の補完：しきい値付近を滑らかに繋ぐ（にじみ処理）
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

      // レイヤーの重ね合わせ感を出すためのフィルタリング
      if (stepIdx < 6) {
        ctx.globalCompositeOperation = 'multiply';
        ctx.filter = `blur(${Math.max(0, 5 - stepIdx)}px) contrast(1.1)`;
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
    "01. 主線（エッジ抽出）", "02. 下塗り（環境光）", "03. 固有色の重なり",
    "04. 乗算（一影）", "05. 濃色（二影）", "06. スクリーン（光）", "07. 完成"
  ];

  return (
    <main className="p-4 min-h-screen bg-white text-black font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `body { background-color: white !important; }` }} />
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="font-black border-b-2 border-black no-underline uppercase text-xs">← HOME</Link>
        <h1 className="text-xl font-black italic uppercase tracking-tighter">Reverse Making System</h1>
      </div>

      <div className="w-full mx-auto">
        <div className="mb-8 bg-gray-50 p-6 rounded-2xl border-2 border-black flex items-center justify-between">
          <p className="font-black uppercase text-sm">解析用イラストをアップロード：</p>
          <input type="file" accept="image/*" onChange={handleUpload} className="text-xs font-bold border border-black p-1 rounded bg-white" />
        </div>

        {refImg && (
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
            {canvasRefs.map((ref, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-80 snap-center">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded ${i === 6 ? 'bg-red-600 text-white' : 'bg-black text-white'}`}>
                    STEP {i + 1}
                  </span>
                  <p className="text-[10px] font-bold text-gray-500">{stepLabels[i]}</p>
                </div>
                <div className="border-4 border-black rounded-xl overflow-hidden bg-white shadow-lg relative aspect-[3/4] flex items-center justify-center">
                  <canvas ref={ref} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!refImg && (
          <div className="h-96 flex flex-col items-center justify-center border-4 border-dashed border-gray-200 rounded-3xl">
            <p className="text-gray-400 font-black animate-pulse uppercase">Waiting for Artwork...</p>
          </div>
        )}
      </div>

      <footer className="mt-8 border-t-4 border-black pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] leading-relaxed">
        <div>
          <h3 className="font-black uppercase mb-1">空間フィルタリングによる線画抽出</h3>
          <p className="text-gray-600 font-bold">
            ラプラシアンカーネルを用いた2次元畳み込み演算により、画像の周波数成分を解析。
            デジタルイラストの主線を数学的に分離し、制作の始点となる「線画レイヤー」を再構築します。
          </p>
        </div>
        <div>
          <h3 className="font-black uppercase mb-1">輝度勾配に基づくにじみ補完</h3>
          <p className="text-gray-600 font-bold">
            色の剥離境界において輝度勾配（Gradient）を計算し、線形補間（Linear Interpolation）を適用。
            機械的な色分けを回避し、厚塗りや水彩のような筆の馴染みをシミュレートします。
          </p>
        </div>
      </footer>
    </main>
  );
}