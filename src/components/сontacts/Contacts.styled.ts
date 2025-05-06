import styled from "styled-components";
import { layout } from "@/styles";

export const Title = styled.div`
  font-size: 48px;
  font-weight: 300;
  color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 255px;
  ${layout}
`;

export const Content = styled.div`
  color: black;
  font-size: 20px;
  line-height: 30px;

  ul {
    color: black;
    margin: 8px 0;
  }
`;

export const ShellText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  justify-content: center;
`;
