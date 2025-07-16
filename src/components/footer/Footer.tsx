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
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <Title>Фасады</Title>
          <Title>Сысолы</Title>
        </Link>
        <ShellBlock>
          <Shell>
            <TitleDescription>Каталог фасадов</TitleDescription>
            <Link href="/facades-milling">
              <Description>Фасады с фрезеровками</Description>
            </Link>
            <Link href="/facades-integrated-handles">
              <Description>Фасады с интегрированными ручками</Description>
            </Link>
            <Link href="/radius-facades">
              <Description>Радиусные фасады</Description>
            </Link>
          </Shell>
          <Shell>
            <TitleDescription>Услуги</TitleDescription>
            <Link href="/painting">
              <Description>Покраска фасадов</Description>
            </Link>
            <Link href="/other-services">
              <Description>Все товары и услуги</Description>
            </Link>
          </Shell>
          <Shell>
            <TitleDescription>О компании</TitleDescription>
            <Link href="/#section1">
              <Description>При заказе</Description>
            </Link>
            <Link href="/prices">
              <Description>Цены</Description>
            </Link>
            <Link href="/company">
              <Description>Контактная информация</Description>
            </Link>
          </Shell>
          <Shell>
            <Description>г.Сыктывкар, ул.Гаражная 9/5</Description>
            <Number>8 (8212) 569-884</Number>
          </Shell>
        </ShellBlock>
      </Container>
    </Wrapper>
  );
};

export default Footer;
