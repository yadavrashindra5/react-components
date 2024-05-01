import { HTMLProps } from "react";
import styles from "./box.module.css";

type TBox = HTMLProps<HTMLDivElement>;

export default function Box({ children, className = "" }: TBox) {
  return <div className={styles.box + " " + className}>{children}</div>;
}
