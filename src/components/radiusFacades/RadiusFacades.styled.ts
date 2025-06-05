import styled from "styled-components";
import { h1, layout } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  font-size: 48px;
  color: black;
  text-align: left;
  width: 60%;
  font-weight: 400;
  margin-bottom: 10px;

  ${h1};
  ${media.phone} {
    font-size: 28px;
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 146px;

  ${layout};

  ${media.phone} {
    margin-top: 0;
  }
`;

export const Img = styled.img`
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  height: 600px;
  width: 100%;
  object-fit: cover;

  ${media.tablet} {
    height: 400px;
  }

  ${media.phone} {
    height: 400px;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  ${media.phone} {
    flex-direction: column;
  }
`;

export const ShellDescription = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-end;

  ${media.phone} {
    margin-top: 52px;
    flex-direction: column;
    align-items: center;
  }
`;
