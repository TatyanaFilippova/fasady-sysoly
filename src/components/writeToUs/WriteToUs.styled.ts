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
    margin-bottom: 100px;
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
  width: 30%;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${media.tablet} {
    width: calc(33% - 12px);
  }
  ${media.phone} {
    width: 80%;
  }
`;

export const ImgIcon = styled.img`
  object-fit: cover;
  padding: 76px 116px 46px 116px;

  ${media.tablet} {
    padding: 20px 70px;
  }
  ${media.phone} {
    padding: 26px 96px 16px 96px;
  }
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
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
