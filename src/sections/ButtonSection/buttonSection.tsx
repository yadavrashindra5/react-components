import styles from "./buttonSection.module.css";

import Button from "../../components/Button/button";
import Heading from "../../components/Heading/heading";

type ButtonProps = {
  buttonName: string;
  className: string;
  disabled: boolean;
};

export default function ButtonSection() {
  const buttonTypes: ButtonProps[] = [
    {
      buttonName: "Default",
      className: "",
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: "primary",
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: "secondary",
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: "tertiary",
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: "danger",
      disabled: false,
    },
    {
      buttonName: "Disabled",
      className: "disabled",
      disabled: true,
    },
  ];

  const secondaryButtonTypes: ButtonProps[] = [
    {
      buttonName: "Default",
      className: "secondary_simple",
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: "secondary_primary",
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: "secondary_secondary",
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: "secondary_tertiary",
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: "secondary_danger",
      disabled: false,
    },
    {
      buttonName: "Disabled",
      className: "secondary_disabled",
      disabled: true,
    },
  ];

  const tertiaryButtonTypes: ButtonProps[] = [
    {
      buttonName: "Default",
      className: "tertiary_simple",
      disabled: false,
    },
    {
      buttonName: "Primary",
      className: "tertiary_primary",
      disabled: false,
    },
    {
      buttonName: "Secondary",
      className: "tertiary_secondary",
      disabled: false,
    },
    {
      buttonName: "Tertiary",
      className: "tertiary_tertiary",
      disabled: false,
    },
    {
      buttonName: "Danger",
      className: "tertiary_danger",
      disabled: false,
    },
    {
      buttonName: "Disabled",
      className: "tertiary_disabled",
      disabled: true,
    },
  ];

  return (
    <div className={styles.button_section}>
      <Heading heading="h3">🥇 Primary Buttons</Heading>
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
      <Heading heading="h3">🥈 Secondary Buttons</Heading>
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
      <Heading heading="h3">🥉 Tertiary Buttons</Heading>
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
