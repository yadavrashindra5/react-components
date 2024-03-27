import { HTMLProps } from "react";
import styles from "./button.module.css";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  buttonName: string;
  disabled?: boolean;
  type?: "submit" | "button";
}

export default function Button({
  className = "",
  buttonName,
  disabled = false,
  ...props
}: ButtonProps) {
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
