import { ColorProvider } from './ColorContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ColorProvider>
          {children}
        </ColorProvider>

        <style>{`
          /* --- グローバル描き文字演出：カチッ！！ --- */
          .global-kachi-sfx {
            position: fixed;
            pointer-events: none;
            z-index: 100000;
            transform: translate(-50%, -50%);
          }
          .global-kachi-sfx img {
            width: 150px; /* マウスの場所に出るから少し小さめがカッコいいぜ */
            height: auto;
            animation: kachi-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }

          @keyframes kachi-pop {
            0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
            50% { transform: scale(1.1) rotate(5deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }

          /* --- 以下、既存のスタイル（モノクロ/カラフル/水玉） --- */
          .monochrome-world-active { transition: all 0.5s ease; }
          .colorful-world-active { position: relative; transition: all 1s ease-in-out; background-color: #fffaf0 !important; }

          .colorful-world-active::before {
            content: ''; position: fixed; left: 0; width: 100%; height: 200vh;
            pointer-events: none; z-index: 9999;
            background-image: 
              radial-gradient(circle 35px at 15% 10%, #ffb6c1 99%, transparent 100%),
              radial-gradient(circle 50px at 35% 30%, #add8e6 99%, transparent 100%),
              radial-gradient(circle 25px at 55% 50%, #fffacd 99%, transparent 100%),
              radial-gradient(circle 45px at 85% 70%, #98fb98 99%, transparent 100%);
            background-repeat: repeat-x;
            animation: bubbleFloatUp 12s linear infinite;
            transform: translateY(100vh);
          }
          @keyframes bubbleFloatUp { from { transform: translateY(100vh); } to { transform: translateY(-200vh); } }

          .colorful-world-active .manga-panel, .colorful-world-active .text-card {
            box-shadow: 15px 15px 0px rgba(135, 206, 235, 0.8) !important;
            border-color: #ff69b4 !important;
          }
        `}</style>
      </body>
    </html>
  );
}