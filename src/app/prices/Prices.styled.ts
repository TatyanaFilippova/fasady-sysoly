import { layout, typography } from "@/styles";
import styled from "styled-components";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  ${layout};
  margin-bottom: 200px;

  ${media.phone} {
    margin-bottom: 100px;
  }
`;

export const Title = styled.caption`
  color: black;
  font-weight: 400;
  margin-bottom: 60px;
  text-align: left;
  margin-top: 100px;
  ${typography.h2};

  ${media.phone} {
    margin-top: 60px;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 90%;

  ${media.phone} {
    width: 100%;
  }
`;

export const TableHead = styled.th`
  width: 25%;
  font-size: 12px;
  text-align: left;
  border-bottom: 1px solid #d1d1d1;
  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    text-align: right;
  }
`;

export const TableTr = styled.tr``;

export const TableTd = styled.td`
  border-bottom: 1px solid #d1d1d1;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  color: black;
  &:nth-child(2) {
    text-align: center;
  }

  &:last-child {
    text-align: right;
  }
`;

export const TableTdButton = styled.td`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;

  ${media.tablet} {
    padding-top: 5px;
    padding-bottom: 35px;
  }
  ${media.phone} {
    padding-top: 5px;
    padding-bottom: 35px;
  }
`;

export const TableTdTitle = styled.td`
  border-bottom: 1px solid #d1d1d1;
  font-weight: 400;
  font-size: 14px;
  color: black;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;

  ${media.phone} {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  color: black;
  border-bottom: 1px solid black;
  font-weight: 300;
`;
