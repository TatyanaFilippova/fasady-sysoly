import styled from "styled-components";
import { layout } from "@/styles";

export const Shell = styled.img`
  position: absolute;
  top: 0;
  width: 40%;
  left: -200px;
`;
export const Wrapper = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  position: relative;
  ${layout}
`;

export const Container = styled.img`
  position: absolute;
  width: 40%;
  top: 0;
  right: 250px;
`;

export const HomeBannericon = styled.img`
  position: absolute;
  right: -140px;
  top: 75px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 96px;
  color: black;
  padding-top: 280px;
  width: 80%;
`;

export const Description = styled.div``;

export const Content = styled.div`
  width: 100%;
  overflow: hidden;
`;
