import styles from "./button.module.css";

export interface IButton {
  className?: string;
  buttonName: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  className = "",
  buttonName,
  onClick,
  disabled = false,
}: IButton) {
  return (
    <button
      type="button"
      className={className + " " + styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}