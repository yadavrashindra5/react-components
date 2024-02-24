import React, { useState } from "react";

import styles from "./modal.module.css";
import Box from "../Box/box";

const ModalContext = React.createContext({});

export default function Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
}

// export default function Modal() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <>
//       <button
//         className={isOpen ? styles.modal_button : styles.modal_button_close}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "&times;" : "Click to Open Modal"}
//       </button>
//       {isOpen && (
//         <Box>
//           <ModalHeading modalHeading="Modal Heading Example" />
//           <hr />
//         </Box>
//       )}
//     </>
//   );
// }

// function ModalHeading({ modalHeading }: { modalHeading: string }) {
//   return <h2>{modalHeading}</h2>;
// }
