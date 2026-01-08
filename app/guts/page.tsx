"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

export default function GutsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main style={containerStyle}>
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #f4f4f4 !important; margin: 0; color: #1a1a1a; font-family: "Helvetica Neue", Arial, sans-serif; }
        ${gutsFinalStyles}
      `}} />
      
      {selectedImg && (
        <div className="overlay" onClick={() => setSelectedImg(null)}>
          <div className="overlay-content">
            <img src={selectedImg} className="enlarged-img" alt="拡大画像" />
            <p className="overlay-text">画面をクリックして閉じる</p>
          </div>
        </div>
      )}

      {/* ナビゲーションバー */}
      <nav className="sticky-nav">
        <Link href="/about">
          <div className="back-btn">← 自己PRに戻る</div>
        </Link>
        <span className="nav-title"></span>
      </nav>

      {/* 右上固定ボタン：z-indexを上げて確実に一番上に配置します */}
      <nav className="go_next_page_container">
        <Link href="/study">
          <div className="go_ext_page">大学で学んだこと一覧へ →</div>
        </Link>
      </nav>

      <div className="report-container">
        <header className="report-header">
          <h1>活動成果報告書：圧倒的な完遂能力と「不退転」の証明</h1>
          <p className="summary-lead">
            月間210時間の稼働、450万円の学費完納、そして卒業研究の完遂。<br />
            この泥臭いリアリティを、セルシスでの最高峰の開発に捧げます。
          </p>
        </header>

        {/* --- RECORD 01：全国12位への執念 --- */}
        <section className="report-section">
          <div className="section-manga-eye">
            <span className="chapter">ACHIEVEMENT 01</span>
            <h2>全国400店舗中12位。不利な環境を「210時間の戦略」で塗り替えた。</h2>
          </div>

          <div className="report-content">
            <div className="report-text">
              <h3>【背景・課題：店舗レコードの更新】</h3>
              <p>
                私は自由が丘のビックエコーで働いています。
                自由が丘駅前店は、梅田、横浜、恵比寿、日本橋や渋谷のような「屈指の繁忙店」ではありません。
                しかし私は12月の最繁忙期に24日の出勤、210時間の稼働をし（図1）、店舗の歴史の中で断トツとなる「1650万円」の月商を達成しました。
                従来のレコードを113%以上更新したこの数字は、全国440店舗以上の全ビックエコーの中で
                12位という偉業に繋がりました。
              </p>
              
              <h3>【戦略的アプローチ：現場判断力】</h3>
              <ul>
                <li><strong>210時間の現場執念：</strong> 
                月商売上が全国12位であった12月、私は210時間以上稼働しました。全営業時間の約35%の出勤をしました。
                その間、現場で指揮し、単価上昇のためのアップセルやリピーター獲得のために丁寧かつ笑顔で親しみやすい
                接客を徹底しました。</li>
                <li><strong>クリエイターへの還元：</strong> 
                現場で培った「不測の事態でもユーザーを迷わせない優先順位の判断」を、
                CLIP STUDIO PAINTの操作性向上や製品品質の最適化に応用します。
                情報工学の知識と現場での実務感覚を掛け合わせ、
                どの役割においても「ユーザーの創作を止めない」価値を提供し、貴社の成長に貢献します。
                </li>
              </ul>

              <div className="result-box-highlight">
                <p><strong>■ 全国ランキング 12位 / 440店舗以上</strong></p>
                <p><strong>■ 店舗月間売上：1,650万円（歴代最高レコード）</strong></p>
              </div>
            </div>

            <div className="report-visual shift-visual" onClick={() => setSelectedImg('/shift.jpg')}>
              <img src="/shift.jpg" alt="シフト記録" />
              <p className="caption">図1：12月のシフト。この過密な記録が、ユーザーを支えるスタミナの証。
                給与明細がまだ発行されないためシフト管理アプリのスクリーンショットです。
                後ほど給与明細も提出します。
              </p>
            </div>
          </div>
        </section>

        {/* --- RECORD 02：不動のメンタルと誠実さ --- */}
        <section className="report-section">
          <div className="section-manga-eye">
            <span className="chapter">ACHIEVEMENT 02</span>
            <h2>学費450万の完納。多額の奨学金は「生涯の責任」である誓い。</h2>
          </div>

          <div className="report-content reverse">
            <div className="report-text">
              <h3>【背景・プロセス：不動のメンタル】</h3>
              <p>
                母は他界し、父親の生活保護受給という環境下、3年に渡る独学で大学進学を掴み取りました。4年間、深夜勤務と研究を一切の手抜きなく並行。2025年度には源泉徴収額210万円を記録しました。（図2）
              </p>
              
              <h3>【誠実さの物理的な証明】</h3>
              <p>
                私が背負う多額の奨学金。これは「不退転の誓い」です。卒業までの学費450万円を自らの手で支払い切った責任感を、次は世界のクリエイターが安心して夢を描くための環境を20年、30年と守り抜くために注ぎます。
                私は決して逃げません。この負債さえ、貴社で努力するためのガソリンです。
              </p>

              <div className="result-box-highlight">
                <p><strong>■ 学費領収書：450万円 自力完納（不動のガッツ）</strong></p>
                <p><strong>■ 源泉徴収：210万円（学生の枠を破壊する実行力）</strong></p>
              </div>
            </div>
            
            <div className="visual-column-emphasized">
              <div className="report-visual gensen-impact" onClick={() => setSelectedImg('/gensen.png')}>
                <img src="/gensen.png" alt="源泉徴収票" />
                <div className="impact-badge">クリックで拡大</div>
                <p className="caption">図2：2025年度 源泉徴収票。</p>
              </div>
              
              <div className="report-visual tuition-small" onClick={() => setSelectedImg('/tuition.jpg')}>
                <img src="/tuition.jpg" alt="学費領収書" />
                <p className="caption">図3：450万円完納の一部。半期毎に収めていたため全ての画像は乗せられませんが、通帳は後日お見せできます。</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="report-footer">
          <h2>THE MISSION FOR CELSYS</h2>
          <div className="value-grid">
            <div className="value-card">
              <h4>異常なまでの「やり抜く」スタミナ</h4>
              <p>
                繁忙期の210時間稼働と研究を両立させた体力があります。
                あなたが描き終えるその瞬間まで。そしてまた描き始められるように、あなたが”好き”を追い続けられるように、私はあなたを思い、システムを支え続けます。
              </p>
            </div>
            <div className="value-card">
              <h4>逆境を力に変える「戦略的マインド」</h4>
              <p>
                「不利な店を全国12位にする」ために使った分析力。
                クリエイターの孤独さと生みの苦しみは痛いほどわかります。
                顧客の状況を推察し、ベネフィットを提示し店舗へ誘導したあの力を、クリエイターが夢を実現するための機能実装に転換します。
                クリエイターが活躍できるソフト、プラットフォームを作る貴社で、世界中のクリエイターという色が乗るキャンバスを私も作っていきたいです。
              </p>
            </div>
          </div>
          <p className="final-word-punch">「この泥臭いリアリティを、セルシスでの最高峰の開発に捧げます。」</p>
        </footer>
      </div>
    </main>
  );
}

const containerStyle: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  minHeight: '100vh',
  paddingBottom: '100px'
};

const gutsFinalStyles = `
  .sticky-nav { position: sticky; top: 0; background: rgba(255,255,255,0.98); border-bottom: 3px solid black; padding: 15px 40px; z-index: 1000; display: flex; align-items: center; justify-content: space-between; }
  .back-btn { font-weight: 900; color: black; border: 3px solid black; padding: 8px 20px; cursor: pointer; background: white; text-decoration: none; }
  .nav-title { font-weight: 900; font-size: 1.1rem; }

  /* 右上ボタンのコンテナ：z-indexを最強にしてsticky-navの上に乗せます */
  .go_next_page_container { position: fixed; top: 12px; right: 20px; z-index: 2000; }
  .go_ext_page { background: black; color: white; border: 3px solid black; padding: 10px 20px; font-weight: 900; cursor: pointer; text-decoration: none; transition: 0.2s; box-shadow: 4px 4px 0px #e63946; }
  .go_ext_page:hover { background: white; color: black; box-shadow: 0px 0px 0px black; transform: translate(2px, 2px); }

  .report-container { max-width: 1100px; margin: 60px auto; padding: 0 20px; }
  .report-header { border-left: 15px solid black; padding-left: 30px; margin-bottom: 80px; }
  .report-header h1 { font-size: 2.5rem; font-weight: 1000; line-height: 1.2; }
  .summary-lead { font-size: 1.2rem; font-weight: 700; color: #555; line-height: 1.8; margin-top: 15px; }

  .report-section { background: white; border: 3px solid black; padding: 50px; margin-bottom: 80px; box-shadow: 15px 15px 0px rgba(0,0,0,0.1); }
  .section-manga-eye { border-bottom: 5px solid black; margin-bottom: 40px; padding-bottom: 20px; }
  .chapter { background: black; color: white; padding: 4px 15px; font-weight: 900; }
  .section-manga-eye h2 { font-size: 2rem; font-weight: 900; margin-top: 15px; }

  .report-content { display: flex; gap: 50px; align-items: flex-start; }
  .report-content.reverse { flex-direction: row-reverse; }
  .report-text { flex: 1.6; }
  .report-text h3 { font-size: 1.2rem; font-weight: 900; margin-top: 30px; color: #e63946; border-bottom: 2px solid #e63946; display: inline-block; }
  .report-text p, .report-text li { font-weight: 700; line-height: 2; color: #333; font-size: 1.05rem; }
  
  .result-box-highlight { background: #fff5f5; border: 4px solid #e63946; padding: 25px; margin-top: 30px; }
  .result-box-highlight p { margin: 10px 0; font-weight: 800; color: #e63946; }

  .visual-column-emphasized { flex: 1; display: flex; flex-direction: column; gap: 40px; }
  .report-visual { border: 5px solid black; padding: 10px; background: #fff; cursor: zoom-in; position: relative; }
  
  .shift-visual { max-width: 450px; margin-left: auto; }
  .shift-visual img { width: 100%; height: auto; object-fit: contain; }

  .gensen-impact { transform: scale(1.1); border: 12px solid #e63946 !important; z-index: 10; box-shadow: 20px 20px 0px rgba(230, 57, 70, 0.15); }
  .gensen-impact img { width: 100%; height: auto; display: block; }
  .impact-badge { position: absolute; top: -15px; right: -15px; background: #e63946; color: white; padding: 5px 20px; font-weight: 900; font-size: 1.3rem; transform: rotate(5deg); box-shadow: 5px 5px 0px black; }

  .tuition-small { max-width: 350px; align-self: center; opacity: 0.9; }
  .tuition-small img { width: 100%; height: auto; }

  .caption { font-size: 0.85rem; font-weight: 800; color: #666; margin-top: 10px; text-align: center; }

  .report-footer { background: black; color: white; padding: 80px 40px; text-align: center; }
  .value-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 50px; text-align: left; }
  .value-card { background: #1a1a1a; padding: 40px; border: 1px solid #e63946; }
  .value-card h4 { color: #e63946; font-size: 1.3rem; margin-bottom: 15px; font-weight: 900; }
  .final-word-punch { font-size: 2rem; font-weight: 1000; margin-top: 60px; font-style: italic; color: #ff4d4d; border-top: 2px solid #333; padding-top: 40px; }

  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.98); z-index: 10000; display: flex; align-items: center; justify-content: center; cursor: pointer; }
  .enlarged-img { max-width: 90%; max-height: 85vh; border: 4px solid white; object-fit: contain; }
`;