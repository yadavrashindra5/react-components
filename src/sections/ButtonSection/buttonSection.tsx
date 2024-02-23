import styles from "./buttonSection.module.css";

import Button, { IButton } from "../../components/Button/button";
import Heading from "../../components/Heading/heading";

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
      // className: "disabled",
      disabled: true,
    },
  ];

  const secondaryButtonTypes: IButton[] = [
    {
      buttonName: "Simple",
      className: styles.secondary_simple,
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: styles.secondary_primary,
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: styles.secondary_secondary,
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: styles.secondary_tertiary,
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: styles.secondary_danger,
      disabled: false,
    },
    {
      buttonName: "Disabled",
      // className: styles.secondary_disabled,
      disabled: true,
    },
  ];

  const tertiaryButtonTypes: IButton[] = [
    {
      buttonName: "Simple",
      className: styles.tertiary_simple,
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: styles.tertiary_primary,
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: styles.tertiary_secondary,
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: styles.tertiary_tertiary,
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: styles.tertiary_danger,
      disabled: false,
    },
    {
      buttonName: "Disabled",
      className: styles.tertiary_disabled,
      disabled: true,
    },
  ];

  return (
    <div className={styles.button_section}>
      <Heading heading="h3" headingText="🥇 Primary Buttons" />
      <div className={styles.button_part}>
        {buttonTypes.map((button, index) => {
          return (
            <Button
              key={index}
              buttonName={button.buttonName}
              className={button.className}
              disabled={button.disabled}
            />
          );
        })}
      </div>
      <hr />
      <Heading heading="h3" headingText="🥈 Secondary Buttons" />
      <div className={styles.button_part}>
        {secondaryButtonTypes.map((button, index) => {
          return (
            <Button
              key={index}
              buttonName={button.buttonName}
              className={button.className}
              disabled={button.disabled}
            />
          );
        })}
      </div>
      <hr />
      <Heading heading="h3" headingText="🥉 Tertiary Buttons" />
      <div className={styles.button_part}>
        {tertiaryButtonTypes.map((button, index) => {
          return (
            <Button
              key={index}
              buttonName={button.buttonName}
              className={button.className}
              disabled={button.disabled}
            />
          );
        })}
      </div>
    </div>
  );
}
