import styles from "./banner.module.css";
import alert_circle from "./../../assets/alert-circle.svg";

import Box from "../Box/box";
import Text from "../Text/text";
import { HTMLProps } from "react";

type TAlerts = HTMLProps<HTMLDivElement> & {
  bannerBody: string;
};

export default function Banner({ bannerBody, className = "" }: TAlerts) {
  return (
    <Box className={styles.alerts + " " + className}>
      <img src={alert_circle} alt="Alert Symbol" />
      <Text text={bannerBody} />
    </Box>
  );
}
