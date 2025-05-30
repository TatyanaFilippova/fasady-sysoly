import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  gap: 92px;
  ${layout};
  margin-bottom: 166px;
  flex-direction: column;

  ${media.phone} {
    gap: 46px;
    margin-bottom: 60px;
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

export const Shell = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;

  &:nth-child(2) {
    flex-direction: row-reverse;
    justify-content: space-between;

    ${media.phone} {
      flex-direction: column;
    }
  }
  ${media.phone} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImgBlock = styled.img``;

export const TitleShell = styled.div`
  width: 30%;
  ${media.phone} {
    width: 100%;
  }
`;

export const TitleBlock = styled.div`
  width: 40%;

  ${media.phone} {
    width: 100%;
  }
`;

export const ShellImg = styled.div`
  display: flex;
  gap: 20px;

  ${media.phone} {
    gap: 10px;
    flex-direction: column;
  }
`;
