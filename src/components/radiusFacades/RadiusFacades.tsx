import {
  Container,
  Img,
  Title,
  Wrapper,
} from "@/components/radiusFacades/RadiusFacades.styled";
import kitchenRadius from "@/img/kitchenRadius.png";
import facadesRadius from "@/img/facadesRadius.png";
import {
  ButtonFacade,
  Description,
  ShellDescription,
} from "@/components/facadesMilling/FacadesMilling.styled";

const RadiusFacades = () => {
  return (
    <Wrapper>
      <Title>Радиусные фасады</Title>
      <Container>
        <div>
          <Img src={kitchenRadius.src} />
        </div>
        <div>
          <Img src={facadesRadius.src} />
        </div>
      </Container>
      <div>
        <ShellDescription>
          <div>
            <Description>
              Производство и покраска готовых фасадов с фрезеровкой
            </Description>
            <Description>
              Большой выбор фрезеровок Красиво смотрятся, легко ухаживать
            </Description>
          </div>
          <div>
            <ButtonFacade>Подробнее о радиусных фасадах</ButtonFacade>
          </div>
        </ShellDescription>
      </div>
    </Wrapper>
  );
};

export default RadiusFacades;
