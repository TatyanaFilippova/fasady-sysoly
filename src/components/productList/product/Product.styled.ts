import styled from "styled-components";
import { layout, typography } from "@/styles";
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
  color: black;
  font-weight: 300;
  padding-bottom: 30px;
  width: 70%;

  ${typography.h3};
  ${media.tablet} {
    padding-bottom: 30px;
  }
  ${media.phone} {
    width: 80%;
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
    width: 90%;
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: space-between;

  ${media.tablet} {
    width: 60%;
    justify-content: normal;
  }
  ${media.phone} {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Container = styled.div<{ $length: string }>`
  display: flex;
  width: 100%;
  height: ${(props) => {
    if (props.$length === "2" || props.$length === "1") {
      return "920px";
    }
  }};

  ${media.tablet} {
    height: ${(props) => {
      if (props.$length === "2" || props.$length === "1") {
        return "800px";
      }
    }};
  }
  ${media.phone} {
    flex-direction: column;
    height: auto;
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
    margin-top: 20px;
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

export const WrapperImage = styled.div<{ $length: string }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;

  ${media.tablet} {
    flex-direction: ${(props) => {
      if (props.$length === "1") {
        return "column-reverse";
      } else if (props.$length === "2") {
        return "column";
      }
    }};
    align-items: ${(props) => {
      if (props.$length === "2" || props.$length === "1") {
        return "flex-start";
      }
    }};
    justify-content: ${(props) => {
      if (props.$length === "2" || props.$length === "1") {
        return "start";
      }
    }};
  }
  ${media.phone} {
    margin-top: 30px;
    width: 100%;
    overflow: hidden;
    gap: 10px;
  }
`;

export const ImgBlock = styled.div`
  width: 100%;
  margin-left: 18px;
`;

export const Img = styled.img<{ $length: string }>`
  width: calc(50% - 12px);
  height: 406px;
  object-fit: cover;
  &:nth-child(1) {
    width: ${(props) => {
      if (props.$length === "3" || props.$length === "1") {
        return "100%";
      } else if (props.$length === "4") {
        return "calc(50% - 12px)";
      } else if (props.$length === "2") {
        return "calc(40% - 12px)";
      } else {
        return "auto";
      }
    }};
      height: ${(props) => {
        if (props.$length === "3") {
          return "706px";
        } else if (props.$length === "2") {
          return "406px";
        } else if (props.$length === "1") {
          return "100%";
        }
      }};
  }

    &:nth-child(2) {
        width: ${(props) => {
          if (props.$length === "2") {
            return "calc(60% - 12px)";
          }
        }};
        height: ${(props) => {
          if (props.$length === "2") {
            return "706px";
          }
        }};
    }
    
  ${media.tablet} {
    height: ${(props) => {
      if (props.$length === "3") {
        return "250px";
      } else if (props.$length === "2") {
        return "300px";
      } else {
        return "500px"; // значение по умолчанию
      }
    }};
    &:nth-child(1) {
      width: ${(props) => {
        if (props.$length === "1") {
          return "100%";
        } else if (props.$length === "2" || props.$length === "4") {
          return "100%";
        }
      }};
        height: ${(props) => {
          if (props.$length === "2") {
            return "300px";
          } else if (props.$length === "3") {
            return "406px";
          } else if (props.$length === "1") {
            return "500px";
          }
        }};
    }
      &:nth-child(2) {
          width: ${(props) => {
            if (props.$length === "2") {
              return "100%";
            }
          }};
          height: ${(props) => {
            if (props.$length === "2") {
              return "300px";
            }
          }};
      }
      
    width: ${(props) => {
      if (props.$length === "1") {
        return "100%";
      } else if (props.$length === "2" || props.$length === "4") {
        return "100%";
      }
    }};
  }

  ${media.phone} {
    height: 200px;
    width: calc(50% - 5px);
    &:nth-child(1) {
        width: ${(props) => {
          if (props.$length === "2") {
            return "calc(50% - 5px)";
          }
        }};
        height: 230px;
    }; 
      &:nth-child(2) {
          width: ${(props) => {
            if (props.$length === "2") {
              return "calc(50% - 5px)";
            }
          }};
          height: ${(props) => {
            if (props.$length === "2") {
              return "230px";
            }
          }};
      }
    }
  }
`;

export const TextDescription = styled.div`
  font-size: 16px;
  padding: 10px 0;
  &:last-child {
    padding-top: 0;
  }
`;

export const ButtonProduct = styled.button<{ $length: string }>`
  background-color: #d30000;
  color: white;
  font-size: 24px;
  padding: 28px 126px;
  border-radius: 24px;
  width: 25%;
  margin-left: auto;
  margin-top: ${(props) => {
    if (props.$length === "2") {
      return "-90px";
    } else if (props.$length === "3" || props.$length === "4") {
      return "60px";
    } else if (props.$length === "1") {
      return "60px";
    }
  }};

  ${media.tablet} {
    padding: 20px 60px;
    width: 40%;
    font-size: 20px;
    margin-top: ${(props) => {
      if (props.$length === "1") {
        return "-180px";
      }
    }};
  }
  ${media.phone} {
    padding: 14px 30px;
    font-size: 16px;
    width: 50%;
    margin-top: 30px;
  }
`;
