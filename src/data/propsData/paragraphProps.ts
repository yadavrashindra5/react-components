import { PropsInfo } from "../Props";

export const paragraphProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption: "The Text component expects two props namely text and className.",
  propsDetail: [
    {
      id: 1,
      name: "text",
      type: "string",
      description: "Represents the text you want to display.",
    },
    {
      id: 2,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
  ],
};
