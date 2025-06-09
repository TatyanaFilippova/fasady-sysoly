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
import { Fragment } from "react";

const FacadesIntegratedHandles = () => {
  return (
    <>
      <Wrapper>
        <Title>Фасады с интегрированными ручками</Title>
        <Container>
          <ImgWrapper>
            <Img src={kitchenIntegrated.src} />
          </ImgWrapper>
          <Shell $length={homeFacadesIntegrated.length.toString()}>
            {homeFacadesIntegrated.map((facade) => (
              <Fragment key={facade.img}>
                <ImgFacade src={facade.img} />
              </Fragment>
            ))}
            <ImgPen src={pen.src} />
          </Shell>
        </Container>
        <div>
          <ShellDescription>
            <div>
              <Description>
                Беспроигрышное решение для современных кухонь: никаких
                выступающих элементов, только чистые линии и эргономичный
                профиль.
              </Description>
              <Description>
                Встроенная ручка – это не только красиво, но и практично: ничего
                не мешает при готовке, не цепляется за одежду и безопасно для
                детей.
              </Description>
            </div>
            <div>
              <ButtonFacade>Посмотреть все</ButtonFacade>
            </div>
          </ShellDescription>
        </div>
      </Wrapper>
    </>
  );
};

export default FacadesIntegratedHandles;
