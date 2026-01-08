"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

const ColorContext = createContext({ isColorful: false, makeColorful: () => {}, resetColor: () => {} });

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isColorful, setIsColorful] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('isColorful');
    if (saved === 'true') setIsColorful(true);

    // --- 全画面クリック監視：描き文字演出 ---
    const handleGlobalClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);

      // 0.4秒後に描き文字を消すぜ（アニメーション時間に合わせる）
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 400);
    };

    window.addEventListener('mousedown', handleGlobalClick);
    return () => window.removeEventListener('mousedown', handleGlobalClick);
  }, []);

  const makeColorful = () => {
    setIsColorful(true);
    localStorage.setItem('isColorful', 'true');
  };

  const resetColor = () => {
    setIsColorful(false);
    localStorage.removeItem('isColorful');
  };

  return (
    <ColorContext.Provider value={{ isColorful, makeColorful, resetColor }}>
      <div className={isColorful ? "colorful-world-active" : "monochrome-world-active"}>
        {children}
        
        {/* どこでも「カチッ！！」エフェクト */}
        {clicks.map((click) => (
          <div
            key={click.id}
            className="global-kachi-sfx"
            style={{ left: click.x, top: click.y }}
          >
            <img src="/kachi.png" alt="カチッ！！" />
          </div>
        ))}
      </div>
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);