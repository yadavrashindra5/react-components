import styles from "./heroSection.module.css";

import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";

export default function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <Heading
        heading="h2"
        headingText="Divyue's Component Library ⚛️"
        className={styles.home_heading}
      />
      <Text text="A Simple Component Library built with React and CSS to create some personal projects." />
    </div>
  );
}
