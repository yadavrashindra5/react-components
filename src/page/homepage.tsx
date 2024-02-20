import Container from "../components/Container/container";
import Heading, { THeading } from "../components/Heading/heading";
import ComponentsView from "../sections/componentsView/componentsView";
import HeroSection from "../sections/homepage/heroSection";

export default function Homepage() {
  const headingArr: THeading[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  return (
    <Container>
      <section>
        <HeroSection />
        <hr />
        <ComponentsView
          heading="Heading"
          subHeading="In HTML, <h1>, <h2>, and other heading elements (<h3>, <h4>, <h5>, <h6>) are used to define headings and subheadings in a document. These elements represent a hierarchy of importance and structure within the content."
          children={headingArr.map((heading, index) => {
            return (
              <Heading
                key={heading}
                heading={heading}
                headingText={`H${
                  index + 1
                } - The quick brown fox jumps over the lazy dog.`}
              />
            );
          })}
        />
      </section>
    </Container>
  );
}
