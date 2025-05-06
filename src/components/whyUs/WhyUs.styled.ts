import styled from "styled-components";
import { layout } from "@/styles";

export const ShellText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px 140px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 226px;
  height: 350px;
  margin-bottom: 146px;
  ${layout}
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 300;
  color: black;
  white-space: nowrap;
`;

export const TitleDescription = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: black;
  padding-bottom: 10px;
`;

export const Container = styled.div`
  width: 34%;
`;
