import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Shell = styled.img`
  position: absolute;
  top: 0;
  width: 40%;
  left: -200px;

  ${media.phone} {
    left: -50px;
  }
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

  ${media.phone} {
    right: 40px;
  }
`;

export const HomeBannericon = styled.img`
  position: absolute;
  right: -20px;
  top: 75px;

  ${media.phone} {
    right: -130px;
    top: 95px;
  }

  ${media.tablet} {
    right: -90px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 96px;
  color: black;
  padding-top: 280px;
  width: 80%;

  ${media.phone} {
    font-size: 40px;
    padding-top: 100px;
  }

  ${media.tablet} {
    font-size: 54px;
    padding-top: 200px;
    width: 84%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 10px;

  ${media.phone} {
    gap: 30px;
    padding-right: 30px;
  }

  ${media.tablet} {
    gap: 40px;
  }
`;

export const Content = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 218px;

  ${media.phone} {
    margin-bottom: 100px;
  }
`;

export const BlockText = styled.div`
  font-size: 20px;

  ${media.phone} {
    font-size: 16px;
  }
`;

export const ButtonHomeBanner = styled.button`
  background-color: #d30000;
  color: #ffffff;
  font-size: 36px;
  height: 100px;
  border-radius: 10px;
  width: 35%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.8;
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

  ${media.phone} {
    height: auto;
    width: 70%;
    font-size: 20px;
    padding: 15px 30px;
  }

  ${media.tablet} {
    font-size: 20px;

    height: 60px;
    text-align: center;
  }
`;
