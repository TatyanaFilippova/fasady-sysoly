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
import ModalWindow from "@/components/modalWindow/ModalWindow";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <ImgBanner src={homeBanner} />
      <Container>
        <Shell>
          <Title>{title}</Title>
          <Description>{summary}</Description>
        </Shell>
        <ButtonHome onClick={() => setIsOpen(!isOpen)}>Заказать</ButtonHome>
      </Container>
      {isOpen && <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Wrapper>
  );
};

export default HomeBannerDetail;
