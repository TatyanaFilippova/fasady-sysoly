"use client";
import { useRouter } from "next/navigation";

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
} from "@/components/header/Header.styled";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuOpenServices, setMenuOpenServices] = useState(false);
  const options = [
    { value: "1", label: "Фасады с фрезеровкой", href: "/detailedPage" },
    {
      value: "2",
      label: "Фасады с интегрированными ручками",
      href: "/detailedPage",
    },
    { value: "3", label: "Радиусные фасады", href: "/RadiusFacadesPage" },
  ];

  const optionsServices = [
    { value: "1", label: "Покраска", href: "/detailedPage" },
    { value: "2", label: "Все товары и услуги", href: "/otherServicesPage" },
  ];

  const router = useRouter();
  return (
    <Border>
      <Wrapper>
        <Title onClick={() => router.push("/")}>Фасады Сысолы</Title>
        <Shell>
          <ShellMenu
            onMouseOver={() => {
              setMenuOpen(true);
            }}
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
          >
            <CompanyButton> Производство фасадов</CompanyButton>
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
          <Company type="button" onClick={() => router.push("/pricesPage")}>
            Цены
          </Company>
          <Company type="button" onClick={() => router.push("/companyPage")}>
            О компании
          </Company>
          <Company>Условия и гарантия</Company>
        </Shell>
        <Number>8 800 555 35 35</Number>
      </Wrapper>
    </Border>
  );
};

export default Header;
