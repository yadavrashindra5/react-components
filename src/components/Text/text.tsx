interface IText {
  text: string;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
}

export default function Text({
  text,
  fontSize = "12px",
  marginTop = "12px",
  marginBottom = "12px",
}: IText) {
  const paragraphStyle = {
    fontSize: fontSize,
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return <p style={paragraphStyle}>{text}</p>;
}
