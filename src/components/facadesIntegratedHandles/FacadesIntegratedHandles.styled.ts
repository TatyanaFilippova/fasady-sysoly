import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  font-size: 48px;
  color: black;
  text-align: left;
  width: 60%;
  font-weight: 400;
  margin-bottom: 20px;

  ${typography.h2};
  ${media.phone} {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 146px;
  ${layout};

  ${media.phone} {
    margin-bottom: 100px;
  }
`;

export const Img = styled.img`
  height: 800px;
  width: 950px;
  object-fit: cover;

  ${media.phone} {
    height: 500px;
    margin: 0;
    width: 100%;
    object-fit: cover;
  }
`;

export const Shell = styled.div<{ $length: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: 40px;
  width: 50%;

  & > div {
    width: calc(50% - 6px);
  }

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    gap: 20px;
    :nth-child(4) {
      display: ${(props) => {
        if (props.$length === "4") {
          return "none";
        } else return "block";
      }};
    }
    & > div {
      width: 100%;
    }
  }
  ${media.phone} {
    gap: 10px;
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
    & > div:nth-child(4) {
      display: block;
    }
  }
`;

export const Container = styled.div`
  display: flex;

  ${media.phone} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImgFacade = styled.img`
  width: calc(50% - 6px);
  height: 240px;
  object-fit: cover;

  ${media.tablet} {
    height: 220px;
    width: 100%;
  }

  ${media.phone} {
    height: 140px;
    width: calc(50% - 5px);
  }
`;

export const ImgPen = styled.img`
  object-fit: cover;
  width: 100%;
  height: 290px;

  ${media.tablet} {
    display: none;
  }
  ${media.phone} {
    height: 160px;
  }
`;

export const ImgWrapper = styled.div`
  margin-left: -110px;
  width: 60%;

  ${media.tablet} {
    width: 100%;
  }

  ${media.phone} {
    margin: 0 -24px;
    width: calc(100% + 48px);
  }
`;
