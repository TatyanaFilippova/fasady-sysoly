import styled from "styled-components";
import { layout } from "@/styles";

export const Title = styled.div`
  font-size: 48px;
  color: black;
  text-align: left;
  width: 60%;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 146px;
  margin-bottom: 146px;
  ${layout}
`;

export const Img = styled.img`
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 600px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const ShellDescription = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-end;
`;
