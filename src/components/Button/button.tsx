import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
