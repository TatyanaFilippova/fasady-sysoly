"use client";

import paint from "../img/paint.png";
import {
  Wrapper,
  ImgBanner,
  Title,
  Description,
  Shell,
  Container,
  ButtonHome,
} from "./HomeBanner.styled";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <ImgBanner src={paint.src} />
      <Container>
        <Shell>
          <Title>Покраска фасадов и прочих изделий</Title>
          <Description>
            Профессиональная покраска любых поверхностей – идеальное покрытие
            для ваших изделий!
          </Description>
        </Shell>
        <ButtonHome
          onClick={() => {
            router.push("/prices");
          }}
        >
          Посмотреть цены
        </ButtonHome>
      </Container>
    </Wrapper>
  );
};

export default HomeBanner;
