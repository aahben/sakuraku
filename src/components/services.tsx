import { Card, CardContent, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Property Management",
    image: "https://i.postimg.cc/449xfTFD/IMG-6270.jpg",
    text: "提供全面的不動產管理服務，確保您的資產得到妥善維護並產生穩定收益。",
  },
  {
    title: "Real Estate Consulting",
    image: "https://i.postimg.cc/qMG0qBc5/IMG-6246.jpg",
    text: "專業顧問提供市場分析與策略建議，幫助您做出明智的不動產投資決策。",
  },
  {
    title: "Property Listings",
    image: "https://i.postimg.cc/vm4d0WJJ/IMG-6347.jpg",
    text: "探索我們在東京地區的專屬物件，尋找理想住宅或投資機會。",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#fafaff] py-20 px-6 text-center text-[#1c1c1c]"
    >
      <h2 className="text-3xl font-bold mb-10">服務項目</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="w-full max-w-sm">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-t-lg w-full h-56 object-cover"
            />
            <CardContent className="p-5">
              <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              <p className="text-sm text-[#1c1c1c] leading-relaxed">{service.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
