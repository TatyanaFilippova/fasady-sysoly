"use client";
import {
  ImgHome,
  Wrapper,
  Title,
  Content,
  Button,
  Container,
} from "@/app/other-services/homeBanner/HomeBanner.styled";
import homeBanner from "./../img/homeBanner.png";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ImgHome src={homeBanner.src} />
      <Container>
        <Title>Список дополнительных услуг</Title>
        <Content>
          Ознакомьтесь со списком наших услуг, или перейдите сразу в цены
        </Content>
        <Button type="button" onClick={() => router.push("/pricesPage")}>
          Посмотреть цены
        </Button>
      </Container>
    </Wrapper>
  );
};

export default HomeBanner;
