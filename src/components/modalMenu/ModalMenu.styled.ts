import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${layout};
  height: 100vh;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  background-color: white;
  z-index: 100;
  overflow: hidden;
  gap: 32px;
  padding-top: 24px;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  top: 0;
  right: 20px;

  &:active {
    top: 3px;
    box-shadow: 0 2px 0 #387796;
    transition: all 0.2s;
  }
`;

export const Shell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
`;

export const Title = styled.div`
  font-size: 24px;
  color: #4f4f4f;
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

export const DescriptionCursor = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;

  &:hover {
    opacity: 0.8;
  }
`;

export const Ul = styled.ul`
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Number = styled.div`
  text-align: center;
  font-size: 30px;
  color: black;
  font-weight: 300;
  margin-bottom: 30px;
`;
