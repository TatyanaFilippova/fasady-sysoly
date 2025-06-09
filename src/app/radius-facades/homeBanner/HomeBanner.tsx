"use client";
import {
  ImgBlock,
  Wrapper,
  Title,
  Description,
} from "@/app/radius-facades/homeBanner/HomeBanner.styled";
import banner from "../img/banner.png";

const HomeBanner = () => {
  return (
    <Wrapper>
      <ImgBlock src={banner.src} />
      <Title>Радиусные фасады</Title>
      <Description>
        Краткое описание фасада с интегрированной ручкой
      </Description>
    </Wrapper>
  );
};

export default HomeBanner;
