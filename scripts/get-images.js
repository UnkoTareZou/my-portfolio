const fs = require('fs');
const path = require('path');

// public/comic フォルダのパス
const dirPath = path.join(__dirname, '../public/comic');
// 書き出し先のJSONパス
const outputPath = path.join(__dirname, '../app/comic-list.json');

// 正規表現：png, jpg, jpeg, gif, webp にマッチ
const imageRegex = /\.(png|jpe?g|gif|webp)$/i;

try {
  // フォルダが存在しない場合のハンドリング
  if (!fs.existsSync(dirPath)) {
    console.log('⚠️ フォルダがないから作成するぜ：', dirPath);
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => imageRegex.test(file));
  
  fs.writeFileSync(outputPath, JSON.stringify(imageFiles, null, 2));
  console.log(`✅ 画像リストを更新したぜ！計 ${imageFiles.length} 件見つかった。`);
} catch (err) {
  console.error('❌ エラー発生だ、相棒：', err);
  // エラー時も空の配列でファイルを作っておくとNext.jsが落ちない
  fs.writeFileSync(outputPath, JSON.stringify([]));
}