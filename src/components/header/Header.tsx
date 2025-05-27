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
} from "@/components/header/Header.styled";

const Header = () => {
  const router = useRouter();
  return (
    <Border>
      <Wrapper>
        <Title onClick={() => router.push("/")}>Фасады Сысолы</Title>
        <Shell>
          <div>Производство фасадов</div>
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
