import {
  ShellText,
  Title,
  Wrapper,
  TitleDescription,
  Container,
  TextBlock,
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
            <TextBlock>{item.text}</TextBlock>
          </Container>
        ))}
      </ShellText>
    </Wrapper>
  );
};

export default WhyUs;
