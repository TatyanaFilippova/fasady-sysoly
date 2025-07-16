import { layout, typography } from "@/styles";
import styled from "styled-components";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 300px;
  ${layout}

  ${media.tablet} {
    padding: 0;
    margin-bottom: 164px;
    margin-top: 0;
  }
  ${media.phone} {
    padding: 0;
    margin-bottom: 100px;
    margin-top: 0;
  }
`;

export const ImgBanner = styled.img`
  margin-bottom: 64px;
  width: 100%;
  height: 370px;

  ${media.tablet} {
    margin-top: 0;
    height: auto;
    margin-bottom: 46px;
  }
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

  ${media.tablet} {
    margin-left: 0;
    width: 90%;
  }
  ${media.phone} {
    ${layout};
    padding-left: 0;
  }
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;

  ${media.tablet} {
    font-size: 20px;
    margin-left: 0;
  }
  ${media.phone} {
    ${layout};
    font-size: 16px;
    padding-left: 0;
    margin-left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 140px;
  justify-content: space-between;
  width: 100%;
  align-items: end;

  ${media.tablet} {
    flex-direction: column;
    align-items: start;
    ${layout};
    gap: 60px;
  }
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
  width: 50%;

  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    width: 100%;
  }
`;

export const ButtonHome = styled.button`
  background-color: #d30000;
  color: white;
  padding: 30px 162px;
  font-size: 36px;
  border-radius: 16px;

  ${media.tablet} {
    padding: 20px 62px;
    font-size: 20px;
  }
  ${media.phone} {
    padding: 15px 60px;
    font-size: 16px;
  }
`;
