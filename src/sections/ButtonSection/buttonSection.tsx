import styles from "./buttonSection.module.css";

import Button, { IButton } from "../../components/Button/button";
import Heading from "../../components/Heading/heading";

export default function ButtonSection() {
  const buttonTypes: IButton[] = [
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
      // className: "disabled",
      disabled: true,
    },
  ];

  const secondaryButtonTypes: IButton[] = [
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
      // className: "secondary_disabled",
      disabled: true,
    },
  ];

  const tertiaryButtonTypes: IButton[] = [
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
