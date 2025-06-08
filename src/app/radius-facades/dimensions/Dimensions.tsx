"use client";
import scheme from "./../img/scheme.png";

import {
  Wrapper,
  ImgScheme,
  Content,
  Title,
  Container,
  ShellBlock,
} from "@/app/radius-facades/dimensions/Dimensions.styled";

const Dimensions = () => {
  return (
    <Wrapper>
      <ShellBlock>
        <Container>
          <Title>Большой спектр допустимых размеров</Title>
          <Content>
            Нормы допусков по радиальным фасадам:
            <ul> • хорда +/- 2мм;</ul>
            <ul> • высота фасада +/- 0,5 мм;</ul>
            <ul> • толщина фасада +/- 1 мм;</ul>
          </Content>
        </Container>
        <ImgScheme src={scheme.src} />
      </ShellBlock>
    </Wrapper>
  );
};

export default Dimensions;
