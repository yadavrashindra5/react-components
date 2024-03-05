import { PropsInfo } from "../Props";

export const buttonProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "The Button component accepts four props namely className, buttonName, onClick function and disabled.",
  propsDetail: [
    {
      id: 1,
      name: "buttonName",
      type: "string",
      description: "Represents the Button's name.",
    },
    {
      id: 2,
      name: "onClick",
      type: "function",
      description:
        "Provide a function which returns nothing. Can be used to update state.",
    },
    {
      id: 3,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
    {
      id: 4,
      name: "disabled",
      type: "boolean",
      description: "To disable a button.",
    },
  ],
};
