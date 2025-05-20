import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  ${layout}
`;

export const Title = styled.div`
  font-size: 36px;
  color: black;
  font-weight: 300;
  margin-bottom: 24px;
`;

export const Content = styled.div`
  width: 85%;
  color: black;
  font-size: 24px;
`;

export const Shell = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const WrapperMap = styled.div`
  margin-top: 104px;
  margin-bottom: 206px;
`;
