"use client";

import homeBanner from "../../../img/homeBanner.png";
import {
  Wrapper,
  ImgBanner,
  Title,
  Description,
  Shell,
  Container,
  ButtonHome,
} from "../homeBanner/homeBanner.styled";

const HomeBanner = () => {
  return (
    <Wrapper>
      <ImgBanner src={homeBanner.src} />
      <Container>
        <Shell>
          <Title>Название раздела на две строки</Title>
          <Description>Краткое описание фасада</Description>
        </Shell>
        <ButtonHome>Заказать</ButtonHome>
      </Container>
    </Wrapper>
  );
};

export default HomeBanner;
