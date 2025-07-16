"use client";

import menu from "./img/menu.png";
import icon from "./img/icon.png";
import {
  Wrapper,
  Shell,
  Title,
  Number,
  Border,
  Company,
  Menu,
  ShellMenu,
  ShellLabel,
  CompanyButton,
  MenuServices,
  MenuImg,
  Container,
  ShellTitle,
  Icon,
  ShellMobile,
} from "@/components/header/Header.styled";
import { useState } from "react";
import ModalMenu from "@/components/modalMenu/ModalMenu";

export const options = [
  { value: "1", label: "Фасады с фрезеровкой", href: "/facades-milling" },
  {
    value: "2",
    label: "Фасады с интегрированными ручками",
    href: "/facades-integrated-handles",
  },
  { value: "3", label: "Радиусные фасады", href: "/radius-facades" },
];

export const optionsServices = [
  { value: "1", label: "Покраска", href: "/painting" },
  { value: "2", label: "Все товары и услуги", href: "/other-services" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuOpenServices, setMenuOpenServices] = useState(false);
  const [isMenu, setMenu] = useState(false);
  return (
    <Border>
      <Wrapper>
        <ShellTitle href="/">
          <Icon src={icon.src} />
          <Title>Фасады Сысолы</Title>
        </ShellTitle>
        <Shell>
          <ShellMenu
            onMouseOver={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
          >
            <CompanyButton>Каталог фасадов</CompanyButton>
            {isMenuOpen && (
              <Menu>
                {options.map((item) => {
                  return (
                    <ShellLabel key={item.value} href={item.href}>
                      {item.label}
                    </ShellLabel>
                  );
                })}
              </Menu>
            )}
          </ShellMenu>
          <ShellMenu
            onMouseOver={() => {
              setMenuOpenServices(true);
            }}
            onMouseLeave={() => {
              setMenuOpenServices(false);
            }}
          >
            <CompanyButton>Товары и услуги</CompanyButton>
            {isMenuOpenServices && (
              <MenuServices>
                {optionsServices.map((item) => {
                  return (
                    <ShellLabel key={item.value} href={item.href}>
                      {item.label}
                    </ShellLabel>
                  );
                })}
              </MenuServices>
            )}
          </ShellMenu>
          <Company href="/prices">Цены</Company>
          <Company href="/company">О компании</Company>
          <Company href="/#section1">При заказе</Company>
        </Shell>
        <Container>
          <ShellMobile>
            <MenuImg
              src={menu.src}
              onClick={() => {
                setMenu(!isMenu);
              }}
            />
          </ShellMobile>
          <Number>8 (8212) 569-884</Number>
        </Container>
        {isMenu && <ModalMenu isMenu={isMenu} setMenu={setMenu}></ModalMenu>}
      </Wrapper>
    </Border>
  );
};

export default Header;
