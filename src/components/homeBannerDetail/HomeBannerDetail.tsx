"use client";

import {
  Wrapper,
  ImgBanner,
  Title,
  Description,
  Shell,
  Container,
  ButtonHome,
} from "./HomeBannerDetail.styled";

interface HomeBannerDetailProps {
  title: string;
  summary: string;
  homeBanner: string;
}

const HomeBannerDetail = ({
  summary,
  homeBanner,
  title,
}: HomeBannerDetailProps) => {
  return (
    <Wrapper>
      <ImgBanner src={homeBanner} />
      <Container>
        <Shell>
          <Title>{title}</Title>
          <Description>{summary}</Description>
        </Shell>
        <ButtonHome>Заказать</ButtonHome>
      </Container>
    </Wrapper>
  );
};

export default HomeBannerDetail;
