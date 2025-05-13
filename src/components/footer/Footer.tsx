"use client";

import {
  Wrapper,
  Title,
  Container,
  TitleDescription,
  Description,
  Shell,
  ShellBlock,
  Number,
} from "@/components/footer/Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Фасады</Title>
        <Title>Сысолы</Title>
        <ShellBlock>
          <Shell>
            <TitleDescription>Производство фасадов</TitleDescription>
            <Description>Прямые фасады</Description>
            <Description>Фасады с интегрированными ручками</Description>
            <Description>Фасады с фрезеровками</Description>
          </Shell>
          <Shell>
            <TitleDescription>Услуги</TitleDescription>
            <Description>Покраска фасадов</Description>
            <Description>Покрытие пленкой</Description>
            <Description>Покраска любых изделий</Description>
          </Shell>
          <Shell>
            <TitleDescription>О компании</TitleDescription>
            <Description>Гарантия и сроки</Description>
            <Description>Цены</Description>
            <Description>Контактная информация</Description>
          </Shell>
          <Shell>
            <Description>г.Сыктывкар,Индустриальная, 2</Description>
            <Number>8 800 555 35 35</Number>
          </Shell>
        </ShellBlock>
      </Container>
    </Wrapper>
  );
};

export default Footer;
