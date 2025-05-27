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
          <Title>Мебельные фасады и не только</Title>
          <BlockText>Обнови свою кухню прямо сейчас</BlockText>
          <ButtonHomeBanner onClick={() => setIsOpen(!isOpen)}>
            Связаться с нами
          </ButtonHomeBanner>
          {isOpen && (
            <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}></ModalWindow>
          )}
        </Description>
      </Wrapper>
    </Content>
  );
};

export default HomeBanner;
