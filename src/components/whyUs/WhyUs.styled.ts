import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const ShellText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px 140px;

  ${media.phone} {
    flex-direction: row;
    gap: 25px 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 226px;
  height: 350px;
  margin-bottom: 146px;
  ${layout};

  ${media.phone} {
    flex-direction: column;
    gap: 26px;
    height: auto;
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 400;
  color: black;
  white-space: nowrap;

  ${media.phone} {
    font-size: 28px;
  }
`;

export const TitleDescription = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: black;
  padding-bottom: 10px;

  ${media.phone} {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  width: 34%;

  ${media.phone} {
    width: 40%;
  }
`;

export const TextBlock = styled.div`
  font-size: 16px;
`;
