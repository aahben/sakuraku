export default function Hero() {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center py-20 px-6 text-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // <- update with your image name
    >
      <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
        猿楽管理株式会社
      </h1>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed drop-shadow-md">
        猿樂管理株式會社成立於2010年5月19日，作為一家家族企業，專注於在日本東京都內從事不動產的買賣、租賃及相關管理業務。<br />
        目前，公司擁有三件營運用不動產，分別位於豐島區大塚、渋谷區惠比壽、及中央區銀座二丁目，主要收入來源為租金收益。
      </p>
    </section>
  )
}
