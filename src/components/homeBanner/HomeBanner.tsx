import {
  Shell,
  Wrapper,
  Container,
  HomeBannericon,
  Title,
  Description,
} from "./HomeBanner.styled";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";

const HomeBanner = () => {
  return (
    <Wrapper>
      <Shell src={icon1.src} />
      <Container src={icon1.src} />
      <HomeBannericon src={icon2.src} />
      <Description>
        <Title>Мебельные фасады и не только</Title>
      </Description>
    </Wrapper>
  );
};

export default HomeBanner;
