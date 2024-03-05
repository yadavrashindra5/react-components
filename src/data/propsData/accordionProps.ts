import { PropsInfo } from "../Props";

export const accordionProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "Accordion Component follow Compound Component Pattern. When initializing Accordion, we need to use Accordion.Header and Accordion.Body else we cannot use Accordion.",
  propsDetail: [
    {
      id: 1,
      name: "Accordion.Header",
      type: "React.ReactNode",
      description: "Accepts headerText of string type.",
    },
    {
      id: 2,
      name: "Accordion.Body",
      type: "React.ReactNode",
      description: "Accepts bodyText of string type.",
    },
  ],
};
