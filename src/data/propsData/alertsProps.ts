import { PropsInfo } from "../Props";

export const alertsProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "The alerts component accepts two props namely className and alertBody",
  propsDetail: [
    {
      id: 1,
      name: "alertBody",
      type: "string",
      description: "Represents the text of the alert.",
    },
    {
      id: 2,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
  ],
};
