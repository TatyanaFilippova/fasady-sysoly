import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
  padding-bottom: 25px;
  align-items: center;

  ${layout}

  ${media.phone} {
    &:last-child {
      align-items: end;
    }
    margin-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 16px;
  margin-left: auto;

  ${media.phone} {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 400;

  ${media.phone} {
    font-size: 24px;
  }
`;

export const Number = styled.div`
  font-size: 24px;
  margin-left: 40px;
  color: black;
  font-weight: 300;

  ${media.phone} {
    font-size: 20px;
    white-space: nowrap;
  }
`;

export const Border = styled.div`
  border: 1px solid #e6e6e6;
`;
