import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const ShellText = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 50px 140px;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.phone} {
    flex-direction: row;
    gap: 25px 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 226px;
  height: auto;
  margin-bottom: 146px;

  ${layout};

  ${media.tablet} {
    flex-direction: column;
    gap: 36px;
    margin-bottom: 246px;
  }

  ${media.phone} {
    flex-direction: column;
    gap: 26px;
    height: auto;
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  font-weight: 400;
  color: black;
  width: 30%;

  ${typography.h2};
`;

export const TitleDescription = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: black;
  padding-bottom: 10px;

  ${media.tablet} {
    font-size: 20px;
  }

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

export const TextBlock = styled.ul`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ShellWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
`;
