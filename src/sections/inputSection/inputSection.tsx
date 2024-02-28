import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./inputSection.module.css";

import Input, { IInput } from "../../components/Input/input";
import Heading from "../../components/Heading/heading";
import Button from "../../components/Button/button";
import Box from "../../components/Box/box";

interface ErrorHandlingInput extends IInput {
  id?: number;
  errorMessage: string;
}

interface IInputValues {
  email: string;
  password: string;
}

export default function InputSection() {
  const [values, setValues] = useState<IInputValues>({
    email: "",
    password: "",
  });

  const sampleInput: ErrorHandlingInput[] = [
    {
      id: 1,
      labelId: "email",
      inputName: "Email",
      placeholder: "john.doe@example.com",
      pattern: "^([a-zA-Z0-9._]+)@([a-zA-Z]+).([a-zA-Z]{2,6})(.[a-z]{2,6})?$",
      type: "text",
      required: true,
      errorMessage: "Please enter a valid Email address.",
    },
    {
      id: 2,
      labelId: "password",
      inputName: "Password",
      placeholder: "●●●●●●●●",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      type: "password",
      required: true,
      errorMessage:
        "Password should be atleast of length 8 characters and include at least 1 letter, 1 number and 1 special character.",
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e?.target?.name]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Heading heading="h2" headingText="Sign In" />
        <hr />
        {sampleInput.map((input) => {
          return (
            <ErrorHandlingInput
              key={input.id}
              labelId={input.labelId}
              inputName={input.inputName}
              placeholder={input.placeholder}
              pattern={input.pattern}
              type={input.type}
              required={input.required}
              errorMessage={input.errorMessage}
              value={values[input.inputName as keyof IInputValues]}
              onChange={handleChange}
            />
          );
        })}
        <Button type="submit" buttonName="Submit" className="secondary" />
      </form>
    </Box>
  );
}

const ErrorHandlingInput = (props: ErrorHandlingInput) => {
  const {
    labelId,
    inputName,
    placeholder,
    pattern,
    type,
    required,
    value,
    onChange,
    errorMessage,
  } = props;

  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className={styles.hoc_input}>
      <Input
        labelId={labelId}
        inputName={inputName}
        placeholder={placeholder}
        pattern={pattern}
        type={type}
        required={required}
        value={value}
        focus={focus}
        onChange={onChange}
        onBlur={() => setFocus(true)}
        errorMessage={errorMessage}
      />
    </div>
  );
};
