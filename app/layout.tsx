// app/layout.tsx

import ClickEffect from '../components/ClickEffect'; // パスを直すのを忘れずにな！

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {/* ここに置くだけ！これでトップも、aboutも、今後作るページも全部「カチッ！」となる！ */}
        <ClickEffect />
        
        {children}
      </body>
    </html>
  );
}