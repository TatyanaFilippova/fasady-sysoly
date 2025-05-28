import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 146px;

  ${layout};

  ${media.phone} {
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 400;
  margin-bottom: 10px;

  ${media.phone} {
    font-size: 28px;
  }
`;

export const Img = styled.img`
  height: 800px;
  width: 950px;
  object-fit: cover;
  ${media.phone} {
    height: 500px;
    margin: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const ImgFacade = styled.img`
  ${media.phone} {
    height: 160px;
    width: 104px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  margin-left: 40px;
  width: 50%;

  ${media.phone} {
    margin-left: 0;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${media.phone} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ShellFacade = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 24px;

  ${media.phone} {
    gap: 4px;
  }
`;

export const Description = styled.div`
  width: 65%;
  font-size: 32px;
  line-height: 60px;

  &:first-child {
    line-height: normal;
  }

  ${media.phone} {
    font-size: 20px;
    line-height: 30px;
    width: 90%;
  }
`;

export const ShellDescription = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  align-items: flex-end;

  ${media.phone} {
    flex-direction: column;
    align-items: center;
    margin-top: 52px;
  }
`;

export const ButtonFacade = styled.button`
  padding: 32px 60px;
  white-space: nowrap;
  background-color: #4f4f4f;
  color: white;
  font-size: 20px;
  border-radius: 10px;
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
    width: 100%;
    padding: 16px 30px;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const ImgWrapper = styled.div`
  margin-left: -110px;
  width: 60%;
  ${media.phone} {
    margin: 0 -24px;
    width: calc(100% + 48px);
  }
`;

export const TItleFacade = styled.div`
  ${media.phone} {
    font-size: 16px;
  }
`;
