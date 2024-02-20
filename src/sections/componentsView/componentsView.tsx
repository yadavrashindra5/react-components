import styles from "./componentsView.module.css";

import Box from "../../components/Box/box";
import Heading from "../../components/Heading/heading";
import Text from "../../components/Text/text";

interface IComponentsView {
  heading: string;
  subHeading: string;
  children?: React.ReactNode;
}

export default function ComponentsView({
  heading,
  subHeading,
  children,
}: IComponentsView) {
  return (
    <section>
      <Heading heading="h3" headingText={heading} />
      <Text text={subHeading} fontSize="20px" />
      <Box className={styles.componentsView}>{children}</Box>
    </section>
  );
}
