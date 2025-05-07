import {
  Title,
  Wrapper,
  Img,
  Shell,
  Container,
  ImgFacade,
  ImgPen,
  ImgWrapper,
} from "@/components/facadesIntegratedHandles/FacadesIntegratedHandles.styled";
import kitchenIntegrated from "../../img/kitchenIntegrated.png";
import { homeFacadesIntegrated } from "@/helpers/homeFacadesIntegrated";
import pen from "../../img/pen.png";
import {
  ButtonFacade,
  Description,
  ShellDescription,
} from "@/components/facadesMilling/FacadesMilling.styled";

const FacadesIntegratedHandles = () => {
  return (
    <>
      <Wrapper>
        <Title>Фасады с интегрированными ручками</Title>
        <Container>
          <ImgWrapper>
            <Img src={kitchenIntegrated.src} />
          </ImgWrapper>
          <Shell>
            {homeFacadesIntegrated.map((facade) => (
              <div key={facade.img}>
                <ImgFacade src={facade.img} />
              </div>
            ))}
            <ImgPen src={pen.src} />
          </Shell>
        </Container>{" "}
        <div>
          <ShellDescription>
            <div>
              <Description>
                Производство и покраска готовых фасадов с фрезеровкой
              </Description>
              <Description>Большой выбор фрезерово</Description>
              <Description>Красиво смотрятся, легко ухаживать</Description>
            </div>
            <div>
              {" "}
              <ButtonFacade>Посмотреть все варианты ручек</ButtonFacade>
            </div>
          </ShellDescription>
        </div>
      </Wrapper>
    </>
  );
};

export default FacadesIntegratedHandles;
