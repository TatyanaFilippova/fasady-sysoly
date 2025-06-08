import {
  Container,
  Img,
  Title,
  Wrapper,
  ShellDescription,
} from "@/components/radiusFacades/RadiusFacades.styled";
import kitchenRadius from "@/img/kitchenRadius.png";
import facadesRadius from "@/img/facadesRadius.png";
import {
  ButtonFacade,
  Description,
} from "@/components/facadesMilling/FacadesMilling.styled";
import { useRouter } from "next/navigation";

const RadiusFacades = () => {
  const router = useRouter();
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
              Мягкие изгибы, обтекаемые формы и безупречная геометрия –
              радиусные фасады добавят интерьеру динамики и стиля.
            </Description>
            <Description>
              Идеальное решение для современных кухонь с нестандартной
              планировкой.
            </Description>
          </div>
          <div>
            <ButtonFacade onClick={() => router.push("/radius-facades")}>
              Подробнее
            </ButtonFacade>
          </div>
        </ShellDescription>
      </div>
    </Wrapper>
  );
};

export default RadiusFacades;
