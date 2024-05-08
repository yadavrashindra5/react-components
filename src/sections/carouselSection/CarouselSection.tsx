import styles from "./carouselSection.module.css";

import Carousel from "../../components/Carousel/carousel";
import Heading from "../../components/Heading/heading";
import { carouselItems } from "./carouselItems";

export default function CarouselSection() {
  return (
    <div className={styles.carousel_section}>
      <div className={styles.carousel_single_section}>
        <Heading heading="h3" className={styles.carousel_heading}>
          No Loop
        </Heading>
        <Carousel
          className={styles.carousel_custom_style}
          loop={false}
          itemListLength={carouselItems.length}
        >
          <Carousel.Button isNext={false} />
          <Carousel.Body>
            {carouselItems.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="carousel_item"
              />
            ))}
          </Carousel.Body>
          <Carousel.Button isNext={true} />
        </Carousel>
      </div>
      <hr />
      <div className={styles.carousel_single_section}>
        <Heading heading="h3" className={styles.carousel_heading}>
          Loop
        </Heading>
        <Carousel
          loop={true}
          itemListLength={carouselItems.length}
          className={styles.carousel_custom_style}
        >
          <Carousel.Button isNext={false} />
          <Carousel.Body>
            {carouselItems.map((img) => (
              <img
                key={img.id}
                height={"auto"}
                width={"auto"}
                src={img.src}
                alt={img.alt}
                className="carousel_item"
              />
            ))}
          </Carousel.Body>
          <Carousel.Button isNext={true} />
        </Carousel>
      </div>
    </div>
  );
}
