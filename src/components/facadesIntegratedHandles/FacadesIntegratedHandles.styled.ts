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
  ${layout}
`;

export const Img = styled.img`
  width: 800px;
  margin-left: -110px;
`;

export const Shell = styled.div`
  display: flex;
  padding-left: 28px;
  flex-wrap: wrap;
  gap: 34px;
`;

export const Container = styled.div`
  display: flex;
`;

export const ImgFacade = styled.img`
  width: 300px;
  height: 310px;
  object-fit: cover;
`;
