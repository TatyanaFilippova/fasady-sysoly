import styled from "styled-components";
import { h1, layout } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  font-size: 48px;
  font-weight: 400;
  color: black;

  ${h1};
  ${media.phone} {
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 255px;
  ${layout};

  ${media.tablet} {
    gap: 20px;
  }

  ${media.phone} {
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

export const Content = styled.div`
  color: black;
  font-size: 20px;
  line-height: 30px;

  ul {
    color: black;
    margin: 8px 0;
  }

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.phone} {
    font-size: 16px;
  }
`;

export const ShellText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  justify-content: center;

  ${media.phone} {
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const MapShell = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  ${media.tablet} {
    width: 55%;
    height: 350px;
    margin-top: 30px;
  }

  ${media.phone} {
    height: 300px;
    margin: 0 -24px;
    width: calc(100% + 48px);
  }
`;
