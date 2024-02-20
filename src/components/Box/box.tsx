import styles from "./box.module.css";

interface IBox {
  children?: React.ReactNode;
  className?: string;
}

export default function Box({ children, className = styles.box }: IBox) {
  return <div className={className}>{children}</div>;
}
