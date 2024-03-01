import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Homepage from "./page/homepage";
import ButtonSection from "./sections/ButtonSection/buttonSection";
import CardSection from "./sections/CardSection/cardSection";
import AlertSection from "./sections/alertSection/alertSection";
import InputSection from "./sections/inputSection/inputSection";
import Container from "./components/Container/container";
import Heading, { THeading } from "./components/Heading/heading";
import { ComponentsView } from "./sections/componentsView/componentsView";
import Text from "./components/Text/text";
import { accordionData } from "./helper/accordionData";
import Accordion from "./components/Accordion/accordion";
import CarouselSection from "./sections/carouselSection/CarouselSection";

function App() {
  const headingArr: THeading[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const appRoutes = [
    {
      id: 1,
      path: "/",
      element: (
        <main>
          <Homepage />
        </main>
      ),
    },
    {
      id: 2,
      path: "/heading",
      element: (
        <ComponentsView
          heading="Heading"
          subHeading="In HTML, <h1>, <h2>, and other heading elements (<h3>, <h4>, <h5>, <h6>) are used to define headings and subheadings in a document. These elements represent a hierarchy of importance and structure within the content."
          propsAccepted={[
            "The heading component expects three props namely heading, headingText and className.",
            "heading represent h1 till h6.",
            "headingText represents the text that needs to be displayed.",
            "className can be used to apply your own classname for styling purpose.",
          ]}
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
      ),
    },
    {
      id: 3,
      path: "/paragraph",
      element: (
        <ComponentsView
          heading="Paragraph"
          subHeading="In HTML, a <p> tag is used to define a paragraph. It is a block-level element that represents a block of text, and it typically adds vertical spacing before and after the content within it."
          propsAccepted={[
            "The Text component expects two props namely text and className. The Text component expects two props namely text and className.",
            "text represents the text you want to display.",
            "className can used to provide your own styling.",
          ]}
          children={
            <Text text="The quick brown fox jumps over the lazy dog." />
          }
        />
      ),
    },
    {
      id: 4,
      path: "/buttons",
      element: (
        <ComponentsView
          heading="Buttons"
          subHeading="A Button element is used to create a clickable button on a web page. Buttons are an essential part of web forms and user interfaces, allowing users to trigger actions or submit forms."
          propsAccepted={[
            "The Button component accepts four props namely className, buttonName, onClick function and disabled.",
            "className can be used to provide your own styling.",
            "buttonName as the name suggests, provide the name of the button.",
            "onClick is a function, where you can provide a function which returns a void or nothing.",
          ]}
          children={<ButtonSection />}
        />
      ),
    },
    {
      id: 5,
      path: "/simple-card",
      element: (
        <ComponentsView
          heading="Simple Card"
          subHeading="Card is a UI component that typically represents a container for content. They can be used to display a variety of content, such as text, images, buttons, and other interactive elements."
          propsAccepted={[
            "Card component accepts six components namely cardHeading, subtitle, cardBody, cardFooter, breakPoints and className",
            "cardHeading represents the Heading of the card",
            "subtitle represents a subtitle which you can provide for your card. It is an optional property.",
            "cardBody represents the body of the card, it accepts string as of now.",
            "breakPoints represents whether you need the horizontal line of not. It accepts boolean value.",
            "className for overriding current styling.",
          ]}
          children={<CardSection />}
        />
      ),
    },
    {
      id: 6,
      path: "/accordion",
      element: (
        <ComponentsView
          heading="Accordion"
          subHeading="An accordion component is a user interface (UI) element designed to organize and display content in a collapsible and expandable manner, allowing users to interact with different sections of information."
          propsAccepted={[
            "Accordion Component follow Compound Component Pattern. When initializing Accordion, we need to use Accordion.Header and Accordion.Body else we cannot use Accordion.",
            "Accordion.Header accepts headerText of string type.",
            "Accordion.Body accepts bodyText of string type.",
          ]}
          children={accordionData.map((accordion) => (
            <Accordion key={accordion.id}>
              <Accordion.Header headingText={accordion.header} />
              <Accordion.Body bodyText={accordion.body} />
            </Accordion>
          ))}
        />
      ),
    },
    {
      id: 7,
      path: "/alerts",
      element: (
        <ComponentsView
          heading="Alerts"
          subHeading="An alert component is a graphical element designed to convey important information or notify users about specific events within a web or application interface."
          propsAccepted={[
            "The alerts component accepts two props namely className and alertBody",
            "alertBody is the body of the alert.",
          ]}
          children={<AlertSection />}
        />
      ),
    },
    {
      id: 8,
      path: "/input",
      element: (
        <ComponentsView
          heading="Input"
          subHeading="An alert component is a graphical element designed to convey important information or notify users about specific events within a web or application interface."
          propsAccepted={[
            "labelId (type: string): A unique identifier for the associated label element. This is useful for associating the input with its corresponding label using the for attribute.",
            "inputName (type: string): The name attribute for the input element. This is used when submitting a form, and it identifies the input field in the form data.",
            "placeholder (type: string): A short hint or example text that is displayed in the input field before the user enters a value. It provides guidance on the expected input.",
            "pattern (type: string): A regular expression pattern that the input's value must match to be considered valid. This is often used for input validation.",
            "type (type: string): The type of the input field, such as 'text', 'number', 'email', etc. It defines the kind of data the input is designed to accept.",
            "required (type: boolean): A boolean indicating whether the input is required for form submission. If true, the user must fill in the input before submitting the form.",
            "value (type: string | undefined): The current value of the input field. It represents the content entered by the user.",
            "focus (type: boolean | undefined): If true, the input field will receive focus when the component mounts.",
            "onChange (type: (e: ChangeEvent<HTMLInputElement>) => void | undefined): A callback function invoked when the input value changes. It typically receives an event object with information about the change.",
            "onFocus (type: (e: ChangeEvent<HTMLInputElement>) => void | undefined): A callback function invoked when the input field receives focus. It also typically receives an event object.",
            "onBlur (type: () => void | undefined): A callback function invoked when the input field loses focus.",
            "errorMessage (type: string | undefined): An optional error message to display when the input value is invalid or when validation fails.",
            "className (type: string | undefined): An optional CSS class name to apply to the input element. This allows for custom styling.",
          ]}
          children={<InputSection />}
        />
      ),
    },
    {
      id: 9,
      path: "/carousel",
      element: (
        <ComponentsView
          heading="Carousel"
          subHeading="A carousel is a user interface (UI) component commonly used in web and mobile applications to display a series of images or content items in a rotating or sliding manner. It is often used to showcase multiple pieces of information or visual content in a confined space, allowing users to cycle through them one at a time."
          propsAccepted={[
            "Carousel component follows compound component pattern. We have Carousel, Carousel.Button and Carousel.Body components here.",
            "Carousel accepts loop, itemListLength, className and children.",
            "Carousel.Body accepts className and children.",
            "Carousel.Button accepts isNext, a boolean, if true, it represents the next slide button else it will represent previous button.",
          ]}
          children={<CarouselSection />}
        />
      ),
    },
  ];

  return (
    <Container>
      <Navbar />
      <hr />
      <Router>
        <Routes>
          {appRoutes.map((appRoute) => (
            <Route
              key={appRoute.id}
              path={appRoute.path}
              element={appRoute.element}
            />
          ))}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
