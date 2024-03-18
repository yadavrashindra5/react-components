import { HTMLProps } from "react";
import styles from "./button.module.css";

interface IButton extends HTMLProps<HTMLButtonElement> {
  buttonName: string;
  disabled?: boolean;
  type?: "submit" | "button";
}

export default function Button({
  className = "",
  buttonName,
  disabled = false,
  ...props
}: IButton) {
  return (
    <button
      className={styles.button + " " + className}
      disabled={disabled}
      {...props}
    >
      {buttonName}
    </button>
  );
}
