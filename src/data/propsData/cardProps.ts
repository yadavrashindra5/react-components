import { PropsInfo } from "../Props";

export const cardsProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "Card component accepts six components namely cardHeading, subtitle, cardBody, cardFooter, breakPoints and className.",
  propsDetail: [
    {
      id: 1,
      name: "cardHeading",
      type: "string",
      description: "Represents the Heading of the card.",
    },
    {
      id: 2,
      name: "subtitle",
      type: "string",
      description:
        "Represents a subtitle which you can provide for your card. It is an optional property.",
    },
    {
      id: 3,
      name: "cardBody",
      type: "string (as of now)",
      description: "Represents the body of the card.",
    },
    {
      id: 4,
      name: "breakpoints",
      type: "boolean",
      description: "Represents whether you need the horizontal line or not.",
    },
    {
      id: 5,
      name: "cardFooter",
      type: "React.ReactNode[]",
      description: "Useful to display button or some other component.",
    },
    {
      id: 6,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
  ],
};
