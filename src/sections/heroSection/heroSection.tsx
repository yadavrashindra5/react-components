import styles from "./heroSection.module.css";

import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import { Link } from "react-router-dom";

interface ILinkString {
  path: string;
  name: string;
}

export default function HeroSection() {
  const linkString: ILinkString[] = [
    { path: "/heading", name: "Heading" },
    { path: "/paragraph", name: "Paragraph" },
    { path: "/buttons", name: "Buttons" },
    { path: "/simple-card", name: "Simple Card" },
    { path: "/accordion", name: "Accordion" },
    { path: "/alerts", name: "Alerts" },
    { path: "/input", name: "Simple Input" },
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
                🔗 <span>{linkStr.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
