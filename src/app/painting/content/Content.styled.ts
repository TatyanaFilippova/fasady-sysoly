import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  ${layout}
`;

export const Description = styled.div`
  font-size: 24px;
  width: 70%;
  color: black;
  ul {
    padding-bottom: 20px;
    padding-top: 20px;
    color: black;
  }
  li {
    padding-left: 20px;
    color: black;
  }
  margin-bottom: 194px;

  ${media.tablet} {
    font-size: 20px;
    width: 100%;
    margin-bottom: 120px;
  }
  ${media.phone} {
    font-size: 20px;
    width: 100%;
    margin-bottom: 164px;
  }
`;

export const Title = styled.div`
  padding-top: 46px;
  padding-bottom: 30px;
  font-weight: 300;
  color: black;

  ${typography.h1};
  ${media.tablet} {
    padding-top: 26px;
    padding-bottom: 15px;
  }
  ${media.phone} {
    padding-top: 26px;
    padding-bottom: 15px;
  }
`;

export const DescriptionBlock = styled.div`
  font-size: 24px;

  ${media.tablet} {
    font-size: 18px;
  }
  ${media.phone} {
    font-size: 18px;
  }
`;

export const Img = styled.img`
  width: 690px;
  height: 434px;
  object-fit: cover;

  ${media.tablet} {
    width: 100%;
    height: auto;
  }
  ${media.phone} {
    width: 100%;
    height: auto;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  row-gap: 80px;
  justify-content: space-between;
`;

export const CardStyled = styled.div`
  width: calc(50% - 30px);

  ${media.tablet} {
    width: calc(50% - 12px);
  }
  ${media.phone} {
    width: 100%;
  }
`;
