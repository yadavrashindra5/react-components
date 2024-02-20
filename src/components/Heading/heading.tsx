import styles from "./heading.module.css";

export type THeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeading {
  heading: THeading;
  headingText: string;
  fontSize?: string;
  className?: string;
}

export default function Heading({
  heading,
  headingText,
  className = "",
}: IHeading) {
  switch (heading) {
    case "h2":
      return <h2 className={className + " " + styles.h2}>{headingText}</h2>;
    case "h3":
      return <h3 className={className + " " + styles.h3}>{headingText}</h3>;
    case "h4":
      return <h4 className={className + " " + styles.h4}>{headingText}</h4>;
    case "h5":
      return <h5 className={className + " " + styles.h5}>{headingText}</h5>;
    case "h6":
      return <h6 className={className + " " + styles.h6}>{headingText}</h6>;
    default:
      return <h1 className={className + " " + styles.h1}>{headingText}</h1>;
  }
}
