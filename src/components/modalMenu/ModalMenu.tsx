import {
  CloseIcon,
  Wrapper,
  Shell,
  Title,
  Description,
  Ul,
  DescriptionCursor,
  Number,
  WrapperMenu,
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
      <WrapperMenu>
        <Shell>
          <Title>Меню</Title>
          <CloseIcon src={close.src} onClick={() => setMenu(!isMenu)} />
        </Shell>
        <Description>Каталог фасадов</Description>
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
        <DescriptionCursor
          onClick={() => {
            router.push("/painting");
          }}
        >
          Покраска и прочие услуги
        </DescriptionCursor>

        <DescriptionCursor
          onClick={() => {
            router.push("/prices");
          }}
        >
          Цены
        </DescriptionCursor>
        <DescriptionCursor
          onClick={() => {
            router.push("/company");
          }}
        >
          О компании
        </DescriptionCursor>
        <DescriptionCursor
          onClick={() => {
            router.push("/#section1");
            setMenu(!isMenu);
          }}
        >
          При заказе
        </DescriptionCursor>
      </WrapperMenu>
      <Number href="tel: 8 (8212) 569-884 ">8 (8212) 569-884</Number>
    </Wrapper>
  );
};

export default ModalMenu;
