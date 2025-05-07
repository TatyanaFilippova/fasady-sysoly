import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  font-size: 48px;
  font-weight: 400;
  color: black;

  ${media.phone} {
    font-size: 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 255px;
  ${layout}

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

  ${media.phone} {
    height: 300px;
    margin: 0 -24px;
    width: calc(100% + 48px);
  }
`;
