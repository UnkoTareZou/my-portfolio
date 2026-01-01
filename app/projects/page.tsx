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

  

  // 2. 画像を白黒に加工する処理
  const processImage = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = image;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i]     = avg;
        data[i + 1] = avg;
        data[i + 2] = avg;
      }
      ctx.putImageData(imageData, 0, 0);
    };
  };

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }} className="p-10">
      {/* 背景色を白に強制 */}
      <style dangerouslySetInnerHTML={{ __html: `body { background-color: white !important; }`}} />

      <Link href="/" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none', borderBottom: '2px solid black' }}>
        ← BACK TO HOME
      </Link>

      <div className="max-w-4xl mx-auto mt-10">
        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '40px', borderBottom: '8px solid black', display: 'inline-block' }}>
          IMAGE PROCESSOR
        </h1>
        
        {/* メインのカード部分：白背景に黒枠の「中野スタイル」に変更 */}
        <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '30px', border: '4px solid black', boxShadow: '10px 10px 0px rgba(0,0,0,1)' }}>
          
          {/* 画像アップロード部分 */}
          <div className="mb-8">
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>画像を選択してください</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange}
              style={{ padding: '10px', width: '100%', border: '2px dashed black', borderRadius: '10px' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 元画像プレビュー */}
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>ORIGINAL</p>
              {image ? (
                <img src={image} alt="Original" style={{ width: '100%', borderRadius: '10px', border: '2px solid black' }} />
              ) : (
                <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', border: '2px solid #ddd' }}>No Image</div>
              )}
            </div>

            {/* 加工後表示エリア */}
            <div>
              <p style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>PROCESSED</p>
              <canvas ref={canvasRef} style={{ width: '100%', borderRadius: '10px', border: '2px solid black', backgroundColor: '#eee' }} />
            </div>
          </div>

         {/* 実行ボタンの修正案（py を削除） */}
          <button 
            onClick={processImage}
            disabled={!image}
            style={{ 
              marginTop: '40px', 
              width: '100%', 
              backgroundColor: 'black', 
              color: 'white', 
              borderRadius: '50px', 
              fontWeight: '900', 
              fontSize: '1.2rem', 
              padding: '15px', // ここだけで上下左右の余白は十分です
              cursor: 'pointer', 
              transition: 'transform 0.2s',
              opacity: image ? 1 : 0.5
            }}
            className="hover:scale-[1.02] active:scale-[0.98]"
          >
            GRAYSCALE CONVERT
          </button>
        </div>

        {/* 技術ノートの部分 */}
        <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#f0f7ff', borderLeft: '10px solid #0066ff', borderRadius: '10px' }}>
          <h3 style={{ color: '#0066ff', fontWeight: 'bold', marginBottom: '10px' }}>Technical Note:</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#444' }}>
            このプログラムは、Canvas APIを使用して画像のRGBAデータを直接操作しています。
            各ピクセルの輝度を平均化することで、リアルタイムなグレースケール変換を実現しています。
            <strong>（大学で学んでいる情報工学の知識を応用しています）</strong>
          </p>
        </div>
      </div>
    </main>
  );
}