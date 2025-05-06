import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 146px;

  ${layout}
`;

export const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 800px;
  margin-left: -110px;
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  margin-left: 40px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ShellFacade = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 24px;
`;

export const Description = styled.div`
  width: 56%;
  font-size: 32px;
  line-height: 60px;

  &:first-child {
    line-height: normal;
  }
`;

export const ShellDescription = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  align-items: flex-end;
`;

export const ButtonFacade = styled.button`
  padding: 32px 60px;
  white-space: nowrap;
  background-color: #4f4f4f;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
