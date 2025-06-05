import { css } from "styled-components";
import { media } from "@/constants/media";

export const layout = css`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  //width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  //overflow-x: hidden;
`;

export const h1 = css`
  font-size: 48px;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 34px;
    width: 70%;
  }
`;
