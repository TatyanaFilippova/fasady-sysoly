"use client";
import {
  Wrapper,
  Title,
  ImgIcon,
  Shell,
  Description,
  WrapperIcon,
  ShellIcon,
  ShellText,
  ShellSummary,
  Container,
  WrapperCard,
} from "@/components/writeToUs/WriteToUs.styled";
import { iconList } from "@/helpers/iconList";
import Link from "next/link";

const WriteToUs = () => {
  return (
    <Wrapper>
      <Title>Напишите нам</Title>
      <Description>
        Чтобы заказать фасад или получить дополнительную консультацию
      </Description>
      <Container>
        <WrapperIcon>
          {iconList.map((icon) => (
            <WrapperCard key={icon.img}>
              <Link href={icon.link} target="_blank">
                <Shell>
                  <ShellIcon>
                    <ImgIcon src={icon.img} />
                  </ShellIcon>
                  <ShellText>{icon.title}</ShellText>
                  <ShellSummary>{icon.summary}</ShellSummary>
                </Shell>
              </Link>
            </WrapperCard>
          ))}
        </WrapperIcon>
      </Container>
    </Wrapper>
  );
};

export default WriteToUs;
