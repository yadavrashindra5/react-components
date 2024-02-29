import styles from "./heroSection.module.css";

import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import { Link } from "react-router-dom";

type TLinkString = {
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
      icon: {
        imagePath: "./src/assets/heading-square.svg",
        alt: "Heading",
      },
      path: "/heading",
      name: "Heading",
    },
    {
      icon: {
        imagePath: "./src/assets/type-square.svg",
        alt: "Paragraph",
      },
      path: "/paragraph",
      name: "Paragraph",
    },
    {
      icon: { imagePath: "./src/assets/button-square.svg", alt: "" },
      path: "/buttons",
      name: "Buttons",
    },
    {
      icon: { imagePath: "./src/assets/card.svg", alt: "Card" },
      path: "/simple-card",
      name: "Simple Card",
    },
    {
      icon: { imagePath: "./src/assets/chevron.svg", alt: "Accordion" },
      path: "/accordion",
      name: "Accordion",
    },
    {
      icon: { imagePath: "./src/assets/alert-circle.svg", alt: "Alert icon" },
      path: "/alerts",
      name: "Alerts",
    },
    {
      icon: { imagePath: "./src/assets/text-input.svg", alt: "Text input" },
      path: "/input",
      name: "Simple Input",
    },
  ];

  return (
    <div className={styles.hero_section}>
      <Heading
        heading="h2"
        headingText="React Component Library ⚛️"
        className={styles.home_heading}
      />
      <Text text="A Simple Component Library built with React and CSS to create some personal projects. Hosted on Github. Poppins font is used. react-router-dom is used for routing." />
      <hr />
      <Heading heading="h3" headingText="Components List" />
      <ul>
        {linkString.map((linkStr) => {
          return (
            <li>
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
