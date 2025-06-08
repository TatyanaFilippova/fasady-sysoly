"use client";
import {
  Wrapper,
  ImgBlock,
  Title,
  Shell,
  TitleShell,
  TitleBlock,
  ShellImg,
} from "@/app/radius-facades/content/Content.styled";
import kitchen1 from "../img/kitchen1.png";
import kitchen2 from "../img/kitchen2.png";
import radiusFacade1 from "../img/radiusFacade1.png";
import radiusFacade2 from "../img/radiusFacade2.png";

const Content = () => {
  return (
    <Wrapper>
      <Shell>
        <ImgBlock src={kitchen1.src} />
        <TitleShell>
          <Title>Кухня без углов и острых краев</Title>
        </TitleShell>
      </Shell>
      <Shell>
        <ImgBlock src={kitchen2.src} />
        <TitleBlock>
          <Title>Фрезеровка на любой выбор</Title>
        </TitleBlock>
      </Shell>
      <ShellImg>
        <div>
          <ImgBlock src={radiusFacade1.src} />
        </div>
        <div>
          <ImgBlock src={radiusFacade2.src} />
        </div>
      </ShellImg>
    </Wrapper>
  );
};
export default Content;
