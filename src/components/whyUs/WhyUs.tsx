"use client";

import {
  ShellText,
  Title,
  Wrapper,
  TitleDescription,
  Container,
  TextBlock,
  ShellWrapper,
  Box,
} from "@/components/whyUs/WhyUs.styled";
import { conditions, description } from "@/helpers/whyUsDescription";

const WhyUs = () => {
  return (
    <Wrapper>
      <ShellWrapper>
        <Box>
          <Title id="section1">Почему мы</Title>
          <ShellText>
            {description.map((item) => (
              <Container key={item.title}>
                <TitleDescription>{item.title}</TitleDescription>
                {item.text && <TextBlock>▪️ {item.text}</TextBlock>}
              </Container>
            ))}
          </ShellText>
        </Box>
        <Box>
          <Title>При заказе указать</Title>
          <ShellText>
            {conditions.map((item) => (
              <Container key={item.title}>
                <TitleDescription>{item.title}</TitleDescription>
                {item["1"] && <TextBlock>▪️ {item["1"]}</TextBlock>}
                {item["2"] && <TextBlock>▪️ {item["2"]}</TextBlock>}
                {item["3"] && <TextBlock>▪️ {item["3"]}</TextBlock>}
                {item["4"] && <TextBlock>▪️ {item["4"]}</TextBlock>}
                {item["5"] && <TextBlock>▪️ {item["5"]}</TextBlock>}
                {item["6"] && <TextBlock>▪️ {item["6"]}</TextBlock>}
              </Container>
            ))}
          </ShellText>
        </Box>
      </ShellWrapper>
    </Wrapper>
  );
};

export default WhyUs;
