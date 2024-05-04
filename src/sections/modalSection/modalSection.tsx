import { createPortal } from "react-dom";
import Modal from "../../components/Modal/modal";
import Heading from "../../components/Heading/heading";

export default function ModalSection() {
  return (
    <Modal>
      <Modal.Button buttonName="Click on this button to open a modal" />
      {createPortal(
        <Modal.Body headingType="h2" headingContent="This is sample heading">
          <Heading heading="h3">This is some part of Modal Body</Heading>
        </Modal.Body>,
        document.getElementById("root")!
      )}
    </Modal>
  );
}
