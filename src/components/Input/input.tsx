import { HTMLProps } from "react";
import styles from "./input.module.css";

export interface IInput extends HTMLProps<HTMLInputElement> {
  labelId: string;
  inputName: string;
  focus?: boolean;
  errorMessage?: string;
  className?: string;
}

export default function Input({
  labelId,
  inputName,
  pattern,
  placeholder = "",
  focus,
  errorMessage,
  className = "",
  ...props
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
        {...props}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
