"use client";

import React from 'react';
import Link from 'next/link';

export default function StudyDetailPage() {
  return (
    <main className="study-container">
      <style dangerouslySetInnerHTML={{ __html: studyStyles }} />
      
      <nav className="fixed-nav">
        <Link href="/about">
          <div className="back-btn">← ABOUTに戻る</div>
        </Link>
      </nav>

      <div className="content-wrapper">
        <header className="page-header">
          <p className="label">ACADEMIC & RESEARCH</p>
          <h1 className="title">研究内容と学問的背景</h1>
          <p className="author">東京都市大学 情報工学部 情報科学科 | 中野 恭輔</p>
        </header>

        {/* 1. 卒業研究の要約 */}
        <section className="research-panel">
          <div className="panel-inner">
            <h2 className="section-title">卒業研究：通信の効率化とエラー低減</h2>
            <div className="text-content">
              <p>
                卒業研究では、雑音のある通信路において、データの復号にかかる「計算回数」や「誤り確率」を低減させるためのアルゴリズムを研究しました。
              </p>
              <p>
                具体的には、受信したデータのうち雑音が加わり信頼性が低くなったシンボルを、数学的に「未知数（消失）」として扱います。
                ここで、計算負荷と精度のバランスを取るために、通信路の状態（SN比）に応じて二通りの復号手法を最適に使い分ける提案手法を実装しました。
              </p>
              <p>
                自作したC言語によるシミュレーションの結果、従来手法と比較して計算回数を約6%削減（94%まで低減）し、再送要求の回数も抑制できることを客観的なデータで証明しました。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 情報工学の基盤 */}
        <section className="research-panel">
          <div className="panel-inner">
            <h2 className="section-title">情報工学における広範な基礎知識</h2>
            <div className="text-content">
              <p>
                大学の講義を通じ、ソフトウェアからハードウェア、理論まで一貫した情報系の基礎を網羅的に学習してきました。
              </p>
              <div className="course-grid">
                <div className="course-cat">
                  <h4>プログラミング・開発</h4>
                  <ul>
                    <li>プログラミング(1)〜(4)（C言語・Java）</li>
                    <li>オブジェクト指向プログラミング</li>
                    <li>アルゴリズムとデータ構造</li>
                    <li>ソフトウェア工学</li>
                  </ul>
                </div>
                <div className="course-cat">
                  <h4>システム・基盤理論</h4>
                  <ul>
                    <li>オペレーティングシステム</li>
                    <li>コンピュータシステム・構成</li>
                    <li>コンピュータネットワーク</li>
                    <li>情報理論・符号理論</li>
                  </ul>
                </div>
                <div className="course-cat">
                  <h4>応用・先端技術</h4>
                  <ul>
                    <li>人工知能(AI)</li>
                    <li>並列分散処理</li>
                    <li>画像処理・CG</li>
                    <li>デジタル信号処理</li>
                  </ul>
                </div>
              </div>
              <p className="course-summary">
                これらの講義を通じて得た知識を土台に、コードを書くような物理的な作業だけでなく、座学で
                システムの裏側にある数理的な最適化や理論回景を考慮した開発を行うことができます。
              </p>
            </div>
          </div>
        </section>

        {/* 3. 結論 */}
        <section className="research-panel dark-section">
          <div className="panel-inner">
            <h2 className="section-title">結論</h2>
            <p className="conclusion-text">
              何度でも粘り強く手を動かす実装力と理論に基づいた客観的分析。
              在学中に身に着けたこの研究に対する姿勢で、貴社の製品開発や課題解決に向けて、技術的な課題を一つずつ突破していく覚悟です。
            </p>

            {/* 追伸*/}
            <div className="ps-box">
              <p>
                <strong>追伸</strong><br />
                本項目について、概略のみの説明となってしまい申し訳ございません。<br />
                アクセスログを監視していたところ、研究分野や学んだ内容についてのアクセス数が多く、そちらについて詳細を述べたく思い、追伸で説明させていただきました。<br />
                下記を読んでいただければ確かに情報科学を4年間学んだ情報学従であることが分かると思います。<br />
                その事実以上に貴社製品クリップスタジオのファンであり人生をささげてきたものとして、リソースを熱意に注ぎすぎてしまいました。<br />
                しかしながらわたくしの技術や知識も本物であることを示したこのような文章を作成いたしました。<br />
                私が大学で何を学んだか、具体的に説明させていただきたく提出後に訂正いたしました。<br /><br />
                本訂正を貴社への熱意や志望度の高さと受け取っていただければこれ以上の幸せはありません。<br /><br />
              
                <span className='text-red'>プログラミング</span>では主にC言語を用いて実習をしておりました。具体的にはポインタやノードなどを用いてメモリ管理や関数や変数の書き方です。1年間毎週4コマの徹底した基礎作りは私の現在のプログラミングスキルに活かされています。
                <br /><br />
                この科目を基礎として、FIFO,RR,優先度付きRR,などのスケジューリングアルゴリズムや遺伝的アルゴリズムの実装をC言語で行いました。
                また、入力音声二つに対して類似性を確かめるDPマッチング方式などを実装しました。登録されたデータと実際に入力する音声の類似性を確かめるアルゴリズムの正確性を確かめるために、音声で操作できるゲームなども作成しました。
                <br /><br />
                <span className='text-red'>人工知能</span>の講義では
                LISPから学び始め、再起的な考え方を吸収し深層学習やCNNの転移学習で画像認識なども行いました（python,keras,TensorFlowを用いた開発モデルです）。
                強化学習でのSarasaやQ学習を始めとしたモデルを学び最適化のシミレーション手法の基礎を学びました。<br /><br />
                <span className='text-red'>コンピュータネットワーク</span>ではOSI基本参照モデルのような礎的な話から始まり、ソケットプログラミングを学び、Wiresharkを活用したプロトコルスタックの動的な解析を行いました。3ハンドシェイクによるコネクションの確立やパケットの再送制御などのトランスポート層におけるきょどうをパケットレベルで確認しました。
                。UDPやTCPの差や輻湊制御を学びました。
                ネットワークセキュリティについても学び、情報理論で学んだ数理的な鍵を持いた機密保持に関する理解や、不正新種検知（NIDS）についても学びました。<br /><br />

                その他大学では座学的な画像処理やopencvを用いた画像の編集なども行いました。制作物の前進段階のコードはこちらの講義で実装しました。<br />
                デジタル信号処理ではA/D変換の理論をフーリエ解析を用いて理解しました。卒業研究と分野が同じである符号理論や情報理論では情報の信頼性を確かなものにすべく圧縮法やパリティチチェックのアルゴリズムを学びました。<br/>
                卒業研究では雑音のあるAWGN通信路におけるビットごとの誤り確率を最小にするべく、受信シンボルの消失等を取り入れることで誤り確率を低減し、復号に用いられるガウス消去法の計算回数の最適化を目指しました。その際に雑音のある通信路やガウス消去法の複雑な行列計算法、提案アルゴリズムをコーディングしシミレーションを繰り返しました。
                <br/><br/>
                貴社やクリエイターにかける熱意はこのポートフォリオの通り純粋そのものですが、私自身の能力について証明したく思いました。
                <br/>
                もしこれをお読みでしたら、改めてわたくしの評価をお願い申し上げます。
                再三申し上げまして恐縮ですが私はクリエイター様に貢献すべく、CSなどエンジニアの枠にはこだわらずに貢献し続けるつもりです。
                本ポートフォリオにて私の意志や、それを遂行する理由。またやり続けられる覚悟や動機が伝わっていれば幸いです。

              <br/>
              貴重なお時間お取りいただき心より感謝申し上げます。
              <br/><br/>
              2026年1月13日 中野恭輔 
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const studyStyles = `
  .study-container { background: #fdfdfd; color: #1a1a1a; min-height: 100vh; padding: 60px 20px; font-family: sans-serif; }
  .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; }
  .go_next_page{position: fixed; top: 20px; right: 20px; z-index: 1000;}
  .back-btn { background: #fff; border: 3px solid #000; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px #000; cursor: pointer; }

  .content-wrapper { max-width: 1000px; margin: 0 auto; }
  .page-header { margin-bottom: 40px; border-bottom: 8px solid #000; padding-bottom: 15px; }
  .label { font-weight: 800; color: #888; font-size: 0.8rem; }
  .title { font-size: clamp(1.4rem, 4vw, 2.2rem); font-weight: 900; line-height: 1.2; }
  .author { font-weight: 700; color: #444; margin-top: 10px; }

  .research-panel { background: #fff; border: 3px solid #000; margin-bottom: 30px; box-shadow: 10px 10px 0px #000; }
  .panel-inner { padding: 30px; }
  .section-title { font-size: 1.1rem; font-weight: 900; background: #000; color: #fff; display: inline-block; padding: 4px 15px; margin-bottom: 20px; }

  .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0; }
  .course-cat h4 { border-bottom: 2px solid #000; padding-bottom: 5px; margin-bottom: 10px; font-weight: 900; }
  .course-cat ul { list-style: square; padding-left: 20px; }
  .course-cat li { font-size: 0.85rem; margin-bottom: 5px; font-weight: 600; }

  .dark-section { background: #1a1a1a; color: #fff; border: none; }
  .dark-section .section-title { background: #fff; color: #1a1a1a; }
  .conclusion-text { font-size: 1.1rem; line-height: 1.8; font-weight: 800; margin-bottom: 30px; }

  /* 追伸専用：ここを大きく強調 */
  .ps-box { 
    border: 4px solid #fff; 
    padding: 25px; 
    margin-top: 20px; 
    background: #2a2a2a; 
    box-shadow: 8px 8px 0px #fff;
  }
  .ps-box p { 
    font-size: 1.15rem; 
    line-height: 1.9; 
    font-weight: 600; 
    color: #eee;
    margin-bottom: 0;
  }
  .ps-box strong { font-size: 1.4rem; color: #ffff00; }
  /* studyStyles の最後の方、.ps-box strong の後あたりに追加 */
.ps-box strong { font-size: 1.4rem; color: #ffff00; }

.text-red {
  color: #b8d15e !important;
  font-weight: 800;
}

  p { line-height: 1.8; margin-bottom: 15px; font-weight: 500; font-size: 1rem; }
  .course-summary { font-size: 0.9rem; font-style: italic; color: #666; margin-top: 20px; }
  
  @media (max-width: 600px) { .panel-inner { padding: 20px; } .ps-box { padding: 15px; } .ps-box p { font-size: 1rem; } }
`;