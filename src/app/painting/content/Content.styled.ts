import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${layout};
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
    list-style-type: none;
    margin-bottom: 10px;

    &::before {
      content: "•";
      padding-right: 16px;
    }
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
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  padding: 16px 24px;
  font-weight: 300;
  color: black;

  ${typography.h3};
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
  padding: 16px 24px 58px 24px;

  ${media.tablet} {
    font-size: 18px;
  }
  ${media.phone} {
    font-size: 18px;
  }
`;

export const Img = styled.img`
  width: 443px;
  height: 319px;
  object-fit: cover;

  ${media.tablet} {
    width: 100%;
    height: 260px;
  }
  ${media.phone} {
    width: 100%;
    height: 224px;
  }
`;

export const CardStyled = styled.div`
  width: calc(33% - 24px);
  border: 1px solid #d2d2d2;
  background-color: white;

  ${media.tablet} {
    width: calc(50% - 12px);
  }
  ${media.phone} {
    width: 100%;
  }
`;
