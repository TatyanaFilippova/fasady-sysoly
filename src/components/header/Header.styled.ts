import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
  padding-bottom: 25px;
  align-items: center;

  ${layout}
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 16px;
  margin-left: auto;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 400;
`;

export const Number = styled.div`
  font-size: 24px;
  margin-left: 40px;
  color: black;
  font-weight: 300;
`;

export const Border = styled.div`
  border: 1px solid #e6e6e6;
`;
