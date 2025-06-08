import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  ${layout};
  flex-wrap: wrap;
  column-gap: 150px;
  row-gap: 140px;
  margin-bottom: 220px;

  ${media.phone} {
    row-gap: 46px;
    margin-bottom: 100px;
  }
`;

export const ImgContent = styled.img`
  width: 574px;
  height: 434px;
  background-size: cover;

  ${media.phone} {
    object-fit: cover;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 46px;
  width: 40%;

  ${media.phone} {
    width: 100%;
    row-gap: 20px;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  color: black;
  font-weight: 300;

  ${media.phone} {
    font-size: 20px;
  }
`;

export const Description = styled.div`
  font-size: 24px;

  ${media.phone} {
    font-size: 16px;
  }
`;
