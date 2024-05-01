import styles from "./heroSection.module.css";

import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import { Link } from "react-router-dom";

type TLinkString = {
  id: number;
  icon: {
    imagePath: string;
    alt: string;
  };
  path: string;
  name: string;
};

export default function HeroSection() {
  const linkString: TLinkString[] = [
    {
      id: 1,
      icon: {
        imagePath: "./src/assets/heading-square.svg",
        alt: "Heading",
      },
      path: "/heading",
      name: "Heading",
    },
    {
      id: 2,
      icon: {
        imagePath: "./src/assets/type-square.svg",
        alt: "Paragraph",
      },
      path: "/paragraph",
      name: "Paragraph",
    },
    {
      id: 3,
      icon: { imagePath: "./src/assets/button-square.svg", alt: "" },
      path: "/buttons",
      name: "Buttons",
    },
    {
      id: 4,
      icon: { imagePath: "./src/assets/card.svg", alt: "Card" },
      path: "/simple-card",
      name: "Simple Card",
    },
    {
      id: 5,
      icon: { imagePath: "./src/assets/chevron.svg", alt: "Accordion" },
      path: "/accordion",
      name: "Accordion",
    },
    {
      id: 6,
      icon: { imagePath: "./src/assets/alert-circle.svg", alt: "Alert icon" },
      path: "/banner",
      name: "Banner",
    },
    {
      id: 7,
      icon: { imagePath: "./src/assets/text-input.svg", alt: "Text input" },
      path: "/input",
      name: "Simple Input",
    },
    {
      id: 8,
      icon: {
        imagePath: "./src/assets/carousel-icon.svg",
        alt: "Carousel",
      },
      path: "/carousel",
      name: "Carousel",
    },
    {
      id: 9,
      icon: {
        imagePath: "./src/assets/carousel-icon.svg",
        alt: "Alerts",
      },
      path: "/alert",
      name: "Alert",
    },
  ];

  return (
    <div className={styles.hero_section}>
      <Heading heading="h2" className={styles.home_heading}>
        React Component Library ⚛️
      </Heading>
      <Text text="A Simple Component Library built with React and CSS to create some personal projects. Hosted on Github. Poppins font is used. react-router-dom is used for routing." />
      <hr />
      <Heading heading="h3" className={styles.home_heading}>
        Components List
      </Heading>
      <ul>
        {linkString.map((linkStr) => {
          return (
            <li key={linkStr.id}>
              <Link to={linkStr.path}>
                <img
                  height="20px"
                  width="20px"
                  src={linkStr.icon.imagePath}
                  alt={linkStr.icon.alt}
                />
                <p>{linkStr.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
