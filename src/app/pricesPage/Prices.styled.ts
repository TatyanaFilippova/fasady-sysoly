import { layout } from "@/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${layout};
  margin-bottom: 200px;
`;

export const Title = styled.caption`
  font-size: 64px;
  color: black;
  font-weight: 300;
  margin-bottom: 60px;
  text-align: left;
  margin-top: 150px;
`;

export const Table = styled.table`
  width: 80%;
`;

export const TableHead = styled.th`
  width: 25%;
  font-size: 10px;
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
  font-size: 12px;
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
  font-size: 12px;
`;

export const TableTdTitle = styled.td`
  border-bottom: 1px solid #d1d1d1;
  font-weight: 400;
  font-size: 13px;
  color: black;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Button = styled.button`
  color: black;
  border-bottom: 1px solid black;
  font-weight: 300;
`;
