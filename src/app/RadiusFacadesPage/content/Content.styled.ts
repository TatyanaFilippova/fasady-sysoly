import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  gap: 92px;
  ${layout};
  margin-bottom: 166px;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 40px;
  color: black;
  font-weight: 300;
`;

export const Shell = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;

  &:nth-child(2) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const ImgBlock = styled.img``;

export const TitleShell = styled.div`
  width: 30%;
`;

export const TitleBlock = styled.div`
  width: 40%;
`;

export const ShellImg = styled.div`
  display: flex;
  gap: 20px;
`;
