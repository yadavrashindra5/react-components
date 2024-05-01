import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components Section
import Homepage from "./page/homepage";
import ButtonSection from "./sections/ButtonSection/buttonSection";
import CardSection from "./sections/CardSection/cardSection";
import InputSection from "./sections/inputSection/inputSection";
import CarouselSection from "./sections/carouselSection/CarouselSection";
import BannerSection from "./sections/bannerSection/bannerSection";
import { ComponentsView } from "./sections/componentsView/componentsView";

// Components imported directly
import Navbar from "./components/Navbar/navbar";
import Container from "./components/Container/container";
import Heading, { THeading } from "./components/Heading/heading";
import Text from "./components/Text/text";
import Accordion from "./components/Accordion/accordion";

// Components Props
import { headingProps } from "./data/propsData/headingProps";
import { paragraphProps } from "./data/propsData/paragraphProps";
import { buttonProps } from "./data/propsData/buttonProps";
import { cardsProps } from "./data/propsData/cardProps";
import { accordionProps } from "./data/propsData/accordionProps";
import { bannerProps } from "./data/propsData/bannerProps";
import { inputProps } from "./data/propsData/inputProps";
import { carouselProps } from "./data/propsData/carouselProps";

// Sample data of components
import { accordionData } from "./data/sample/accordionData";
import { alertProps } from "./data/propsData/alertProps";
import AlertSection from "./sections/alertSection/alertSection";
import AccordionSection from "./sections/accordionSection/accordionSection";

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
              <Heading key={heading} heading={heading}>
                H{index + 1} - The quick brown fox jumps over the lazy dog.
              </Heading>
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
          children={<AccordionSection />}
        />
      ),
    },
    {
      id: 7,
      path: "/banner",
      element: (
        <ComponentsView
          heading="Banners"
          subHeading="An alert component is a graphical element designed to convey important information or notify users about specific events within a web or application interface."
          propsAccepted={bannerProps}
          children={<BannerSection />}
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
    {
      id: 10,
      path: "/alert",
      element: (
        <ComponentsView
          heading="Alert"
          subHeading="The Alert component is a customizable alert system built using React and CSS animations. It provides users with visually appealing alerts that slide into view and out of view. The component supports various types of alerts, including success, warning, and danger, each with distinct styling and messaging. Users can dismiss alerts by clicking on a close button, and the component includes a timer option for automatic dismissal after a specified duration."
          propsAccepted={alertProps}
          children={<AlertSection />}
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
