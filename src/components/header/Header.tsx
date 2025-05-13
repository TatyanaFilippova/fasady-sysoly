"use client";

import {
  Wrapper,
  Shell,
  Title,
  Number,
  Border,
} from "@/components/header/Header.styled";

const Header = () => {
  return (
    <Border>
      <Wrapper>
        <Title>Фасады Сысолы</Title>
        <Shell>
          <div>Производство фасадов</div>
          <div>Покраска</div>
          <div>Услуги</div>
          <div>Прочие товары</div>
          <div>Горантия и сроки</div>
        </Shell>
        <Number>8 800 555 35 35</Number>
      </Wrapper>
    </Border>
  );
};

export default Header;
