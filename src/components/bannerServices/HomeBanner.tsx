"use client";

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

interface HomeBannerProps {
  title: string;
  summary: string;
  imgBanner: string;
}

const HomeBanner = ({ title, summary, imgBanner }: HomeBannerProps) => {
  const router = useRouter();
  return (
    <Wrapper>
      <ImgBanner src={imgBanner} />
      <Container>
        <Shell>
          <Title>{title}</Title>
          <Description>{summary}</Description>
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
