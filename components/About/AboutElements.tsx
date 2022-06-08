import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

type InfoSecProps = {
  lightBg?: boolean;
};

export const InfoSec = styled.div<InfoSecProps>`
  color: #fff;
  padding: 160px 0;
  background: ${(props) => (props.lightBg ? "transparent" : "#1d1d1d")};
`;

type InfoRowProps = {
  imgStart?: boolean;
};
export const InfoRow = styled.div<InfoRowProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

type ImgWrapperProps = {
  start?: boolean;
};

export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

type TopLineProps = {
  lightTopLine?: boolean;
};

export const TopLine = styled.div<TopLineProps>`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled(Image)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

type HeadingProps = {
  lightText?: boolean;
};

export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

type SubtitleProps = {
  lightTextDesc?: boolean;
};
export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

type ButtonProps = {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Social = styled.div`
  color: #0467fb;
  font-size: 18px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    list-style: none;
  }
  li {
    margin-right: 30px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transition: all 0.3s ease-out;
      color: #4b59f7;
    }
  }
`;
