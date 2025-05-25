"use client";
import {
  ImgHome,
  Wrapper,
  Title,
  Content,
  Button,
} from "@/app/otherServicesPage/homeBanner/HomeBanner.styled";
import homeBanner from "./../img/homeBanner.png";

const HomeBanner = () => {
  return (
    <Wrapper>
      <ImgHome src={homeBanner.src} />
      <Title>Список дополнительных услуг</Title>
      <Content>
        Ознакомьтесь со списком наших услуг, или перейдите сразу в цены
      </Content>
      <Button>Посмотреть цены</Button>
    </Wrapper>
  );
};

export default HomeBanner;
