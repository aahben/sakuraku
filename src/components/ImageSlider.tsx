"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/showcase/slide1.jpg",
  "/showcase/slide2.jpg",
  "/showcase/slide3.jpg",
];

export default function ImageSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider h-[60vh]">
      {images.map((src, i) => (
        <div key={i} className="keen-slider__slide">
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
