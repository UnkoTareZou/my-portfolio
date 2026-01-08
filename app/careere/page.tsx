"use client";

import React from 'react';
import Link from 'next/link';

export default function CareerVisionPage() {
  return (
    <main className="career-container">
      <style dangerouslySetInnerHTML={{ __html: careerStyles }} />
      
      <nav className="fixed-nav">
        <Link href="/">
          <div className="back-btn">← TOPに戻る</div>
        </Link>
      </nav>

      <div className="career-wrapper">
        <header className="page-header">
          <p className="label">TARGETED SKILLS & GRIT</p>
          <h1 className="main-title">求める人物像への回答</h1>
        </header>

        {/* 1. QAエンジニア */}
        <section className="manga-panel role-panel">
          <div className="panel-badge">職種 1</div>
          <div className="content-inner">
            <h2 className="section-title jp-title">QAエンジニア（品質保証）</h2>
            <ul className="point-list">
              <li>大学の研究では実装と検証を繰り返したため、常にグラフとにらめっこでした。また、ゼミや論文ではカンマや分野によっての慣習の差により細かな訂正を要求されることが多かったです。厳密性には私もこだわりたいためユーザーエクスペリエンスの向上の役に立てると思います。</li>
              <li>符号理論など大学での難解な数理モデルを粘り強く実装してきた経験があり、未知の課題に対しても学習を止めずに対応できます。</li>
              <li>一人のクリスタユーザーとして描き心地の僅かな違和感を見逃さない感性があり、論理と感性の両面から品質管理に貢献できると考えています。なぜならクリスタは私の人生だからです。</li>
            </ul>
          </div>
        </section>

        {/* 2. インフラエンジニア */}
        <section className="manga-panel role-panel">
          <div className="panel-badge">職種 2</div>
          <div className="content-inner">
            <h2 className="section-title jp-title">インフラエンジニア</h2>
            <ul className="point-list">
              <li>大学4年間Ubuntuをメインに使用しており、基本的なコマンド操作やシステム管理に習熟しています。また大学ではオンプレサーバーについて座学的に学ぶこともありました。</li>
              <li>本サイトをAWS Amplifyで自力構築した経験があり、クラウドを用いた実務的な環境構築にも強い関心があります。</li>
              <li>また内定先が数万人規模のクラウド構築であり、AWS資格取得やUdemyの受講を勧められていて既に興味関心は十分な状態でした。 </li>
              <li>学費を完納するために粘り強く働いてきた経験があり、止まることが許されない大規模な基盤運用の責任感に生きると確信しています。</li>

              <li>変化の激しいクラウド分野は、7年間フルタイム労働を続けながら勉学に打ち込んだ自分にとって最適な環境であると思います。貴社の新たなプラットフォーム事業の設計や既存のサービスの運用は漫画家を志していた自分にとって何よりのやりがいになると考えています。
                
                世界規模でクリエイター様を支えるインフラに携われたらこれ以上ない名誉であると自覚しております。</li>
            </ul>
          </div>
        </section>

        {/* 3. カスタマーサポート */}
        <section className="manga-panel role-panel">
          <div className="panel-badge">職種 3</div>
          <div className="content-inner">
            <h2 className="section-title jp-title">カスタマーサポート</h2>
            <ul className="point-list">
              <li>自己紹介でも述べた通り6年間の接客経験があり、様々なお客様に対して柔軟かつ誠実に対応できる能力があります。
                アルバイトの経歴はコンビニ1年、スーパー1年、居酒屋2年、カラオケ2年、ファストフード店4年であり接客スキルは実戦で磨いてまいりました。
              </li>
              <li>自力で学費450万円を完納するという巨大な目標を成し遂げた達成能力があり、一つの目標に向かって突き進む力は誰にも負けません。</li>
              <li>私自身が創作の壁で挫折しかけた経験があり、トラブルで筆を置きそうなユーザー様の心に寄り添う執念が業務に生きると考えています。</li>
              <li>クリエイター様に一番近い距離で私の言葉、知識、技術で支えられることに私は大きなやりがいを感じます。</li>
              <li>将来的に実現しているクリップスタジオの新しいプラットフォームなどでクリエイター様の一番近くで旅路を応援できることに非常に強い関心があります。
                私たちが支えたクリエイター様達が翼を広げ世界中に感動を届けていく、その現場に私もぜひ参加したいです。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 編集・コンテンツ制作 */}
        <section className="manga-panel role-panel">
          <div className="panel-badge">職種 4</div>
          <div className="content-inner">
            <h2 className="section-title jp-title">編集・コンテンツ制作</h2>
            <ul className="point-list">
              <li>Next.jsを用いたポートフォリオ制作や動画編集の経験があり、技術と表現を融合させて想いを伝える力があります。</li>
              <li>細かい作業や納得いくまでの調整を繰り返す粘り強さがあり、高品質なコンテンツを量産するフローを構築したいと考えています。</li>
              <li>エンジニアとして制作工程を自動化・効率化する発想を持っており、現場の生産性を高める視点が貴社の制作業務に生きると思います。</li>
            </ul>
          </div>
        </section>

        {/* 最後のメッセージ */}
        <section className="manga-panel final-message-panel">
          <div className="content-inner">
            <h2 className="section-title jp-title" style={{ borderBottom: 'none', marginBottom: '10px' }}>最後に</h2>
            <p className="description">
              私はどの職種であっても貴社が掲げるクリエイタージャーニーを支える覚悟でおります。
              学費完納で証明した不屈のガッツと情報科学の知見は、貴社のどの部署においても揺るぎない力になると考えております。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

const careerStyles = " .career-container { background-color: #f0f0f0; min-height: 100vh; padding: 60px 20px; background-image: radial-gradient(#ccc 1.5px, transparent 1.5px); background-size: 25px 25px; } .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; } .back-btn { background: white; border: 4px solid black; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px black; cursor: pointer; transition: 0.2s; } .back-btn:hover { background: black; color: white; } .career-wrapper { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; } .page-header { border-bottom: 12px solid black; padding-bottom: 20px; } .label { font-weight: 900; color: #888; font-size: 0.8rem; } .main-title { font-size: 2.5rem; font-weight: 1000; line-height: 1.1; } .manga-panel { background: white; border: 8px solid black; position: relative; box-shadow: 15px 15px 0px black; } .panel-badge { position: absolute; top: 0; left: 0; background: black; color: white; padding: 5px 20px; font-weight: 900; font-size: 0.8rem; } .content-inner { padding: 60px 30px 40px; } .section-title { font-size: 1.5rem; font-weight: 900; border-bottom: 4px solid black; display: inline-block; margin-bottom: 20px; } .jp-title { font-size: 2rem; border-bottom-width: 6px; } .point-list { list-style: none; padding: 0; } .point-list li { margin-bottom: 15px; font-weight: 700; line-height: 1.6; } .description { font-size: 1.1rem; font-weight: 700; line-height: 1.8; } .final-message-panel { text-align: center; background: white; color: black; } ";