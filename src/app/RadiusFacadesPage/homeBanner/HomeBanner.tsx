"use client";
import {
  ImgBlock,
  Wrapper,
  Title,
  Description,
} from "@/app/RadiusFacadesPage/homeBanner/HomeBanner.styled";
import homeBannerRadius from "./../../../img/homeBannerRadius.png";

const HomeBanner = () => {
  return (
    <Wrapper>
      <ImgBlock src={homeBannerRadius.src} />
      <Title>Радиусные фасады</Title>
      <Description>
        Краткое описание фасада с интегрированной ручкой
      </Description>
    </Wrapper>
  );
};

export default HomeBanner;
