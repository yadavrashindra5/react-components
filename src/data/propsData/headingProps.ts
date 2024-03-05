import { PropsInfo } from "../Props";

export const headingProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "The heading component expects three props namely heading, headingText and className.",
  propsDetail: [
    {
      id: 1,
      name: "heading",
      type: "string",
      description: "Represents headings form h1 till h6",
    },
    {
      id: 2,
      name: "headingText",
      type: "string",
      description: "Represents the text that needs to be displayed.",
    },
    {
      id: 3,
      name: "className",
      type: "string",
      description: "Enables you to add custom stylings.",
    },
  ],
};
