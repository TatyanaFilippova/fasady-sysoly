"use client";
import {
  Wrapper,
  ImgContent,
  Shell,
  Title,
  Description,
} from "@/app/otherServicesPage/content/Content.styled";
import { otherServicesList } from "@/helpers/otherServicesList";

const Content = () => {
  return (
    <Wrapper>
      {otherServicesList.map((service) => (
        <Shell key={service.title}>
          <ImgContent src={service.img} />
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>
        </Shell>
      ))}
    </Wrapper>
  );
};

export default Content;
