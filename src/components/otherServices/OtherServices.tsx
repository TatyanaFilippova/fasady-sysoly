import {
  Container,
  Img,
  Title,
  Wrapper,
  ButtonFacade,
  Description,
  ShellDescription,
} from "@/components/otherServices/OtherServices.styled";
import services from "@/img/services.png";

const OtherServices = () => {
  return (
    <Wrapper>
      <Title>Другие услуги</Title>
      <Container>
        <div>
          <Img src={services.src} />
          <Description>Покраска в камере</Description>
        </div>
        <div>
          <Img src={services.src} />
          <Description>Уборка помещений</Description>
        </div>
      </Container>
      <div>
        <ShellDescription>
          <ButtonFacade>Посмотреть все услуги</ButtonFacade>
        </ShellDescription>
      </div>
    </Wrapper>
  );
};

export default OtherServices;
