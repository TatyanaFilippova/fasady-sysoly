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
} from "@/components/facadesMilling/FacadesMilling.styled";
import { homeFacadesList } from "@/helpers/homeFacadesList";
import kitchen from "../../img/kitchen.png";

const FacadesMilling = () => {
  return (
    <>
      <Wrapper>
        <Title>Фасады с фрезеровкой</Title>
        <Container>
          <Img src={kitchen.src} />
          <Shell>
            {homeFacadesList.map((facades) => (
              <ShellFacade key={facades.title}>
                <img src={facades.img} alt="кухня" />
                <div>&#34;{facades.title}&#34;</div>
              </ShellFacade>
            ))}
          </Shell>
        </Container>
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
            {" "}
            <ButtonFacade>Посмотреть все варианты фрезеровок</ButtonFacade>
          </div>
        </ShellDescription>
      </Wrapper>
    </>
  );
};

export default FacadesMilling;
