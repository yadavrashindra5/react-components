import Container from "../components/Container/container";
import Heading, { THeading } from "../components/Heading/heading";
import Text from "../components/Text/text";
import ComponentsView from "../sections/componentsView/componentsView";
import HeroSection from "../sections/homepage/heroSection";

export default function Homepage() {
  const headingArr: THeading[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const homePageComponentArr = [
    {
      heading: "Heading",
      subHeading: [
        "In HTML, <h1>, <h2>, and other heading elements (<h3>, <h4>, <h5>, <h6>) are used to define headings and subheadings in a document. These elements represent a hierarchy of importance and structure within the content.",
      ],
      children: headingArr.map((heading, index) => {
        return (
          <Heading
            key={heading}
            heading={heading}
            headingText={`H${
              index + 1
            } - The quick brown fox jumps over the lazy dog.`}
          />
        );
      }),
    },
    {
      heading: "Paragraph",
      subHeading: [
        "In HTML, a <p> tag is used to define a paragraph. It is a block-level element that represents a block of text, and it typically adds vertical spacing before and after the content within it.",
      ],
      children: <Text text="The quick brown fox jumps over the lazy dog." />,
    },
  ];

  return (
    <Container>
      <section>
        <HeroSection />
        <hr />
        {homePageComponentArr.map((homePageComponent) => {
          return (
            <ComponentsView
              heading={homePageComponent.heading}
              subHeading={homePageComponent.subHeading}
              children={homePageComponent.children}
            />
          );
        })}
        <hr />
      </section>
    </Container>
  );
}
