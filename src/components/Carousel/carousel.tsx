import { useState } from "react";

import styles from "./carousel.module.css";
import CarouselLeft from "/src/assets/carousel-left.svg";
import CarouselRight from "/src/assets/carousel-right.svg";

export default function Carousel() {
  const imageArr = [
    {
      id: 1,
      src: "./src/assets/carouselImages/mercury.jpg",
      alt: "Mercury planet at the center.",
    },
    {
      id: 2,
      src: "./src/assets/carouselImages/venus.jpg",
      alt: "Venus planet at the center.",
    },
    {
      id: 3,
      src: "./src/assets/carouselImages/earth.jpg",
      alt: "Earth Planet at the center.",
    },
    {
      id: 4,
      src: "./src/assets/carouselImages/mars.jpg",
      alt: "Mars Planet at the center.",
    },
    {
      id: 5,
      src: "./src/assets/carouselImages/jupiter.jpg",
      alt: "Jupiter Planet at the center.",
    },
    {
      id: 6,
      src: "./src/assets/carouselImages/saturn.jpg",
      alt: "Saturn Planet at the center.",
    },
    {
      id: 7,
      src: "./src/assets/carouselImages/uranus.jpg",
      alt: "Uranus Planet at the center.",
    },
    {
      id: 8,
      src: "./src/assets/carouselImages/neptune.jpg",
      alt: "Neptune Planet at the center.",
    },
    {
      id: 9,
      src: "./src/assets/carouselImages/pluto.jpg",
      alt: "Pluto at the center.",
    },
  ];

  const [value, setValue] = useState<number>(0);

  const handleNext = () => {
    setValue((prevValue) => {
      if (prevValue < imageArr.length - 1) return prevValue + 1;
      else return 0;
    });
  };

  const handlePrev = () => {
    setValue((prevValue) => {
      if (prevValue === 0 || prevValue >= imageArr.length - 1) {
        return 0;
      }
      return prevValue - 1;
    });
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrev} className={styles.less_than}>
        <img src={CarouselLeft} alt="Carousel left icon" />
      </button>

      {imageArr.map((img) => (
        <img
          className={styles.carousel_item}
          loading={value === 0 ? "eager" : "lazy"}
          key={img.id}
          height={"auto"}
          width={"auto"}
          src={img.src}
          alt={img.alt}
          style={{ translate: `${-100 * value}%` }}
        />
      ))}

      <button onClick={handleNext} className={styles.greater_than}>
        <img src={CarouselRight} alt="Carousel Right icon" />
      </button>
    </div>
  );
}
