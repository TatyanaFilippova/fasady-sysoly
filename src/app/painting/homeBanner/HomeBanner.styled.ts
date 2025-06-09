import { layout, typography } from "@/styles";
import styled from "styled-components";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 128px;
  ${layout}

  ${media.phone} {
    padding: 0;
    margin-bottom: 100px;
    margin-top: 0;
  }
`;

export const ImgBanner = styled.img`
  margin-bottom: 64px;

  ${media.phone} {
    margin-top: 0;
    height: 160px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 400;
  ${typography.h2};
  margin-top: 0;

  ${media.tablet} {
    width: 83%;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
  }
  ${media.phone} {
    ${layout};
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
    width: 100%;
  }
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;
  width: 70%;

  ${media.tablet} {
    font-size: 20px;
    width: 90%;
  }
  ${media.phone} {
    ${layout};
    font-size: 20px;
    padding-left: 0;
    margin-left: 0;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 46px;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  ${media.phone} {
    flex-direction: column;
    ${layout};
    gap: 30px;
    align-items: flex-start;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 90%;
  ${media.phone} {
    width: 100%;
  }
`;

export const ButtonHome = styled.button`
  background-color: #4f4f4f;
  color: white;
  padding: 32px 40px;
  font-size: 20px;
  border-radius: 16px;
  width: 25%;
  text-align: center;

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

  ${media.tablet} {
    width: 40%;
    font-size: 20px;
    padding: 20px 30px;
  }
  ${media.phone} {
    padding: 15px 40px;
    font-size: 16px;
    width: 60%;
  }
`;
