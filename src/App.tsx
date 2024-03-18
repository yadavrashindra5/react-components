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
import { headingProps } from "./data/propsData/headingProps";
import { paragraphProps } from "./data/propsData/paragraphProps";
import { buttonProps } from "./data/propsData/buttonProps";
import { cardsProps } from "./data/propsData/cardProps";
import { accordionProps } from "./data/propsData/accordionProps";
import { alertsProps } from "./data/propsData/alertsProps";
import { inputProps } from "./data/propsData/inputProps";
import { carouselProps } from "./data/propsData/carouselProps";
import Slider from "./components/Slider/slider";

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
          propsAccepted={headingProps}
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
          propsAccepted={paragraphProps}
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
          propsAccepted={buttonProps}
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
          propsAccepted={cardsProps}
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
          propsAccepted={accordionProps}
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
          propsAccepted={alertsProps}
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
          propsAccepted={inputProps}
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
          propsAccepted={carouselProps}
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
      <Slider />
    </Container>
  );
}

export default App;
