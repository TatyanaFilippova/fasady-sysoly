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
import { useRouter } from "next/navigation";

const OtherServices = () => {
  const router = useRouter();
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
          <ButtonFacade onClick={() => router.push("other-services")}>
            Посмотреть все услуги
          </ButtonFacade>
        </ShellDescription>
      </div>
    </Wrapper>
  );
};

export default OtherServices;
