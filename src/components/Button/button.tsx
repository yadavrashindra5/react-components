import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
}

export default function Button({
  className = "",
  buttonName,
  ...props
}: ButtonProps) {
  return (
    <button className={styles.button + " " + className} {...props}>
      {buttonName}
    </button>
  );
}
