import { HTMLProps } from "react";
import styles from "./text.module.css";

interface IText {
  text: string;
  className?: string;
}

type TParagraph = HTMLProps<HTMLParagraphElement> & {
  text: string;
};

export default function Text({ text }: TParagraph) {
  return <p className={styles.text}>{text}</p>;
}
