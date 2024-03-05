import { PropsInfo } from "../Props";

export const carouselProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption:
    "Carousel component follows compound component pattern. We have Carousel, Carousel.Button and Carousel.Body components here.",
  propsDetail: [
    {
      id: 1,
      name: "Carousel",
      type: "object",
      description:
        "Carousel component that follows the compound component pattern.",
    },
    {
      id: 2,
      name: "Carousel.Button",
      type: "object",
      description: "Carousel.Button component within the Carousel.",
    },
    {
      id: 3,
      name: "Carousel.Body",
      type: "object",
      description: "Carousel.Body component within the Carousel.",
    },
    {
      id: 4,
      name: "Carousel.loop",
      type: "boolean",
      description:
        "A boolean indicating whether the Carousel should loop back to the beginning after reaching the end.",
    },
    {
      id: 5,
      name: "Carousel.itemListLength",
      type: "number",
      description: "The length of the item list in the Carousel.",
    },
    {
      id: 6,
      name: "Carousel.className",
      type: "string",
      description:
        "An optional CSS class name to apply to the Carousel element for custom styling.",
    },
    {
      id: 7,
      name: "Carousel.children",
      type: "element",
      description: "The children elements passed to the Carousel component.",
    },
    {
      id: 8,
      name: "Carousel.Body.className",
      type: "string",
      description:
        "An optional CSS class name to apply to the Carousel.Body element for custom styling.",
    },
    {
      id: 9,
      name: "Carousel.Body.children",
      type: "element",
      description:
        "The children elements passed to the Carousel.Body component.",
    },
    {
      id: 10,
      name: "Carousel.Button.isNext",
      type: "boolean",
      description:
        "A boolean indicating whether the Carousel.Button represents the next slide button (true) or the previous button (false).",
    },
  ],
};
