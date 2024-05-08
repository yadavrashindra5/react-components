import React, { useState } from "react";

import CarouselLeft from "/src/assets/carousel-left.svg";
import CarouselRight from "/src/assets/carousel-right.svg";

import styles from "./carousel.module.css";
import useCarousel from "./useCarousel";

interface ICarousel {
  loop: boolean;
  children?: React.ReactNode;
  className?: string;
  itemListLength: number;
}

interface ICarouselBody {
  className?: string;
  children: React.ReactNode;
}

interface ICarouselContext {
  value: number;
  handleNext: () => void;
  handlePrev: () => void;
}

interface ICarouselButton {
  isNext: boolean;
}

export const CarouselContext = React.createContext<ICarouselContext | null>(
  null
);

export default function Carousel({
  loop = true,
  children,
  itemListLength,
  className = "",
}: ICarousel) {
  const [value, setValue] = useState<number>(0);
  let handleNext, handlePrev;

  if (loop) {
    handleNext = () => {
      setValue((prevValue) => {
        if (prevValue < itemListLength - 1) {
          return prevValue + 1;
        } else {
          return 0;
        }
      });
    };

    handlePrev = () => {
      setValue((prevValue) => {
        if (prevValue === 0 || prevValue >= itemListLength - 1) {
          return 0;
        }
        return prevValue - 1;
      });
    };
  } else {
    handleNext = () => {
      if (value < itemListLength - 1) {
        setValue(value + 1);
      }
    };

    handlePrev = () => {
      if (value !== 0 && value <= itemListLength - 1) {
        setValue(value - 1);
      }
    };
  }

  return (
    <CarouselContext.Provider value={{ value, handleNext, handlePrev }}>
      <div className={className + " " + styles.carousel}>{children}</div>
    </CarouselContext.Provider>
  );
}

function CarouselButton({ isNext }: ICarouselButton) {
  const { handleNext, handlePrev } = useCarousel();

  return (
    <button
      onClick={isNext ? handleNext : handlePrev}
      className={isNext ? styles.greater_than : styles.less_than}
    >
      <img
        src={isNext ? CarouselRight : CarouselLeft}
        alt={
          isNext ? "Carousel Right Button Icon" : "Carousel Left Button Icon"
        }
      />
    </button>
  );
}

export const CarouselBody = ({ className = "", children }: ICarouselBody) => {
  const { value } = useCarousel();

  return (
    <div
      className={styles.carousel_item_div + " " + className}
      style={{ translate: `${-100 * value}%` }}
    >
      {children}
    </div>
  );
};

Carousel.Body = CarouselBody;
Carousel.Button = CarouselButton;
