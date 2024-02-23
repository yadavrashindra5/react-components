import styles from "./buttonSection.module.css";

import Button, { IButton } from "../../components/Button/button";
import Box from "../../components/Box/box";

export default function ButtonSection() {
  const buttonTypes: IButton[] = [
    {
      buttonName: "Simple",
      className: "",
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: styles.primary,
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: styles.secondary,
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: styles.tertiary,
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: styles.danger,
      disabled: false,
    },
    {
      buttonName: "Disabled",
      className: "disabled",
      disabled: true,
    },
  ];

  return (
    <section className={styles.button_section}>
      {buttonTypes.map((button) => {
        return (
          <Button
            key={button.buttonName}
            buttonName={button.buttonName}
            className={button.className}
            disabled={button.disabled}
          />
        );
      })}
    </section>
  );
}
