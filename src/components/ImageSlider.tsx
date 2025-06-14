"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"]

export function ImageSlider() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000) // change interval here (ms)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const goToPrev = () => slider.current?.prev()
  const goToNext = () => slider.current?.next()

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <Button
          onClick={goToPrev}
          size="icon"
          variant="ghost"
          className="bg-white/80 hover:bg-white rounded-full shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </Button>
        <Button
          onClick={goToNext}
          size="icon"
          variant="ghost"
          className="bg-white/80 hover:bg-white rounded-full shadow-md"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </Button>
      </div>
    </div>
  )
}
