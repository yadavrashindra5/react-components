import Accordion from "../../components/Accordion/accordion";
import { accordionData } from "../../data/sample/accordionData";

export default function AccordionSection() {
  return accordionData.map((accordion) => (
    <Accordion key={accordion.id}>
      <Accordion.Header headingText={accordion.header} />
      <Accordion.Body bodyText={accordion.body} />
    </Accordion>
  ));
}
