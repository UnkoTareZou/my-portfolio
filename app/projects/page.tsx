"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [image, setImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 1. 画像を選択した時の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // 2. 画像を白黒に加工する処理（画像処理ロジック）
  const processImage = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      // キャンバスのサイズを画像に合わせる
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // ピクセルデータを取得
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // 全ピクセルをループして加工（ここが画像処理の核！）
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg; // 赤 (R)
        data[i + 1] = avg; // 緑 (G)
        data[i + 2] = avg; // 青 (B)
        // data[i + 3] は透明度 (A) なのでそのまま
      }

      // 加工したデータをキャンバスに戻す
      ctx.putImageData(imageData, 0, 0);
    };
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">
      <Link href="/" className="text-gray-400 hover:text-white transition-colors">
        ← BACK TO HOME
      </Link>

      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8">IMAGE PROCESSOR</h1>
        
        <div className="bg-slate-800 p-8 rounded-3xl border border-white/10 shadow-xl">
          {/* 画像アップロード部分 */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-4 text-gray-400">画像を選択してください</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 元画像プレビュー */}
            <div>
              <p className="text-sm mb-2 text-gray-500 text-center">ORIGINAL</p>
              {image ? (
                <img src={image} alt="Original" className="w-full rounded-lg shadow-lg" />
              ) : (
                <div className="w-full h-48 bg-slate-700 rounded-lg flex items-center justify-center text-gray-500">No Image</div>
              )}
            </div>

            {/* 加工後表示エリア */}
            <div>
              <p className="text-sm mb-2 text-gray-500 text-center">PROCESSED</p>
              <canvas ref={canvasRef} className="w-full rounded-lg shadow-lg bg-slate-700" />
            </div>
          </div>

          {/* 実行ボタン */}
          <button 
            onClick={processImage}
            disabled={!image}
            className="mt-8 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            GRAYSCALE CONVERT
          </button>
        </div>

        <div className="mt-8 p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl">
          <h3 className="text-blue-400 font-bold mb-2">Technical Note:</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            このプログラムは、Canvas APIを使用して画像のRGBAデータを直接操作しています。
            各ピクセルの輝度を平均化することで、リアルタイムなグレースケール変換を実現しています。
          </p>
        </div>
      </div>
    </main>
  );
}