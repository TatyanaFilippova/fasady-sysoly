import styled from "styled-components";
import { layout } from "@/styles";
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
  font-size: 36px;
  color: black;
  font-weight: 300;
  margin-bottom: 24px;

  ${media.phone} {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  width: 85%;
  color: black;
  font-size: 24px;

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

  ${media.phone} {
    height: 300px;
    width: calc(100% + 48px);
    margin-top: 60px;
    margin-bottom: 100px;
    margin-left: -24px;
    margin-right: -24px;
  }
`;
