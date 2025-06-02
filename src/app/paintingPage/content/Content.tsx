"use client";
import {
  Description,
  Wrapper,
  Title,
  Img,
  Shell,
  DescriptionBlock,
  Card,
} from "@/app/paintingPage/content/Content.styled";
import { paintingCardList } from "@/helpers/paintingCardList";

const Content = () => {
  return (
    <Wrapper>
      <Description>
        Мы предлагаем высококачественную покраску не только МДФ фасадов, но и
        любых других материалов: дерева, металла, пластика, ЛДСП и даже стекла.
        Используем современные технологии и премиальные материалы, чтобы
        обеспечить безупречное, долговечное покрытие с идеальной адгезией.
        <ul>Почему стоит выбрать нашу покраску?</ul>
        <li>
          Универсальность– красим любые поверхности, от мебельных фасадов до
          интерьерных конструкций
        </li>
        <li>
          Широкий выбор покрытий– матовые, глянцевые, текстурные, металлики,
          эффект хамелеон и патина
        </li>
        <li>
          Стойкость к износу– защита от царапин, влаги, ультрафиолета и бытовой
          химии
        </li>
        <li>Точность цвета– подбор по RAL, NCS, Pantone или вашему образцу</li>
        <li>Без дефектов– ровное нанесение без подтеков и разводов</li>
      </Description>
      <Shell>
        {paintingCardList.map((card) => (
          <Card key={card.title}>
            <Img src={card.img} />
            <Title>{card.title}</Title>
            <DescriptionBlock>{card.description}</DescriptionBlock>
          </Card>
        ))}
      </Shell>
    </Wrapper>
  );
};

export default Content;
