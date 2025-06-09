"use client";
import {
  Title,
  Img,
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
    <CardStyled>
      <Img src={cardImage} />
      <Title>{title}</Title>
      <DescriptionBlock>{summary}</DescriptionBlock>
    </CardStyled>
  );
};

export default Card;
