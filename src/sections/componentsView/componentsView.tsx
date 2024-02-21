import styles from "./componentsView.module.css";

import Box from "../../components/Box/box";
import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";
import CodeLists from "../../components/CodeLists/codeLists";

interface IComponentsView {
  heading: string;
  subHeading: string[];
  propsAccepted: string[];
  children?: React.ReactNode;
}

export default function ComponentsView({
  heading,
  subHeading,
  propsAccepted,
  children,
}: IComponentsView) {
  return (
    <section className={styles.components_view}>
      <Heading heading="h3" headingText={heading} />
      {subHeading.length === 1 ? (
        <Text text={subHeading[0]} />
      ) : (
        subHeading.map((subHeadingText, index) => (
          <Text text={subHeadingText} key={index} />
        ))
      )}
      <Box>
        <Heading heading="h4" headingText="🧾 Props Accepted:" />
        <CodeLists textArr={propsAccepted} />
      </Box>
      <Box className={styles.componentsView}>{children}</Box>
    </section>
  );
}
