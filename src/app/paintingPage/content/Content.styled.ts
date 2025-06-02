import styled from "styled-components";
import { layout } from "@/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  ${layout}
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;
  ul {
    padding-bottom: 20px;
    padding-top: 20px;
    color: black;
  }
  li {
    padding-left: 20px;
    color: black;
  }
  margin-bottom: 194px;
`;

export const Title = styled.div`
  padding-top: 46px;
  padding-bottom: 30px;
  font-size: 40px;
  font-weight: 300;
  color: black;
`;

export const DescriptionBlock = styled.div`
  font-size: 24px;
`;

export const Img = styled.img`
  width: 690px;
  height: 434px;
  object-fit: cover;
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: 30px;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: calc(50% - 30px);
`;
