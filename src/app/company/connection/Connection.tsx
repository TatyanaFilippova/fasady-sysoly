"use client";

import {
  Wrapper,
  Title,
  Content,
  Shell,
  WrapperMap,
} from "@/app/company/connection/Connection.styled";
import { contactsList } from "@/helpers/contactsList";
import { Map } from "@/components/сontacts/Map";

const Connection = () => {
  return (
    <Wrapper>
      <Title>Как с нами связаться</Title>
      <Content>
        <Content>
          Для того, чтобы обсудить детали, узнать подробнее об условиях, можете
          позвонить нам, написать в телеграмм, или перейти в группу ВК
        </Content>
        <Shell>
          <Content>
            • Телефон: <b>{contactsList.phone}</b>
          </Content>
          <Content> • Телеграм: {contactsList.telegram}</Content>
          <Content> • Группа в ВК: {contactsList.vk}</Content>
        </Shell>
        <Content>Мы находимся по адресу: {contactsList.location}</Content>
      </Content>
      <WrapperMap>
        <Map />
      </WrapperMap>
    </Wrapper>
  );
};

export default Connection;
