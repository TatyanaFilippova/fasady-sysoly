"use client";
import scheme from "./../img/scheme.png";
import scheme2 from "./../img/scheme2.png";
import {
  Wrapper,
  Shell,
  ImgScheme,
  Content,
  Title,
  Container,
  ShellBlock,
} from "@/app/RadiusFacadesPage/dimensions/Dimensions.styled";

const Dimensions = () => {
  return (
    <Wrapper>
      <Shell>
        <ImgScheme src={scheme.src} />
      </Shell>
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
        <ImgScheme src={scheme2.src} />
      </ShellBlock>
    </Wrapper>
  );
};

export default Dimensions;
