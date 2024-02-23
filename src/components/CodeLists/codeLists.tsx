import styles from "./codeLists.module.css";

export default function CodeLists({ textArr }: { textArr?: string[] }) {
  return (
    <ul className={styles.code_lists}>
      {textArr?.map((text, index) => {
        return <li key={index}>{text}</li>;
      })}
    </ul>
  );
}
