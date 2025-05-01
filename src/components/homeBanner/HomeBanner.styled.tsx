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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 218px;
`;

export const BlockText = styled.div`
  font-size: 20px;
`;

export const ButtonHomeBanner = styled.button`
  background-color: #d30000;
  color: #ffffff;
  font-size: 36px;
  height: 100px;
  border-radius: 10px;
  width: 35%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
