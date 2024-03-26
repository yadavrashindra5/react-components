import { HTMLProps } from "react";
import styles from "./heading.module.css";

export type THeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeading extends HTMLProps<HTMLHeadingElement> {
  heading: THeading;
}

export default function Heading({
  heading,
  children,
  className,
  ...props
}: IHeading) {
  const HeadingText: THeading = heading;

  return (
    <HeadingText className={styles[heading] + " " + className} {...props}>
      {children}
    </HeadingText>
  );
}
