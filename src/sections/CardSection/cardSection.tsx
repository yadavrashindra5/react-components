import styles from "./cardSection.module.css";

import Button from "../../components/Button/button";
import Card, { ICard } from "../../components/Card/card";

interface ICardDetails extends ICard {
  id: number;
}

export default function CardSection() {
  const cardDetails: ICardDetails[] = [
    {
      id: 1,
      cardHeading: "Heading",
      subtitle: "Card Subtitle",
      cardBody:
        "Aliquip qui incididunt deserunt ea. Lorem eiusmod commodo cillum magna reprehenderit ad enim commodo dolor eiusmod.",
      cardFooter: [
        <Button buttonName="Accept" className="secondary" />,
        <Button buttonName="Deny" className="danger" />,
      ],
    },
    {
      id: 2,
      cardHeading: "Heading",
      cardBody:
        "Aliquip qui incididunt deserunt ea. Lorem eiusmod commodo cillum magna reprehenderit ad enim commodo dolor eiusmod.",
      cardFooter: [<Button buttonName="Close" className="secondary_danger" />],
      breakPoints: false,
    },
  ];

  return (
    <div className={styles.card_section}>
      {cardDetails.map((cardDetail) => (
        <Card
          key={cardDetail.id}
          cardHeading={cardDetail.cardHeading}
          subtitle={cardDetail?.subtitle}
          cardBody={cardDetail.cardBody}
          cardFooter={cardDetail.cardFooter}
          breakPoints={cardDetail?.breakPoints}
        />
      ))}
    </div>
  );
}
