import React from "react";
import Container from "../components/Container/container";
import Heading, { THeading } from "../components/Heading/heading";
import Text from "../components/Text/text";
import ComponentsView, {
  IComponentsView,
} from "../sections/componentsView/componentsView";
import HeroSection from "../sections/homepage/heroSection";
import ButtonSection from "../sections/ButtonSection/buttonSection";
import Card from "../components/Card/card";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import CardSection from "../sections/CardSection/cardSection";

type THomePageComponentType = IComponentsView & {
  id: number;
};

export default function Homepage() {
  const headingArr: THeading[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const homePageComponentArr: THomePageComponentType[] = [
    {
      id: 1,
      heading: "Heading",
      subHeading:
        "In HTML, <h1>, <h2>, and other heading elements (<h3>, <h4>, <h5>, <h6>) are used to define headings and subheadings in a document. These elements represent a hierarchy of importance and structure within the content.",
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
      subHeading:
        "In HTML, a <p> tag is used to define a paragraph. It is a block-level element that represents a block of text, and it typically adds vertical spacing before and after the content within it.",
      propsAccepted: [
        "The Text component expects two props namely text and className. The Text component expects two props namely text and className.",
        "text represents the text you want to display.",
        "className can used to provide your own styling.",
      ],
      children: <Text text="The quick brown fox jumps over the lazy dog." />,
    },
    {
      id: 3,
      heading: "Buttons",
      subHeading:
        "A Button element is used to create a clickable button on a web page. Buttons are an essential part of web forms and user interfaces, allowing users to trigger actions or submit forms.",
      propsAccepted: [
        "The Button component accepts four props namely className, buttonName, onClick function and disabled.",
        "className can be used to provide your own styling.",
        "buttonName as the name suggests, provide the name of the button.",
        "onClick is a function, where you can provide a function which returns a void or nothing.",
      ],
      children: <ButtonSection />,
    },
    {
      id: 4,
      heading: "Simple Card",
      subHeading:
        "Card is a UI component that typically represents a container for content. They can be used to display a variety of content, such as text, images, buttons, and other interactive elements.",
      propsAccepted: ["", ""],
      children: <CardSection />,
    },
  ];

  return (
    <Container>
      <section>
        <HeroSection />
        <hr />
        {homePageComponentArr.map((homePageComponent) => {
          return (
            <React.Fragment key={homePageComponent.id}>
              <ComponentsView
                heading={homePageComponent.heading}
                subHeading={homePageComponent.subHeading}
                propsAccepted={homePageComponent?.propsAccepted}
                children={homePageComponent.children}
              />
              <hr />
            </React.Fragment>
          );
        })}
      </section>
      <Input
        labelId="fullName"
        inputName="Full Name"
        pattern="\^[A-Za-z0-9]{3,16}$\"
        type="string"
        placeholder="Full Name"
        required={false}
      />
    </Container>
  );
}
