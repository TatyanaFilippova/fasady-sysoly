import styled from "styled-components";
import { layout, typography } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  color: black;
  text-align: left;
  width: 60%;
  font-weight: 400;
  margin-bottom: 20px;

  ${typography.h2};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 146px;
  margin-bottom: 146px;
  ${layout};

  ${media.phone} {
    margin-top: 100px;
    margin-bottom: 100px;
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
    height: 350px;
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

export const ButtonFacade = styled.button`
  padding: 32px 60px;
  background-color: #4f4f4f;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.8;
  }

  display: inline-block;
  transition: all 0.2s;
  position: relative;
  top: 0;

  &:active {
    top: 3px;
    box-shadow: 0 2px 0 #387796;
    transition: all 0.2s;
  }

  ${media.tablet} {
    padding: 16px 30px;
    font-size: 16px;
  }

  ${media.phone} {
    padding: 16px 30px;
    font-size: 16px;
  }
`;

export const Description = styled.div`
  padding-top: 34px;
  font-size: 36px;
  color: black;
  font-weight: 300;

  ${media.tablet} {
    font-size: 20px;
    padding-top: 10px;
  }

  ${media.phone} {
    font-size: 20px;
    padding-top: 20px;
  }
`;

export const ShellDescription = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  align-items: flex-end;

  ${media.tablet} {
    margin-top: 40px;
  }

  ${media.phone} {
    margin-top: 20px;
  }
`;
