import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 900px;
  position: relative;
  z-index: 1;

  /* Add :before styles */
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%,
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)
    );
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    height: 800px;
  }
  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  //background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutH1 = styled.h1`
  // background-color: yellow;
  width: 635px;
  height: 78px;

  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 78px;
  color: #efbb31;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
    margin-top: -30%;
    width: 100%;
  }
`;

export const AboutHr = styled.hr`
  width: 1200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    width: 90%;
  }
`;

export const ServicesWrapper = styled.div`
  z-index: 3;
  width: 1211px;
  //background-color: grey;
  margin-left: -70px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const SpanContent = styled.span`
  margin-top: 200px;
  align-self: start;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    margin-top: 50px;
  }
`;

export const SpanContent2 = styled.span`
  margin-top: 118px;
  align-self: end;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    margin-top: 33px;
  }
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Img = styled.img`
  width: 550px;
  height: 220px;
  align-self: start;
  //background: yellow;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
`;

export const Img2 = styled.img`
  width: 477px;
  height: 383px;
  align-self: end;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50%;
    grid-template-columns: 1fr;
  }
`;
