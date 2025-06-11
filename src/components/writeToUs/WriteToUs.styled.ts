import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  ${layout};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 260px;

  ${media.phone} {
    margin-bottom: 150px;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 400;
  margin-bottom: 24px;
  text-align: center;
  ${typography.h2};
`;

export const Description = styled.div`
  font-size: 20px;
  color: black;
  margin-bottom: 50px;

  ${media.phone} {
    text-align: center;
    margin-bottom: 30px;
    font-size: 16px;
  }
`;

export const Shell = styled.div`
  width: 400px;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${media.tablet} {
    width: 220px;
  }
  ${media.phone} {
    width: 300px;
    height: 200px;
  }
`;

export const ImgIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ShellIcon = styled.div`
  text-align: center;
`;

export const ShellText = styled.div`
  ${typography.h4};
  color: black;
  font-weight: 300;
  text-align: center;
  padding-bottom: 14px;
`;

export const ShellSummary = styled.div`
  font-size: 20px;
  padding-bottom: 36px;
  text-align: center;

  ${media.tablet} {
    font-size: 14px;
  }
  ${media.phone} {
    font-size: 16px;
    padding-bottom: 26px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;

  ${media.phone} {
    justify-content: flex-start;
    gap: 20px;
    &::after {
      content: "";
      display: block;
      padding-right: 12px;
    }
  }
`;

export const Container = styled.div`
  ${media.phone} {
    width: calc(100% + 48px);
    overflow: auto;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const WrapperCard = styled.div`
  width: 30%;

  ${media.tablet} {
    width: 100%;
  }
  ${media.phone} {
    width: 100%;
  }
`;
