"use client";
import React, { HTMLProps, MouseEventHandler, useState } from "react";
import styles from "./accordion.module.css";
import Heading from "../Heading/heading";
import Text from "../Text/text";

import plus_icon from "./../../assets/plus_icon.svg";
import useAccordion from "./useAccordion";

interface IAccordionContext {
  isOpen: boolean | null;
  handleOpen: MouseEventHandler<HTMLButtonElement>;
}

interface AccordionProps extends HTMLProps<HTMLDivElement> {}

export const AccordionContext = React.createContext<IAccordionContext | null>(
  null
);

function Accordion({ children, className, ...props }: AccordionProps) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, handleOpen }}>
      <div
        className={
          styles.accordion + ` ${isOpen ? styles.open : ""}` + " " + className
        }
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function Header({ headingText }: { headingText: string }) {
  const { isOpen, handleOpen } = useAccordion();
  return (
    <div className={styles.accordion_heading}>
      <Heading
        className={isOpen ? styles.header_open : styles.header_close}
        heading="h3"
      >
        {headingText}
      </Heading>

      <button type="button" onClick={handleOpen}>
        <img
          className={`${
            isOpen
              ? styles.accordion_icon
              : isOpen !== null
              ? styles.accordion_icon_out
              : ""
          }`}
          src={plus_icon}
          alt={`${
            isOpen ? "Cross icon" : isOpen !== null ? "Plus icon" : "Cross icon"
          }`}
        />
      </button>
    </div>
  );
}

function Body({ bodyText }: { bodyText: string }) {
  const { isOpen } = useAccordion();

  return (
    <div className={styles.accordion_body + ` ${isOpen ? styles.open : ""}`}>
      <hr />
      <Text text={bodyText} />
    </div>
  );
}

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion;
