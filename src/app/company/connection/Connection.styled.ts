import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 98px;
  ${layout};

  ${media.phone} {
    margin-top: 60px;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 300;
  margin-bottom: 24px;
  ${typography.h3};
`;

export const Content = styled.div`
  width: 88%;
  color: black;
  font-size: 24px;

  ${media.tablet} {
    font-size: 20px;
  }
  ${media.phone} {
    font-size: 16px;
  }
`;

export const Shell = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const WrapperMap = styled.div`
  margin-top: 104px;
  margin-bottom: 206px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.tablet} {
    margin-top: 60px;
  }
  ${media.phone} {
    height: 300px;
    width: calc(100% + 48px);
    margin: 60px -24px 100px -24px;
  }
`;
