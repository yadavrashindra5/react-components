"use client";
import React, { MouseEventHandler, useContext, useState } from "react";
import styles from "./accordion.module.css";
import Heading from "../Heading/heading";
import Text from "../Text/text";

import plus_icon from "./../../assets/plus_icon.svg";

interface IAccordionContext {
  isOpen: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
  handleOpen: MouseEventHandler<HTMLButtonElement>;
}

const AccordionContext = React.createContext<IAccordionContext | null>(null);

function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen, handleOpen }}>
      <div
        className={
          styles.accordion + ` ${isOpen ? styles.open : ""}` + " " + className
        }
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function Header({ headingText }: { headingText: string }) {
  const headerConsumer = useContext(AccordionContext);

  return (
    <div className={styles.accordion_heading}>
      <Heading heading="h3" headingText={headingText} />

      <button type="button" onClick={headerConsumer?.handleOpen}>
        <img
          className={`${
            headerConsumer?.isOpen
              ? styles.accordion_icon
              : headerConsumer?.isOpen !== null
              ? styles.accordion_icon_out
              : ""
          }`}
          src={plus_icon}
          alt={`${
            headerConsumer?.isOpen
              ? "Cross icon"
              : headerConsumer?.isOpen !== null
              ? "Plus icon"
              : "Cross icon"
          }`}
        />
      </button>
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
