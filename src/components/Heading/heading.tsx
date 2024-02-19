interface IHeading {
  heading: string;
  headingText: string;
}

export default function Heading({ heading, headingText }: IHeading) {
  const h2Style = {
    fontFamily: "poppins-semi-bold",
  };

  const h3Style = {
    fontFamily: "poppins-semi-bold",
  };

  const h4Style = {
    fontFamily: "poppins-semi-bold",
  };

  const h5Style = {
    fontFamily: "poppins-semi-bold",
  };

  const h6Style = {
    fontFamily: "poppins-semi-bold",
  };

  switch (heading) {
    case "h2":
      return <h2 style={h2Style}>{headingText}</h2>;
    case "h3":
      return <h3 style={h3Style}>{headingText}</h3>;
    case "h4":
      return <h4 style={h4Style}>{headingText}</h4>;
    case "h5":
      return <h5 style={h5Style}>{headingText}</h5>;
    case "h6":
      return <h6 style={h6Style}>{headingText}</h6>;
    default:
      return <h1>{headingText}</h1>;
  }
}
