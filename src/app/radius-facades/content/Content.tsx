"use client";
import {
  Wrapper,
  ImgBlock,
  Title,
  Shell,
  TitleShell,
  ShellImg,
} from "@/app/radius-facades/content/Content.styled";
import kitchen from "../img/kitchen.png";
import radiusFacade1 from "../img/radiusFacade1.png";
import radiusFacade2 from "../img/radiusFacade2.png";

const Content = () => {
  return (
    <Wrapper>
      <Shell>
        <ImgBlock src={kitchen.src} />
        <TitleShell>
          <Title>Кухня без углов и острых краев</Title>
        </TitleShell>
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
