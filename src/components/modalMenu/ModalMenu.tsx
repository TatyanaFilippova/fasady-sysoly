import {
  CloseIcon,
  Wrapper,
  Shell,
  Title,
  Description,
  Ul,
} from "@/app/../components/modalMenu/ModalMenu.styled";
import close from "./img/close.png";
import { useRouter } from "next/navigation";
import { options, optionsServices } from "@/components/header/Header";

interface ModalMenuProps {
  setMenu: (isMenu: boolean) => void;
  isMenu: boolean;
}

const ModalMenu = ({ setMenu, isMenu }: ModalMenuProps) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Shell>
        <Title>Меню</Title>
        <CloseIcon src={close.src} onClick={() => setMenu(!isMenu)} />
      </Shell>

      <Description>Производство фасадов </Description>
      {options.map((item) => (
        <Ul
          key={item.value}
          onClick={() => {
            router.push(item.href);
            setMenu(!isMenu);
          }}
        >
          {item.label}
        </Ul>
      ))}
      <Description>Покраска</Description>
      {optionsServices.map((item) => (
        <Ul
          key={item.value}
          onClick={() => {
            router.push(item.href);
            setMenu(!isMenu);
          }}
        >
          {item.label}
        </Ul>
      ))}
      <Description>Товары и услуги</Description>
      <Description>Гарантия и сроки</Description>
    </Wrapper>
  );
};

export default ModalMenu;
