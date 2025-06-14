import { media } from "@/constants/media";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 100px;
  column-gap: 42px;
  margin-bottom: 270px;

  ${media.tablet} {
    column-gap: 0;
    margin-bottom: 0;
    justify-content: space-between;
  }
  ${media.phone} {
    row-gap: 40px;
    margin-bottom: 0;
  }
`;
