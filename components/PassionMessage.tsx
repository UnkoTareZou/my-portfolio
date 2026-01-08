// 232行目あたりの demoStyles をこのように修正
const demoStyles = `
  .demo-manga-container { 
    background-color: #f0f0f0; 
    min-height: 100vh; 
    padding: 60px 20px; 
    background-image: radial-gradient(#ccc 1.5px, transparent 1.5px); 
    background-size: 25px 25px; 
    font-family: sans-serif; 
  }
  .fixed-nav { position: fixed; top: 20px; left: 20px; z-index: 1000; }
  .back-btn { background: white; border: 4px solid black; padding: 10px 20px; font-weight: 900; box-shadow: 5px 5px 0px black; cursor: pointer; transition: 0.2s; }
  .back-btn:hover { background: black; color: white; }
  .manga-wrapper { max-width: 1100px; margin: 0 auto; }
  .page-header { border-bottom: 10px solid black; margin-bottom: 40px; padding-bottom: 10px; }
  .kicker { font-weight: 900; color: #e63946; font-size: 0.8rem; }
  .main-title { font-size: clamp(2rem, 5vw, 4rem); font-weight: 1000; letter-spacing: -2px; line-height: 1; }
  .header-info { font-weight: 800; color: #666; margin-top: 10px; }
  .manga-panel { background: white; border: 8px solid black; box-shadow: 15px 15px 0px black; position: relative; padding: 40px; margin-bottom: 40px; }
  .panel-badge { position: absolute; top: 0; left: 0; background: black; color: white; padding: 5px 15px; font-weight: 900; font-size: 0.8rem; }
  .demo-controls { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; flex-wrap: wrap; gap: 20px; }
  .panel-sub-title { font-size: 1.5rem; font-weight: 900; border-bottom: 4px solid black; display: inline-block; margin-bottom: 15px; }
  .upload-label { background: #e63946; color: white; padding: 15px 30px; font-weight: 900; cursor: pointer; border: 4px solid black; box-shadow: 5px 5px 0px black; }
  .upload-label:hover { background: #000; }
  .canvas-scroll-area { overflow-x: auto; padding-bottom: 20px; }
  .canvas-grid { display: flex; gap: 20px; }
  .canvas-card { flex-shrink: 0; width: 280px; }
  .canvas-info { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 900; font-size: 0.7rem; }
  .step-num { background: black; color: white; padding: 2px 8px; }
  .canvas-frame { border: 4px solid black; background: #eee; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  canvas { max-width: 100%; max-height: 100%; object-fit: contain; }
  .waiting-box { height: 300px; border: 6px dashed #ccc; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #ccc; font-weight: 900; text-transform: uppercase; }
`; // ← 最後にこのバッククォートとセミコロンがあるか絶対確認だぜ！