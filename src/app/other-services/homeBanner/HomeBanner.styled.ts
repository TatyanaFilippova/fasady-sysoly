import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  margin-bottom: 180px;
  padding-bottom: 10px;
  ${layout};

  ${media.tablet} {
    margin-bottom: 120px;
  }
  ${media.phone} {
    padding: 0;
    margin-bottom: 100px;
    margin-top: 0;
  }
`;

export const ImgHome = styled.img`
  margin-top: 46px;
  margin-bottom: 46px;

  ${media.tablet} {
    margin-top: 24px;
    margin-bottom: 64px;
  }
  ${media.phone} {
    margin-top: 0;
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 400;
  color: black;
  ${typography.h2};

  ${media.phone} {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  font-size: 32px;
  color: black;
  margin-top: 26px;
  width: 60%;
  margin-bottom: 46px;

  ${media.tablet} {
    font-size: 20px;
    width: 80%;
    margin-bottom: 0;
    margin-top: 0;
  }
  ${media.phone} {
    font-size: 16px;
    margin-left: 0;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  color: white;
  background-color: #4f4f4f;
  padding: 32px 60px;
  border-radius: 16px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.9;
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
    margin-top: 16px;
    width: 40%;
    font-size: 20px;
    padding: 20px 30px;
  }
  ${media.phone} {
    padding: 15px 30px;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  ${media.phone} {
    ${layout};
  }
`;
