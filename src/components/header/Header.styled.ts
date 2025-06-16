import styled from "styled-components";
import { layout } from "@/styles";
import { media } from "@/constants/media";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  align-items: center;

  ${layout};

  ${media.phone} {
    justify-content: space-between;
    padding-bottom: 12px;
    padding-top: 12px;
  }

  ${media.tablet} {
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  :nth-child(1) {
    display: none;
  }

  ${media.tablet} {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 40px;
    :nth-child(2) {
      display: none;
    }
    :nth-child(1) {
      display: block;
    }
  }
  ${media.phone} {
    :nth-child(2) {
    display: none;
  }
    :nth-child(1) {
      display: block;
    }
  }
  }
`;

export const Shell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 16px;
  margin-left: auto;
  align-items: center;

  ${media.phone} {
    display: none;
  }
  ${media.tablet} {
    display: none;
  }
`;

export const Title = styled(Link)`
  font-size: 32px;
  font-weight: 400;
  cursor: pointer;

  ${media.phone} {
    font-size: 24px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Number = styled.div`
  font-size: 24px;
  margin-left: 40px;
  color: black;
  font-weight: 300;

  ${media.phone} {
    display: none;
  }
`;

export const Border = styled.div`
  border: 1px solid #e6e6e6;
`;

export const Company = styled(Link)`
  height: 20px;
  &:hover {
    opacity: 0.7;
  }
  &:last-child {
    text-decoration: line-through;
  }
`;
export const CompanyButton = styled.button`
  height: 40px;
  &:hover {
    opacity: 0.7;
  }
`;

export const Menu = styled.div`
  width: 328px;
  background-color: white;
  overflow: hidden;
  border: none;
  z-index: 100;
  cursor: pointer;
  position: absolute;
  top: 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const ShellMenu = styled.div`
  position: relative;
  cursor: pointer;
`;

export const LabelMenu = styled(Link)`
  color: #4f4f4f;
  line-height: 24px;
  width: 100%;
`;

export const ShellLabel = styled.div`
  padding: 10px 16px;

  &:hover {
    background-color: rgba(214, 212, 212, 0.91);
  }
`;

export const MenuServices = styled.div`
  width: 200px;
  background-color: white;
  overflow: hidden;
  border: none;
  z-index: 100;
  cursor: pointer;
  position: absolute;
  top: 30px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const MenuImg = styled.img`
  display: none;

  ${media.tablet} {
    z-index: 101;
    position: fixed;
    right: 24px;
    top: 34px;
    display: block;
    cursor: pointer;
    height: 20px;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
      transform: scale(0.85);
    }
  }
  ${media.phone} {
    z-index: 101;
    position: fixed;
    right: 24px;
    top: 24px;
    display: block;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
      transform: scale(0.85);
    }
  }
`;

export const ShellTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${media.phone} {
    gap: 10px;
  }
`;

export const Icon = styled.img`
  ${media.phone} {
    width: 40px;
  }
`;

export const ShellMobile = styled.div`
  ${media.tablet} {
    background-color: rgba(255, 255, 255, 0.47);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 100;
    position: fixed;
    right: 13px;
    top: 18px;
  }
  ${media.phone} {
    background-color: rgba(255, 255, 255, 0.47);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 100;
    position: fixed;
    right: 13px;
    top: 8px;
  }
`;
