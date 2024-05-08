import Accordion from "../../components/Accordion/accordion";
import { accordionData } from "../../data/sample/accordionData";

export default function AccordionSection() {
  return accordionData.map((accordion, index) => (
    <Accordion key={accordion.id} data-index={index}>
      <Accordion.Header headingText={accordion.header} />
      <Accordion.Body bodyText={accordion.body} />
    </Accordion>
  ));
}
