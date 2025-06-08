"use client";
import {
  Title,
  Img,
  Shell,
  DescriptionBlock,
  CardStyled,
} from "@/app/painting/content/Content.styled";

interface ICard {
  title: string;
  summary: string;
  cardImage: string;
}
const Card = ({ title, summary, cardImage }: ICard) => {
  return (
    <Shell>
      <CardStyled>
        <Img src={cardImage} />
        <Title>{title}</Title>
        <DescriptionBlock>{summary}</DescriptionBlock>
      </CardStyled>
    </Shell>
  );
};

export default Card;
