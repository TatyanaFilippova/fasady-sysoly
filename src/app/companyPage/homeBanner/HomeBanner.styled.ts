import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;

  flex-wrap: wrap;

  ${layout}
`;

export const WrapperBlock = styled.div`
  display: flex;
  margin-bottom: 98px;
`;

export const Title = styled.div`
  font-size: 62px;
  color: black;
  font-weight: 400;
`;

export const Description = styled.div`
  color: black;
  font-size: 24px;
  width: 70%;
  font-weight: 300;
`;

export const Img = styled.img`
  margin-right: 138px;
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DescriptionBlock = styled.div`
  width: 80%;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;

  &:last-child {
    margin-bottom: 0;
  }
`;
