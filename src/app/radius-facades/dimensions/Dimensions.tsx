"use client";
import scheme1 from "./../img/scheme1.png";
import scheme2 from "./../img/scheme2.png";

import {
  Wrapper,
  ImgScheme,
  Content,
  Title,
  Container,
  ShellBlock,
  ShellBlockImg,
} from "@/app/radius-facades/dimensions/Dimensions.styled";

const Dimensions = () => {
  return (
    <Wrapper>
      <ShellBlock>
        <ShellBlockImg>
          <Title>Наружный фасад</Title>
          <ImgScheme src={scheme1.src} />
        </ShellBlockImg>
        <ShellBlockImg>
          <Title>Внутренний фасад</Title>
          <ImgScheme src={scheme2.src} />
        </ShellBlockImg>
        <Container>
          <Title>Большой спектр допустимых размеров</Title>
          <Content>
            Нормы допусков по радиальным фасадам:
            <ul> • хорда +/- 2мм;</ul>
            <ul> • высота фасада +/- 0,5 мм;</ul>
            <ul> • толщина фасада +/- 1 мм;</ul>
          </Content>
        </Container>
      </ShellBlock>
    </Wrapper>
  );
};

export default Dimensions;
