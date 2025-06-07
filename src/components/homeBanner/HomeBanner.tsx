import {
  Shell,
  Wrapper,
  Container,
  HomeBannericon,
  Title,
  Description,
  Content,
  BlockText,
  ButtonHomeBanner,
  Address,
} from "./HomeBanner.styled";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import React from "react";
import ModalWindow from "@/components/modalWindow/ModalWindow";

const HomeBanner = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Content>
      <Wrapper>
        <Shell src={icon1.src} />
        <Container src={icon1.src} />
        <HomeBannericon src={icon2.src} />
        <Description>
          <Title>
            Мебельные фасады <br /> и не только
          </Title>
          <BlockText>Фабрика по производству мебельных фасадов </BlockText>
          <ButtonHomeBanner onClick={() => setIsOpen(!isOpen)}>
            Связаться с нами
          </ButtonHomeBanner>
          {isOpen && (
            <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}></ModalWindow>
          )}
          <Address>г.Сыктывкар, ул.Гаражная 9/5</Address>
        </Description>
      </Wrapper>
    </Content>
  );
};

export default HomeBanner;
