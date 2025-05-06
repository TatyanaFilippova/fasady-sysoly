import {
  ShellText,
  Title,
  Wrapper,
  TitleDescription,
  Container,
} from "@/components/whyUs/WhyUs.styled";
import { description } from "@/helpers/whyUsDescription";

const WhyUs = () => {
  return (
    <Wrapper>
      <Title>Почему мы</Title>
      <ShellText>
        {description.map((item) => (
          <Container key={item.title}>
            <TitleDescription>{item.title}</TitleDescription>
            <div>{item.text}</div>
          </Container>
        ))}
      </ShellText>
    </Wrapper>
  );
};

export default WhyUs;
