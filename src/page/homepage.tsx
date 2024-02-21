import Container from "../components/Container/container";
import Heading, { THeading } from "../components/Heading/heading";
import Text from "../components/Text/text";
import ComponentsView from "../sections/componentsView/componentsView";
import HeroSection from "../sections/homepage/heroSection";

type THomePageComponentType = {
  id: number;
  heading: string;
  subHeading: string[];
  propsAccepted: string[];
  children: React.ReactNode | React.ReactNode[];
};

export default function Homepage() {
  const headingArr: THeading[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const homePageComponentArr: THomePageComponentType[] = [
    {
      id: 1,
      heading: "Heading",
      subHeading: [
        "In HTML, <h1>, <h2>, and other heading elements (<h3>, <h4>, <h5>, <h6>) are used to define headings and subheadings in a document. These elements represent a hierarchy of importance and structure within the content.",
      ],
      propsAccepted: [
        "The heading component expects three props namely heading, headingText and className.",
        "heading represent h1 till h6.",
        "headingText represents the text that needs to be displayed.",
        "className can be used to apply your own classname for styling purpose.",
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
      id: 2,
      heading: "Paragraph",
      subHeading: [
        "In HTML, a <p> tag is used to define a paragraph. It is a block-level element that represents a block of text, and it typically adds vertical spacing before and after the content within it.",
      ],
      propsAccepted: [
        "The Text component expects two props namely text and className. The Text component expects two props namely text and className.",
        "text represents the text you want to display.",
        "className can used to provide your own styling.",
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
              key={homePageComponent.id}
              heading={homePageComponent.heading}
              subHeading={homePageComponent.subHeading}
              propsAccepted={homePageComponent.propsAccepted}
              children={homePageComponent.children}
            />
          );
        })}
        <hr />
      </section>
    </Container>
  );
}
