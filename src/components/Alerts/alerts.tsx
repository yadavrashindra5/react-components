import styles from "./alerts.module.css";
import alert_circle from "./../../assets/alert-circle.svg";

import Box from "../Box/box";
import Text from "../Text/text";
import { HTMLProps } from "react";

type TAlerts = HTMLProps<HTMLDivElement> & {
  alertBody: string;
};

export default function Alerts({ alertBody, className = "" }: TAlerts) {
  return (
    <Box className={styles.alerts + " " + className}>
      <img src={alert_circle} alt="Alert Symbol" />
      <Text text={alertBody} />
    </Box>
  );
}
