import styles from "./componentsView.module.css";

import Box from "../../components/Box/box";
import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import CodeLists from "../../components/CodeLists/codeLists";
import { Link } from "react-router-dom";

export interface IComponentsView {
  heading: string;
  subHeading: string | string[];
  propsAccepted?: string[];
  children?: React.ReactNode;
}

const ComponentsView = ({
  heading,
  subHeading,
  propsAccepted,
  children,
}: IComponentsView) => {
  return (
    <section className={styles.components_view}>
      <Link to={"/"}>
        👈 <span>Go Home</span>
      </Link>
      <Heading heading="h3" headingText={heading} />
      {subHeading?.length > 1 && Array.isArray(subHeading)
        ? subHeading?.map((subHeadingText, index) => (
            <Text text={subHeadingText} key={index} />
          ))
        : typeof subHeading === "string" && <Text text={subHeading} />}
      <Box>
        <Heading heading="h4" headingText="🧾 Props Accepted:" />
        <CodeLists textArr={propsAccepted} />
      </Box>
      <Box className={styles.componentsView}>{children}</Box>
    </section>
  );
};

export { ComponentsView };
