import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 208px;
  ${layout};
`;

export const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 300;
  padding-bottom: 30px;
`;

export const Description = styled.div`
  font-size: 20px;
  color: black;
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
`;

export const ImgProduct = styled.img`
  height: 506px;
  width: 70%;
  margin-bottom: 60px;
`;

export const TextBlock = styled.div`
  font-size: 16px;

  :last-child {
    margin-bottom: 10px;
  }
`;

export const TextBlockShell = styled.div`
  line-height: 1.4;

  :nth-child(1) {
    margin-bottom: 20px;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 24px;
`;

export const ImgBlock = styled.div`
  width: 100%;
  margin-right: 140px;
`;

export const Img = styled.img`
  width: calc(50% - 12px);
  height: 506px;
  &:nth-child(1) {
    width: 100%;
  }
`;

export const TextDescription = styled.div`
  font-size: 16px;
  padding: 10px 0;

  &:last-child {
    padding-top: 0;
  }
`;

export const ButtonProduct = styled.button`
  background-color: #d30000;
  color: white;
  font-size: 24px;
  padding: 28px 126px;
  border-radius: 24px;
  width: 25%;
  margin-top: 60px;
  margin-left: auto;
`;
