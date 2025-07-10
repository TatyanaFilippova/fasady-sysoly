import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  margin-bottom: 246px;
  ${layout}

  ${media.phone} {
    margin-bottom: 80px;
  }
`;

export const ImgScheme = styled.img`
  width: 70%;

  ${media.tablet} {
    width: 100%;
    margin-top: 80px;
  }
  ${media.phone} {
    width: 100%;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 300;
  margin-bottom: 30px;

  ${typography.h3};
  ${media.tablet} {
    width: 80%;
  }
  ${media.phone} {
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  font-size: 20px;

  ${media.phone} {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShellBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
  ${media.phone} {
    flex-direction: column;
  }
`;

export const ShellBlockImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid rgba(164, 164, 164, 0.53);
  margin-bottom: 80px;

  ${media.phone} {
    flex-direction: column;
  }
`;
