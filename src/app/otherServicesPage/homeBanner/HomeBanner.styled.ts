import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  margin-bottom: 180px;
  padding-bottom: 10px;
  ${layout}
`;

export const ImgHome = styled.img`
  margin-top: 46px;
  margin-bottom: 46px;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 400;
  color: black;
`;

export const Content = styled.div`
  font-size: 32px;
  color: black;
  margin-top: 26px;
  width: 60%;
  margin-bottom: 46px;
`;

export const Button = styled.button`
  font-size: 24px;
  color: white;
  background-color: #4f4f4f;
  padding: 32px 60px;
  border-radius: 16px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.9;
  }

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  top: 0;

  &:active {
    top: 3px;
    box-shadow: 0 2px 0 #387796;
    transition: all 0.2s;
  }
`;
