import { useContext } from "react";
import { AccordionContext } from "./accordion";

export default function useAccordion() {
  const context = useContext(AccordionContext);

  if (context === null || !context) {
    throw new Error(
      "useAccordion must be used within the Accordion component."
    );
  }

  return context;
}
