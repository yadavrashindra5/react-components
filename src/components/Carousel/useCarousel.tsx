import { useContext } from "react";
import { CarouselContext } from "./carousel";

export default function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within Carousel Context.");
  }

  return context;
}
