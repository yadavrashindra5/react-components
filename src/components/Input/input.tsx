import { ChangeEvent } from "react";
import styles from "./input.module.css";

export interface IInput {
  labelId: string;
  inputName: string;
  placeholder: string;
  pattern: string;
  type: string;
  required: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  labelId,
  inputName,
  pattern,
  placeholder = "",
  type,
  required,
  className,
}: IInput) {
  return (
    <div className={styles.input + " " + className}>
      <label htmlFor={labelId}>{inputName}</label>
      <input
        id={labelId}
        placeholder={placeholder ? placeholder : inputName}
        pattern={pattern}
        name={labelId}
        type={type}
        required={required}
      />
    </div>
  );
}
