import { MouseEventHandler } from "react";
import styles from "./button.module.css";

export interface IButton {
  className?: string;
  buttonName: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  className = "",
  buttonName,
  onClick,
  disabled = false,
  type = "button",
}: IButton) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}
