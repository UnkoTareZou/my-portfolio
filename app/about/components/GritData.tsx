export default function GritData() {
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-black mb-8 bg-red-600 text-white inline-block px-4 py-1 italic">02. GRIT</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-4 border-black p-6 rounded-2xl bg-white shadow-[10px_10px_0px_#f0f0f0]">
          <h3 className="font-black text-lg mb-4">学費・生活費の自立証明</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-black text-red-600">全国12位</span>
            <span className="font-bold text-sm text-gray-500 pb-1">（学生バイト収益順位）</span>
          </div>
          <p className="text-sm font-bold leading-relaxed">
            父親の生活保護受給という環境下、週5〜6日の勤務を4年間継続。源泉徴収票が示す数字は、私の「自立」と「執念」の記録です。
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-2xl shadow-[10px_10px_0px_#eee]">
          <h3 className="font-black text-lg mb-4 border-b border-white/30 pb-2">奨学金返済計画</h3>
          <p className="text-3xl font-black mb-2">計 9,200,000円</p>
          <p className="text-xs font-bold text-gray-400">
            2026年3月貸与終了予定。卒業後、月額5.1万円の返済を自らの力で完遂します。この負債は、私の学びへの投資であり、逃げない覚悟の証です。
          </p>
        </div>
      </div>
    </div>
  );
}