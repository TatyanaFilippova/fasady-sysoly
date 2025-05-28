"use client";
import { useRouter } from "next/navigation";

import {
  Wrapper,
  Shell,
  Title,
  Number,
  Border,
  Prices,
  Services,
  Company,
  Menu,
  ShellMenu,
  LabelMenu,
  ShellLabel,
} from "@/components/header/Header.styled";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const options = [
    { value: "1", label: "Фасады с фрезеровкой", href: "/detailedPage" },
    {
      value: "2",
      label: "Фасады с интегрированными ручками",
      href: "/detailedPage",
    },
    { value: "3", label: "Радиусные фасады", href: "/RadiusFacadesPage" },
  ];

  const router = useRouter();
  return (
    <Border>
      <Wrapper>
        <Title onClick={() => router.push("/")}>Фасады Сысолы</Title>
        <Shell>
          <ShellMenu
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            <Company> Производство фасадов</Company>

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

          <Company type="button" onClick={() => router.push("/companyPage")}>
            О компании
          </Company>
          <Services
            type="button"
            onClick={() => router.push("/otherServicesPage")}
          >
            Услуги
          </Services>
          <Prices type="button" onClick={() => router.push("/pricesPage")}>
            Цены
          </Prices>
          <div>Горантия и сроки</div>
        </Shell>
        <Number>8 800 555 35 35</Number>
      </Wrapper>
    </Border>
  );
};

export default Header;
