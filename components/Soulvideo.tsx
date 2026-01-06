export default function SoulVideo() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-black mb-6 bg-black text-white inline-block px-4 py-1 italic">01. IDENTITY</h2>
      <div className="aspect-video bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[15px_15px_0px_#eee]">
        <iframe
          width="100%" height="100%"
          src="https://www.youtube.com/embed/WBA5aS7pHUE" 
          title="Soul Video" frameBorder="0" allowFullScreen
        ></iframe>
      </div>
      <p className="mt-6 font-bold text-gray-600 leading-relaxed">
        この動画には、私がなぜ技術を志し、なぜ今ここに立っているのか、そのすべてを込めています。
      </p>
    </div>
  );
}