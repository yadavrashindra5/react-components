import styles from "./alerts.module.css";

import Box from "../Box/box";

interface IAlerts {
  className?: string;
  alertBody: string;
}

export default function Alerts(props: IAlerts) {
  return (
    <Box className={styles.alerts + " " + props.className}>
      <p>{props.alertBody}</p>
    </Box>
  );
}
