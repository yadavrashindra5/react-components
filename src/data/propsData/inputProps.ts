import { PropsInfo } from "../Props";

export const inputProps: PropsInfo = {
  headers: ["ID", "Name", "Type", "Description"],
  caption: "Input Component accepts 13 props.",
  propsDetail: [
    {
      id: 1,
      name: "labelId",
      type: "string",
      description:
        "A unique identifier for the associated label element. This is useful for associating the input with its corresponding label using the for attribute.",
    },
    {
      id: 2,
      name: "inputName",
      type: "string",
      description:
        "The name attribute for the input element. This is used when submitting a form, and it identifies the input field in the form data.",
    },
    {
      id: 3,
      name: "placeholder",
      type: "string",
      description:
        "A short hint or example text that is displayed in the input field before the user enters a value. It provides guidance on the expected input.",
    },
    {
      id: 4,
      name: "pattern",
      type: "string",
      description:
        "A regular expression pattern that the input's value must match to be considered valid. This is often used for input validation.",
    },
    {
      id: 5,
      name: "type",
      type: "string",
      description:
        "The type of the input field, such as 'text', 'number', 'email', etc. It defines the kind of data the input is designed to accept.",
    },
    {
      id: 6,
      name: "required",
      type: "boolean",
      description:
        "A boolean indicating whether the input is required for form submission. If true, the user must fill in the input before submitting the form.",
    },
    {
      id: 7,
      name: "value",
      type: "string | undefined",
      description:
        "The current value of the input field. It represents the content entered by the user.",
    },
    {
      id: 8,
      name: "focus",
      type: "boolean | undefined",
      description:
        "If true, the input field will receive focus when the component mounts.",
    },
    {
      id: 9,
      name: "onChange",
      type: "(e: ChangeEvent<HTMLInputElement>) => void | undefined",
      description:
        "A callback function invoked when the input value changes. It typically receives an event object with information about the change.",
    },
    {
      id: 10,
      name: "onFocus",
      type: "(e: ChangeEvent<HTMLInputElement>) => void | undefined",
      description:
        "A callback function invoked when the input field receives focus. It also typically receives an event object.",
    },
    {
      id: 11,
      name: "onBlur",
      type: "() => void | undefined",
      description:
        "A callback function invoked when the input field loses focus.",
    },
    {
      id: 12,
      name: "errorMessage",
      type: "string | undefined",
      description:
        "An optional error message to display when the input value is invalid or when validation fails.",
    },
    {
      id: 13,
      name: "className",
      type: "string | undefined",
      description:
        "An optional CSS class name to apply to the input element. This allows for custom styling.",
    },
  ],
};
