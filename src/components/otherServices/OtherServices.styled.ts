import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Title = styled.div`
  font-size: 48px;
  color: black;
  text-align: left;
  width: 60%;
  font-weight: 400;
  margin-bottom: 10px;

  ${media.phone} {
    font-size: 28px;
  }
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

  ${media.phone} {
    height: 400px;
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

  ${media.phone} {
    font-size: 20px;
    padding-top: 10px;
  }
`;

export const ShellDescription = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  align-items: flex-end;

  ${media.phone} {
    margin-top: 20px;
  }
`;
