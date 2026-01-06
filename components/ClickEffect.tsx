"use client";

import { useState, useEffect } from 'react';

export default function ClickEffect() {
  const [effects, setEffects] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const id = Date.now();
      const newEffect = { id, x: e.clientX, y: e.clientY };
      setEffects((prev) => [...prev, newEffect]);

      // 0.8秒後に消去
      setTimeout(() => {
        setEffects((prev) => prev.filter((eff) => eff.id !== id));
      }, 800);
    };

    // 画面全体のどこをクリックしても反応するように設定！
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kachi-pop {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
          100% { transform: translate(-50%, -120%) scale(1); opacity: 0; }
        }
        .effect-kachi {
          position: fixed;
          pointer-events: none;
          z-index: 99999; /* 常に最前面に！ */
          width: 150px;
          animation: kachi-pop 0.8s ease-out forwards;
        }
      `}} />
      {effects.map((eff) => (
        <img
          key={eff.id}
          src="/kachi.png"
          className="effect-kachi"
          style={{ left: eff.x, top: eff.y }}
          alt=""
        />
      ))}
    </>
  );
}