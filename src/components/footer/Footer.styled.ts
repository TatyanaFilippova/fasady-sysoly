import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4f4f4f;
  align-items: start;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 300;
  color: white;
`;

export const Container = styled.div`
  padding-top: 98px;
  width: 100%;
  padding-bottom: 78px;
  ${layout}
`;

export const TitleDescription = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 34px;
`;

export const Description = styled.div`
  color: white;
  font-size: 16px;
`;

export const Shell = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  //:nth-child(1) {
  //  padding-bottom: 34px;
  //}
  &:last-child {
    margin-left: auto;
  }
`;

export const ShellBlock = styled.div`
  display: flex;
  gap: 100px;

  :last-child {
    justify-content: flex-end;
    align-items: end;
  }
`;

export const Number = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 300;
`;
