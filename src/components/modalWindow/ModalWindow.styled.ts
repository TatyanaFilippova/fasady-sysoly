import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 65%;
  text-align: center;
`;

export const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 12px;
  font-size: 32px;
  color: black;
  font-weight: 400;
`;

export const CloseImg = styled.img`
  width: 50px;
  height: 50px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
    transform: scale(0.85);
  }
`;

export const QrImg = styled.img`
  width: 210px;
  height: 210px;
`;

export const Shell = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  font-size: 24px;
  color: black;
  margin-bottom: 46px;
`;

export const Link = styled.a`
  color: white;
  font-size: 18px;
  background-color: #4f4f4f;
  border-radius: 16px;

  padding: 18px 60px;

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
`;
