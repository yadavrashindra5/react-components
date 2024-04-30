import React from "react";
import styles from "./card.module.css";

import Box from "../Box/box";
import Heading from "../Heading/heading";
import Text from "../Text/text";

export interface ICard {
  cardHeading: string;
  subtitle?: string;
  cardBody: string;
  cardFooter: React.ReactNode[];
  breakPoints?: boolean;
  className?: string;
}

export default function Card({
  cardHeading,
  subtitle,
  cardBody,
  cardFooter,
  breakPoints = true,
  className = "",
}: ICard) {
  return (
    <Box className={styles.card + " " + className}>
      <div className={styles.card_header}>
        <Heading heading="h3">{cardHeading}</Heading>
        {subtitle && <sub>{subtitle}</sub>}
      </div>
      {breakPoints && <hr />}
      <div className={styles.card_body}>
        {typeof cardBody === "string" && <Text text={cardBody} />}
      </div>
      {breakPoints && <hr />}
      <div className={styles.card_footer}>
        {cardFooter.length <= 1
          ? cardFooter[0]
          : cardFooter.map((cardFoot, index) => (
              <div key={index} className={styles.card_footer_single_item}>
                {cardFoot}
              </div>
            ))}
      </div>
    </Box>
  );
}
