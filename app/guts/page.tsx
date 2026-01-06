"use client";

import React from 'react';
import Link from 'next/link';

export default function GutsPage() {
  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '60px 20px' }}>
      <nav style={{ marginBottom: '40px' }}>
        <Link href="/about">
          <div style={{ display: 'inline-block', border: '2px solid white', padding: '10px 20px', cursor: 'pointer', fontWeight: '900' }}>
            ← BACK TO ABOUT
          </div>
        </Link>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '1000', fontStyle: 'italic', borderBottom: '10px solid white', marginBottom: '50px' }}>
          GUTS & REALITY DETAIL
        </h1>

        {/* ここに証拠を叩きつける！ */}
        <section style={{ border: '4px solid white', padding: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '20px' }}>[証拠 01] 労働の記録</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2' }}>
            2025年度 源泉徴収額：210万円<br />
            12月月間稼働時間：210時間（自由が丘店）<br />
            売上実績：全国12位
          </p>
        </section>

        <section style={{ border: '4px solid white', padding: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '20px' }}>[証拠 02] 完遂の記録</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '2' }}>
            自力完納した学費：450万円<br />
            背負っている覚悟：奨学金 920万円
          </p>
        </section>

        <p style={{ marginTop: '50px', fontSize: '1.5rem', textAlign: 'center', fontWeight: '800' }}>
          「このリアリティを、セルシスでの開発に捧げます。」
        </p>
      </div>
    </main>
  );
}