export default function AboutPage() {
  return (
    <div className="px-4 py-12 max-w-3xl mx-auto text-center text-gray-800">
      <h1 className="text-2xl font-bold mb-4">公司簡介</h1>

      <p className="text-base leading-relaxed">
        猿樂管理株式會社成立於2010年5月19日。猿樂管理株式會社主要的業務是在日本東京都內，經營不動產的買賣、出租及相關的管理。
      </p>

      <div className="h-5" />

      <p className="text-base leading-relaxed">
        目前共有3件營運用不動產，分別位於東京都豐島區大塚、渋谷區惠比壽、及中央區銀座2丁目，營收主要來自租金收入。
      </p>

      <div className="h-10" />

      <div className="text-left">
        <p className="font-semibold mb-2">主要往來銀行：</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            <a
              href="https://map.bk.mufg.jp/b/bk_mufg_s/info/BA592146/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              三菱UFJ銀行 大塚支店
            </a>
          </li>
          <li>
            <a
              href="https://www.firstbank.com.tw/sites/fcb/touch/zh_TW/1565683458722"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              第一商業銀行 東京支店
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
