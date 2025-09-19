import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #505050;
  align-items: start;
`;

export const Title = styled.div`
  font-size: 64px;
  font-weight: 300;
  color: white;

  ${media.tablet} {
    font-size: 38px;
  }

  ${media.phone} {
    font-size: 32px;
  }
`;

export const Container = styled.div`
  padding-top: 98px;
  width: 100%;
  padding-bottom: 78px;
  ${layout};

  ${media.phone} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const TitleDescription = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 34px;

  ${media.phone} {
    margin-bottom: 17px;
    font-size: 18px;
  }
`;

export const Description = styled.div`
  color: white;
  font-size: 16px;

  ${media.phone} {
    font-size: 14px;
  }
`;

export const Shell = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  //:nth-child(1) {
  //  padding-bottom: 34px;
  //}
  &:last-child {
    margin-left: auto;
  }

  ${media.phone} {
    margin-top: 38px;
  }
`;

export const ShellBlock = styled.div`
  display: flex;
  gap: 100px;

  :last-child {
    justify-content: flex-end;
    align-items: end;
  }

  ${media.tablet} {
    flex-wrap: wrap;
    column-gap: 100px;
    row-gap: 0;
  }

  ${media.phone} {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const Number = styled(Link)`
  color: white;
  font-size: 36px;
  font-weight: 300;

  ${media.tablet} {
    font-size: 28px;
  }

  ${media.phone} {
    font-size: 24px;
  }
`;
