import styles from "./box.module.css";

interface IBox {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className = "" }: IBox) {
  return <div className={styles.box + " " + className}>{children}</div>;
}
