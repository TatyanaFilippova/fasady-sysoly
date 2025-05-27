"use client";
import {
  ImgHome,
  Wrapper,
  Title,
  Content,
  Button,
} from "@/app/otherServicesPage/homeBanner/HomeBanner.styled";
import homeBanner from "./../img/homeBanner.png";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ImgHome src={homeBanner.src} />
      <Title>Список дополнительных услуг</Title>
      <Content>
        Ознакомьтесь со списком наших услуг, или перейдите сразу в цены
      </Content>
      <Button type="button" onClick={() => router.push("/pricesPage")}>
        Посмотреть цены
      </Button>
    </Wrapper>
  );
};

export default HomeBanner;
