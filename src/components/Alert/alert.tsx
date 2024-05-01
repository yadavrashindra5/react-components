import { useEffect, useState } from "react";
// Static Assets
import close_cross from "../../assets/close_cross.svg";
import tick_circle from "../../assets/tick_circle.svg";
import danger from "../../assets/warning.svg";
import warning from "../../assets/alert-circle.svg";

import styles from "./alert.module.scss";
import Box from "../Box/box";
import { useMountTransition } from "../../hooks/useMountTransition";

interface AlertProps {
  className?: string;
  image?: string;
  heading?: string;
  message?: string;
  timer?: number;
  position?:
    | "bottom_left"
    | "bottom_right"
    | "top_right"
    | "top_left"
    | "top_center"
    | "bottom_center"
    | string;
  type?: "success" | "warning" | "danger" | "default" | string;
}

function Alert({
  className = "",
  image = tick_circle,
  heading = "Default Heading",
  message = "Default timer is 1500ms",
  timer = 1500,
  position = "top_left",
  type = "default",
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const hasTransitionedIn = useMountTransition(visible, 350);

  const isLeft = position.includes("left");
  const left = isLeft ? "left" : "";
  const isRight = position.includes("right");
  const right = isRight ? "right" : "";

  let timeInterval: number;

  useEffect(() => {
    if (timeInterval) {
      clearTimeout(timeInterval);
    }

    timeInterval = setTimeout(() => {
      setVisible(false);
    }, timer);

    return () => {
      clearTimeout(timeInterval);
    };
  }, [visible]);

  const handleClick = () => {
    setVisible(false);
    if (timeInterval) clearTimeout(timeInterval);
  };

  switch (type) {
    case "success":
      image = tick_circle;
      break;
    case "warning":
      image = warning;
      break;
    case "danger":
      image = danger;
      break;
    default:
      image = image;
      heading = heading;
      message = message;
      break;
  }

  return (
    (hasTransitionedIn || visible) && (
      <Box
        className={`${styles.alert} ${styles[position]} ${
          visible
            ? styles[`show_${isLeft ? left : isRight ? right : position}`]
            : !visible || hasTransitionedIn
            ? styles[`hide_${isLeft ? left : isRight ? right : position}`]
            : ""
        }`}
      >
        <div
          className={`${styles.alert_body} ${styles[type]} ${className}`}
          {...props}
        >
          <button onClick={() => handleClick()} className={styles.close_button}>
            <img src={close_cross} alt="close button" />
          </button>
          <img src={image} alt="some image" />
          <div className={styles.alert_inner_body}>
            <h1>{heading}</h1>
            <p>{message}</p>
          </div>
        </div>
      </Box>
    )
  );
}

export default Alert;
