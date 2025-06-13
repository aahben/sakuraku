"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const properties = [
  {
    src: "https://i.postimg.cc/449xfTFD/IMG-6270.jpg",
    title: "大塚物件 – 豐島區",
  },
  {
    src: "https://i.postimg.cc/qMG0qBc5/IMG-6246.jpg",
    title: "惠比壽物件 – 渋谷區",
  },
  {
    src: "https://i.postimg.cc/vm4d0WJJ/IMG-6347.jpg",
    title: "銀座二丁目物件 – 中央區",
  },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full bg-[#eef0f2] py-20 px-6 text-center text-[#1c1c1c]"
    >
      <h2 className="text-3xl font-bold mb-10">持有不動產</h2>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {properties.map((property, index) => (
            <CarouselItem key={index} className="flex flex-col items-center px-2">
              <img
                src={property.src}
                alt={property.title}
                className="w-full h-80 object-cover rounded-lg border border-[#daddd8] shadow-sm"
              />
              <p className="mt-4 text-lg font-medium">{property.title}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
