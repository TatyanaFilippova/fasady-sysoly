import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  ${layout};
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 30px;
  margin-bottom: 220px;
  justify-content: space-between;

  ${media.tablet} {
    column-gap: 0;
    row-gap: 100px;
  }
  ${media.phone} {
    row-gap: 46px;
    margin-bottom: 100px;
  }
`;

export const ImgContent = styled.img`
  width: 690px;
  height: 434px;
  object-fit: cover;

  ${media.tablet} {
    height: 260px;
    width: 100%;
  }
  ${media.phone} {
    object-fit: cover;
    height: 280px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);

  ${media.tablet} {
    width: calc(50% - 12px);
    row-gap: 0;
  }
  ${media.phone} {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 300;
  padding-top: 26px;
  padding-bottom: 15px;
  ${typography.h3};
  
  ${media.phone}{
    padding-top: 26px;
    padding-bottom: 15px;
  }
  }
`;

export const Description = styled.div`
  font-size: 24px;

  ${media.tablet} {
    font-size: 18px;
  }
  ${media.phone} {
    font-size: 16px;
  }
`;
