import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${layout};
  margin-bottom: 228px;
`;

export const Title = styled.div`
  font-size: 64px;
  color: black;
  font-weight: 400;
  margin-bottom: 26px;
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;
`;

export const ImgBlock = styled.img`
  margin-top: 46px;
  margin-bottom: 46px;
`;
