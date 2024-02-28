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
  focus?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  errorMessage?: string;
  className?: string;
}

export default function Input({
  labelId,
  inputName,
  pattern,
  placeholder = "",
  type,
  required,
  value,
  focus,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  className = "",
}: IInput) {
  return (
    <div className={styles.input + " " + className}>
      <label htmlFor={labelId}>{inputName}</label>
      <input
        className={focus ? "focussed_input" : ""}
        id={labelId}
        placeholder={placeholder ? placeholder : inputName}
        pattern={pattern}
        name={labelId}
        type={type}
        required={required}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
