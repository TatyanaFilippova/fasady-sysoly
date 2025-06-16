import { css } from "styled-components";
import { media } from "@/constants/media";

export const layout = css`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

export const typography = {
  h1: css`
    font-size: 96px;
    width: 80%;
    margin-top: 300px;

    ${media.tablet} {
      font-size: 54px;
      width: 84%;
      margin-top: 200px;
    }
    ${media.phone} {
      font-size: 40px;
      margin-top: 100px;
    }
  `,
  h2: css`
    font-size: 48px;

    ${media.tablet} {
      font-size: 34px;
      width: 70%;
    }
    ${media.phone} {
      font-size: 28px;
    }
  `,
  h3: css`
    font-size: 28px;

    ${media.tablet} {
      font-size: 28px;
    }
    ${media.phone} {
      font-size: 24px;
    }
  `,
  h4: css`
    font-size: 24px;

    ${media.tablet} {
      font-size: 20px;
    }
    ${media.phone} {
      font-size: 18px;
    }
  `,
};
