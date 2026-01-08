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

  // --- 高度なエッジ抽出（線画化）：空間フィルタリングの実装 ---
  const extractLines = (ctx: CanvasRenderingContext2D, w: number, h: number, img: HTMLImageElement) => {
    ctx.drawImage(img, 0, 0);
    const src = ctx.getImageData(0, 0, w, h);
    const dst = ctx.createImageData(w, h);
    const s = src.data;
    const d = dst.data;
    
    // ラプラシアンカーネル（二次微分フィルタ）による輪郭抽出
    const kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0];
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        let val = 0;
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const idx = ((y + ky) * w + (x + kx)) * 4;
            // 輝度(Y)の算出
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
      // 符号理論のしきい値判定を応用
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
    <main className="p-8 min-h-screen bg-white text-black font-sans max-w-6xl mx-auto">
      <style dangerouslySetInnerHTML={{ __html: `body { background-color: #f8f8f8 !important; }` }} />
      
      <div className="flex justify-between items-end border-b-8 border-black pb-4 mb-12">
        <Link href="/" className="font-black border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-all no-underline text-sm uppercase">← TOP</Link>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-500">PROJECT / REVERSE MAKING SYSTEM</p>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Reverse Making System</h1>
        </div>
      </div>

      <section className="mb-16 bg-white border-4 border-black p-8 shadow-[12px_12px_0px_black]">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h2 className="text-xl font-black mb-2 uppercase underline">Live Demo</h2>
            <p className="text-sm font-bold leading-relaxed">
              完成したイラストから「線画」と「塗り」を分離・解析します。数学的なアプローチによる制作工程の逆算ツールです。
            </p>
          </div>
          <input type="file" accept="image/*" onChange={handleUpload} className="text-xs font-bold border-2 border-black p-2 bg-gray-50 cursor-pointer" />
        </div>

        {refImg ? (
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
            {canvasRefs.map((ref, i) => (
              <div key={i} className="flex-shrink-0 w-72 md:w-80 snap-center">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded ${i === 6 ? 'bg-red-600 text-white' : 'bg-black text-white'}`}>
                    STEP {i + 1}
                  </span>
                  <p className="text-[10px] font-bold text-gray-500">{stepLabels[i]}</p>
                </div>
                <div className="border-4 border-black rounded-xl overflow-hidden bg-white shadow-lg aspect-[3/4] flex items-center justify-center">
                  <canvas ref={ref} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-64 flex flex-col items-center justify-center border-4 border-dashed border-gray-200 rounded-3xl">
            <p className="text-gray-400 font-black animate-pulse uppercase">Waiting for Artwork...</p>
          </div>
        )}
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-black border-l-8 border-black pl-4 uppercase">技術的な背景</h2>
          <div className="p-6 bg-gray-100 border-2 border-black rounded-xl">
            <h3 className="font-black mb-2 underline">Pythonからのポーティング</h3>
            <p className="text-sm font-bold leading-relaxed mb-4">
              元々は行列演算に強いPython(NumPy)でプロトタイプを開発しました。
              Web上で誰でも即座に体験可能にするため、AIのサポートを受けつつJavaScript(Canvas API)へ移植を行いました。
            </p>
            <Link href="/development">
              <div className="bg-black text-white p-4 font-black text-center shadow-[6px_6px_0px_#e63946] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer text-xs uppercase">
                技術解剖（ソースコード解説）を見る →
              </div>
            </Link>
          </div>
          <div className="p-6 bg-gray-100 border-2 border-black rounded-xl">
            <h3 className="font-black mb-2 underline">符号理論の応用</h3>
            <p className="text-sm font-bold leading-relaxed">
              卒業研究で扱っている「しきい値判定による通信路変換」の考え方を、イラストの輝度ベースのレイヤー分離に応用しました。数理モデルを実装し、客観的に証明するプロセスは私のエンジニアリングの根幹です。
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-black border-l-8 border-red-600 pl-4 uppercase">覚悟の証明</h2>
          <div className="p-6 bg-black text-white rounded-xl shadow-[10px_10px_0px_#e63946]">
            <p className="text-sm font-bold leading-loose">
              私は技術を用いて創作を支えたいと考えています。
              自力で完納した約450万円の学費と、現在も背負っている多額の奨学金。
              この数字は、私が目標から逃げない、そしてクリエイターを支え抜く覚悟の重さです。
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase text-gray-500 text-center">数学的基盤：ラプラシアンカーネル</p>
            <div className="bg-white p-4 border-2 border-black font-mono text-center text-lg flex justify-center items-center gap-4">
              <span className="text-3xl font-light">[</span>
              <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                <span>0</span><span>1</span><span>0</span>
                <span>1</span><span className="text-red-600 font-bold">-4</span><span>1</span>
                <span>0</span><span>1</span><span>0</span>
              </div>
              <span className="text-3xl font-light">]</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}