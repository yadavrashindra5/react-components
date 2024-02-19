interface IHeading {
  heading: string;
  headingText: string;
  fontSize?: string;
  className: string;
}

export default function Heading({
  heading,
  headingText,
  fontSize = "24px",
  className = "",
  ...rest
}: IHeading) {
  const h1Style = {
    fontFamily: "poppins-black",
    fontSize: fontSize,
  };

  const h2Style = {
    fontFamily: "poppins-bold",
    fontSize: fontSize,
  };

  const h3Style = {
    fontFamily: "poppins-bold",
    fontSize: fontSize,
  };

  const h4Style = {
    fontFamily: "poppins-semi-bold",
    fontSize: fontSize,
  };

  const h5Style = {
    fontFamily: "poppins-semi-bold",
    fontSize: fontSize,
  };

  const h6Style = {
    fontFamily: "poppins-regular",
    fontSize: fontSize,
  };

  switch (heading) {
    case "h2":
      return (
        <h2 {...rest} className={className} style={h2Style}>
          {headingText}
        </h2>
      );
    case "h3":
      return (
        <h3 {...rest} className={className} style={h3Style}>
          {headingText}
        </h3>
      );
    case "h4":
      return (
        <h4 {...rest} className={className} style={h4Style}>
          {headingText}
        </h4>
      );
    case "h5":
      return (
        <h5 {...rest} className={className} style={h5Style}>
          {headingText}
        </h5>
      );
    case "h6":
      return (
        <h6 {...rest} className={className} style={h6Style}>
          {headingText}
        </h6>
      );
    default:
      return (
        <h1 {...rest} className={className} style={h1Style}>
          {headingText}
        </h1>
      );
  }
}
