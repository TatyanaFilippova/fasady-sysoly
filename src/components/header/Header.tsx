"use client";
import { useRouter } from "next/navigation";
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
  LabelMenu,
  ShellLabel,
  CompanyButton,
  MenuServices,
  MenuImg,
  Container,
  ShellTitle,
  Icon,
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

  const router = useRouter();

  return (
    <Border>
      <Wrapper>
        <ShellTitle>
          <Icon src={icon.src} />
          <Title onClick={() => router.push("/")}>Фасады Сысолы</Title>
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
                    <ShellLabel key={item.value}>
                      <LabelMenu onClick={() => router.push(item.href)}>
                        {item.label}
                      </LabelMenu>
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
                    <ShellLabel key={item.value}>
                      <LabelMenu onClick={() => router.push(item.href)}>
                        {item.label}
                      </LabelMenu>
                    </ShellLabel>
                  );
                })}
              </MenuServices>
            )}
          </ShellMenu>
          <Company type="button" onClick={() => router.push("/prices")}>
            Цены
          </Company>
          <Company type="button" onClick={() => router.push("/company")}>
            О компании
          </Company>
          <Company>Условия и гарантия</Company>
        </Shell>
        <Container>
          <MenuImg
            src={menu.src}
            onClick={() => {
              setMenu(!isMenu);
            }}
          />
          <Number>8 (8212) 569-884</Number>
        </Container>
        {isMenu && <ModalMenu isMenu={isMenu} setMenu={setMenu}></ModalMenu>}
      </Wrapper>
    </Border>
  );
};

export default Header;
