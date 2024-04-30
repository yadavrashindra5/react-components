import { useEffect, useState } from "react";
import close_cross from "../../assets/close_cross.svg";
import tick_circle from "../../assets/tick_circle.svg";
import danger from "../../assets/warning.svg";
import warning from "../../assets/alert-circle.svg";
import styles from "./alert.module.scss";

interface AlertProps {
  className?: string;
  image?: string;
  heading?: string;
  message?: string;
  timer?: number;
  type?: "success" | "warning" | "danger" | "default";
}

function RootAlert({
  className,
  image = tick_circle,
  heading = "Default Heading",
  message = "Default Message",
  timer = 1500,
  type = "default",
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setVisible(false);
      console.log("This will be shown for 2 sec");
    }, timer);

    return () => {
      clearTimeout(time);
    };
  }, []);

  switch (type) {
    case "success":
      image = tick_circle;
      heading = "Success Heading";
      message = "Success Message";
      break;
    case "warning":
      image = warning;
      heading = "Warning Heading";
      message = "Warning Message";
      break;
    case "danger":
      image = danger;
      heading = "Danger Heading";
      message = "Danger Message";
      break;
    default:
      image = image;
      heading = heading;
      message = message;
      break;
  }

  return visible ? (
    <div className={`${styles.alert} ${styles[type]} ${className}`} {...props}>
      <button onClick={() => setVisible(false)} className={styles.close_button}>
        <img src={close_cross} alt="close button" />
      </button>
      <img src={image} alt="some image" />
      <div className={styles.alert_body}>
        <h1>{heading}</h1>
        <p>{message}</p>
      </div>
    </div>
  ) : null;
}

export default RootAlert;
