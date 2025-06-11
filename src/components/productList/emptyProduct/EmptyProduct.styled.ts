import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  margin-bottom: 208px;
  ${layout};
  gap: 100px;

  ${media.phone} {
    margin-bottom: 100px;
    flex-direction: column;
    gap: 0;
  }
`;

export const Title = styled.div`
  color: black;
  font-weight: 300;
  padding-bottom: 30px;
  width: 100%;

  ${typography.h3};
  ${media.tablet} {
    padding-bottom: 30px;
  }
  ${media.phone} {
    display: none;
  }
`;

export const WrapperMobile = styled.div`
  display: flex;
  gap: 120px;

  ${media.tablet} {
    flex-direction: row;
  }
  ${media.phone} {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    margin-top: 26px;
  }
`;

export const TitleMobile = styled.div`
  display: none;
  color: black;

  ${typography.h3};
  ${media.tablet} {
    padding-bottom: 30px;
  }
  ${media.phone} {
    width: 80%;
    display: block;
    padding-bottom: 16px;
    font-weight: 400;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  color: black;
  margin-bottom: 40px;
  width: 70%;

  ${media.phone} {
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet} {
    width: 100%;
    justify-content: normal;
  }
  ${media.phone} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  //height:

  ${media.tablet} {
    //height:
  }
  ${media.phone} {
    flex-direction: column;
    height: auto;
  }
`;

export const ImgProduct = styled.img`
  height: 400px;
  width: 20%;

  ${media.tablet} {
    width: 40%;
  }
  ${media.phone} {
    width: 40%;
    height: 250px;
    margin-bottom: 0;
  }
`;

export const TextBlock = styled.div`
  font-size: 16px;
  :last-child {
    margin-bottom: 10px;
  }
`;

export const TextBlockShell = styled.div`
  line-height: 1.4;
  margin-right: 30px;
  margin-top: 20px;

  :nth-child(1) {
    margin-bottom: 20px;
  }
  ${media.phone} {
    text-align: left;
    margin-right: 0;
  }
`;

export const TextDescription = styled.div`
  font-size: 16px;
  padding: 10px 0;
  &:last-child {
    padding-top: 0;
  }
`;

export const ButtonProduct = styled.button`
  background-color: #d30000;
  color: white;
  font-size: 24px;
  padding: 28px 126px;
  border-radius: 24px;
  margin-left: auto;
  margin-top: 30px;

  ${media.tablet} {
    padding: 20px 60px;
    width: 40%;
    font-size: 20px;
    //margin-top:
  }
  ${media.phone} {
    padding: 14px 30px;
    font-size: 16px;
    width: 50%;
    margin-top: 30px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
`;
