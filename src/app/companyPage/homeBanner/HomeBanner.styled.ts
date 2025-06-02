import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  flex-wrap: wrap;
  ${layout};

  ${media.phone} {
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const WrapperBlock = styled.div`
  display: flex;
  margin-bottom: 98px;

  ${media.phone} {
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const Title = styled.div`
  font-size: 62px;
  color: black;
  font-weight: 400;

  ${media.phone} {
    font-size: 20px;
    margin-bottom: 26px;
  }
`;

export const Description = styled.div`
  color: black;
  font-size: 24px;
  width: 70%;
  font-weight: 300;

  ${media.phone} {
    font-size: 16px;
    width: 90%;
  }
`;

export const Img = styled.img`
  margin-right: 100px;

  ${media.phone} {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.phone} {
    flex-direction: column-reverse;
    ${layout}
  }
`;

export const DescriptionBlock = styled.div`
  width: 80%;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;

  ${media.phone} {
    ${layout};
    margin-left: 0;
    margin-right: 0;
    font-size: 16px;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
