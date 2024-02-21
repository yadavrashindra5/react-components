import styles from "./text.module.css";

interface IText {
  text: string;
  className?: string;
}

export default function Text({ text, className }: IText) {
  return <p className={styles.text + " " + className}>{text}</p>;
}
