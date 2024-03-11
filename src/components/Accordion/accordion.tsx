import React, { MouseEventHandler, useContext, useState } from "react";
import styles from "./accordion.module.css";
import Heading from "../Heading/heading";
import Text from "../Text/text";

interface IAccordionContext {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
  handleOpen: MouseEventHandler<HTMLDivElement>;
}

const AccordionContext = React.createContext<IAccordionContext | null>(null);

function Accordion({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen, handleOpen }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
}

function Header({ headingText }: { headingText: string }) {
  const headerConsumer = useContext(AccordionContext);

  return (
    <div
      onClick={headerConsumer?.handleOpen}
      className={styles.accordion_heading}
    >
      <Heading heading="h3" headingText={headingText} />

      <img
        className={`${
          headerConsumer?.isOpen
            ? styles.accordion_icon
            : headerConsumer?.isOpen !== null
            ? styles.accordion_icon_out
            : ""
        }`}
        height="24px"
        width="24px"
        src="./src/assets/plus_icon.svg"
        alt="Down arrow"
      />
    </div>
  );
}

function Body({ bodyText }: { bodyText: string }) {
  const bodyConsumer = useContext(AccordionContext);

  return (
    <div
      className={
        styles.accordion_body + ` ${bodyConsumer?.isOpen ? styles.open : ""}`
      }
    >
      <hr />
      <Text text={bodyText} />
    </div>
  );
}

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
