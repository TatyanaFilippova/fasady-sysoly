import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 30px;
  justify-content: space-between;
  margin-bottom: 270px;
  ${layout}

  ${media.tablet} {
    column-gap: 0;
  }
  ${media.phone} {
    row-gap: 40px;
    margin-bottom: 100px;
  }
`;
