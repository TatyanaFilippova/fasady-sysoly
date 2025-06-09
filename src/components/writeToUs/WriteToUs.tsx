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
} from "@/components/writeToUs/WriteToUs.styled";
import { iconList } from "@/helpers/iconList";

const WriteToUs = () => {
  return (
    <Wrapper>
      <Title>Напишите нам</Title>
      <Description>
        Чтобы заказать фасад или получить дополнительную консультацию
      </Description>
      <WrapperIcon>
        {iconList.map((icon) => (
          <Shell key={icon.img}>
            <ShellIcon>
              <ImgIcon src={icon.img} />
            </ShellIcon>
            <ShellText>{icon.title}</ShellText>
            <ShellSummary>{icon.summary}</ShellSummary>
          </Shell>
        ))}
      </WrapperIcon>
    </Wrapper>
  );
};

export default WriteToUs;
