import { useContext } from "react";
import { ModalContext } from "./modal";

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within the Modal Component");
  }

  return context;
};

export default useModal;
