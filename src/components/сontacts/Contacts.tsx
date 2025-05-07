import {
  Title,
  Wrapper,
  Content,
  ShellText,
  MapShell,
} from "@/components/сontacts/Contacts.styled";
import { contactsList } from "@/helpers/contactsList";
import { Map } from "./Map";

const Contacts = () => {
  return (
    <Wrapper>
      <ShellText>
        <Title>Контакты</Title>
        <div>
          <Content>
            Телефон: <b>{contactsList.phone}</b>
          </Content>
          <Content>Телеграм: {contactsList.telegram}</Content>
          <Content>Группа в ВК: {contactsList.vk}</Content>
          <Content>
            Работаем:{" "}
            <ul>
              {contactsList.work.map((item) => (
                <li key={item}> • {item}</li>
              ))}
            </ul>
          </Content>
          <Content>{contactsList.location}</Content>
        </div>
      </ShellText>
      <MapShell>
        <Map />
      </MapShell>
    </Wrapper>
  );
};

export default Contacts;
