import React, { MouseEventHandler, useContext, useState } from "react";
import styles from "./accordion.module.css";
import Heading from "../Heading/heading";
import Text from "../Text/text";

interface IAccordionContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: MouseEventHandler<HTMLDivElement>;
}

const AccordionContext = React.createContext<IAccordionContext | null>(null);

function Accordion({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <p>{!headerConsumer?.isOpen ? <span>⬇️</span> : <span>⬆️</span>}</p>
    </div>
  );
}

function Body({ bodyText }: { bodyText: string }) {
  const bodyConsumer = useContext(AccordionContext);
  return (
    bodyConsumer?.isOpen && (
      <div className={styles.accordion_body_animate}>
        <hr />
        <Text
          className={bodyConsumer?.isOpen && `${styles.accordion_body}`}
          text={bodyText}
        />
      </div>
    )
  );
}

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;