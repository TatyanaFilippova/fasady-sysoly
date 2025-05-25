import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  ${layout};
  flex-wrap: wrap;
  column-gap: 150px;
  row-gap: 140px;
  margin-bottom: 220px;
`;

export const ImgContent = styled.img`
  width: 574px;
  height: 434px;
  background-size: cover;
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  width: 40%;
`;

export const Title = styled.div`
  font-size: 40px;
  color: black;
  font-weight: 300;
`;

export const Description = styled.div`
  font-size: 24px;
`;
