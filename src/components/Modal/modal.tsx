import React, { ReactNode, useState } from "react";

import styles from "./modal.module.scss";
import cross from "../../assets/close_cross.svg";
import Button from "../Button/button";
import useModal from "./useModal";
import Heading, { THeading } from "../Heading/heading";

interface ModalValues {
  isOpen: boolean;
  handleClick: () => void;
}

interface ModalBodyProps {
  children: ReactNode;
  headingType: THeading;
  headingContent: string;
}

export const ModalContext = React.createContext<ModalValues | null>(null);

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, handleClick }}>
      {children}
    </ModalContext.Provider>
  );
}

function ModalButton({ buttonName }: { buttonName: string }) {
  const { handleClick } = useModal();
  return (
    <Button
      type="button"
      onClick={() => handleClick()}
      className="secondary_primary"
      buttonName={buttonName}
    />
  );
}

function ModalBody({
  children,
  headingType,
  headingContent,
  ...props
}: ModalBodyProps) {
  const { isOpen, handleClick } = useModal();

  return (
    isOpen && (
      <>
        <div className={styles.overlay} onClick={() => handleClick()} />
        <div className={styles.modal_body} {...props}>
          <div className={styles.heading}>
            <Heading heading={headingType}>{headingContent}</Heading>
            <button type="button" onClick={() => handleClick()}>
              <img src={cross} alt="close button" />
            </button>
          </div>
          <hr />
          <div className={styles.body}>{children}</div>
        </div>
      </>
    )
  );
}

Modal.Button = ModalButton;
Modal.Body = ModalBody;
