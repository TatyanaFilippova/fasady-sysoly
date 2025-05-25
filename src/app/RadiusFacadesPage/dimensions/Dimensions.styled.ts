import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  margin-bottom: 246px;
  ${layout}
`;

export const Shell = styled.div`
  justify-content: flex-end;
  display: flex;
`;

export const ImgScheme = styled.img`
  //width: 100%;
`;

export const Title = styled.div`
  font-size: 36px;
  color: black;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShellBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
