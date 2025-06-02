import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 208px;
  ${layout};

  ${media.phone} {
    margin-bottom: 100px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 300;
  padding-bottom: 30px;

  ${media.phone} {
    font-size: 20px;
    padding-bottom: 16px;
  }
`;

export const Description = styled.div`
  font-size: 20px;
  color: black;

  ${media.phone} {
    font-size: 16px;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;

  ${media.phone} {
    flex-direction: row-reverse;
    width: 100%;
    gap: 30px;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;

  ${media.phone} {
    flex-direction: column;
  }
`;

export const ImgProduct = styled.img`
  height: auto;
  width: 60%;
  margin-bottom: 60px;

  ${media.phone} {
    width: 100%;
    height: auto;
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

  :nth-child(1) {
    margin-bottom: 20px;
  }
  ${media.phone} {
    text-align: left;
    margin-right: 0;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;

  ${media.phone} {
    margin-top: 50px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const ImgBlock = styled.div`
  width: 100%;
`;

export const Img = styled.img<{ $length: string }>`
  width: calc(50% - 12px);
  height: 506px;
  &:nth-child(1) {
    width: ${(props) => {
      if (props.$length === "3" || props.$length === "1") {
        return "100%";
      } else if (props.$length === "2" || props.$length === "4") {
        return "calc(50% - 12px)";
      } else {
        return "auto"; // значение по умолчанию
      }
    }};
  }

  ${media.phone} {
    height: 254px;
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
  width: 25%;
  margin-top: 60px;
  margin-left: auto;

  ${media.phone} {
    padding: 14px 60px;
    font-size: 20px;
    width: 50%;
    margin-top: 30px;
  }
`;
