import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${layout};
  margin-bottom: 228px;

  ${media.phone} {
    padding: 0;
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  font-size: 64px;
  color: black;
  font-weight: 400;
  margin-bottom: 26px;

  ${media.phone} {
    ${layout};
    font-size: 40px;
    margin-left: 0;
  }
`;

export const Description = styled.div`
  font-size: 32px;
  color: black;

  ${media.phone} {
    ${layout};
    font-size: 16px;
    margin-left: 0;
  }
`;

export const ImgBlock = styled.img`
  margin-top: 46px;
  margin-bottom: 46px;

  ${media.phone} {
    margin-top: 0;
    height: 160px;
  }
`;
