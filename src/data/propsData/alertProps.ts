import { PropsInfo } from "../Props";

export const alertProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "",
  propsDetail: [
    {
      id: 1,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
    {
      id: 2,
      name: "image",
      type: "string",
      description: "Add custom image to alert.",
    },
    {
      id: 3,
      name: "heading",
      type: "string",
      description: "Add Custom Heading to alert.",
    },
    {
      id: 4,
      name: "message",
      type: "string",
      description: "Add Custom Message to alert.",
    },
    {
      id: 5,
      name: "timer",
      type: "number",
      description: "Add custom value according to your requirement.",
    },
    {
      id: 6,
      name: "type",
      type: "success | warning | danger | default | string",
      description: "determines the type of alert.",
    },
  ],
};
