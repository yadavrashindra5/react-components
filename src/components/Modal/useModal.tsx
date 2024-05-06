import { useContext } from "react";
import { ModalContext } from "./modal";

export default function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within the Modal Component");
  }

  return context;
}
