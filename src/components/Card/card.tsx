import React from "react";
import styles from "./card.module.css";

import Box from "../Box/box";
import Heading from "../Heading/heading";
import Text from "../Text/text";

interface ICard {
  cardHeading: string;
  cardBody: string;
  cardFooter: React.ReactNode[];
}

export default function Card({ cardHeading, cardBody, cardFooter }: ICard) {
  return (
    <Box className={styles.card}>
      <div className={styles.card_header}>
        <Heading heading="h3" headingText={cardHeading} />
      </div>
      <hr />
      <div className={styles.card_body}>
        {typeof cardBody === "string" && <Text text={cardBody} />}
      </div>
      <hr />
      <div className={styles.card_footer}>
        {cardFooter.length <= 1
          ? cardFooter[0]
          : cardFooter.map((cardFoot) => (
              <div className={styles.card_footer_single_item}>{cardFoot}</div>
            ))}
      </div>
    </Box>
  );
}
