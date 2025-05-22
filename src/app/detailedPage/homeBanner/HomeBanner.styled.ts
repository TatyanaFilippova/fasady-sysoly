import { layout } from "@/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 300px;
  ${layout}
`;

export const ImgBanner = styled.img`
  margin-bottom: 184px;
`;

export const Title = styled.div`
  font-size: 64px;
  color: black;
  font-weight: 400;
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  gap: 140px;
  justify-content: space-between;
  width: 100%;
  align-items: end;
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
`;

export const ButtonHome = styled.button`
  background-color: #d30000;
  color: white;
  padding: 30px 162px;
  font-size: 36px;
  border-radius: 16px;
`;
