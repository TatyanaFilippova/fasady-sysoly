import {
  Wrapper,
  Title,
  Img,
  Shell,
  Container,
  ShellFacade,
  Description,
  ShellDescription,
  ButtonFacade,
  ImgFacade,
  ImgWrapper,
  TItleFacade,
} from "@/components/facadesMilling/FacadesMilling.styled";
import { homeFacadesList } from "@/helpers/homeFacadesList";
import kitchen from "../../img/kitchen.png";
import { router } from "next/client";

const FacadesMilling = () => {
  return (
    <>
      <Wrapper>
        <Title>Фасады с фрезеровкой</Title>
        <Container>
          <ImgWrapper>
            <Img src={kitchen.src} />
          </ImgWrapper>
          <Shell>
            {homeFacadesList.map((facades) => (
              <ShellFacade key={facades.title}>
                <ImgFacade src={facades.img} alt="кухня" />
                <TItleFacade>&#34;{facades.title}&#34;</TItleFacade>
              </ShellFacade>
            ))}
          </Shell>
        </Container>
        <ShellDescription>
          <div>
            <Description>
              Идеальный способ добавить интерьеру индивидуальности и
              благородства.
            </Description>
            <Description>
              Точные линии, красивые узоры и глубокая проработка деталей –
              каждая кухня с такими фасадами выглядит по-настоящему дорого и
              стильно.
            </Description>
          </div>
          <div>
            <ButtonFacade onClick={() => router.push("/facades-milling")}>
              Посмотреть все
            </ButtonFacade>
          </div>
        </ShellDescription>
      </Wrapper>
    </>
  );
};

export default FacadesMilling;
