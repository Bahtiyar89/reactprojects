import styled from "styled-components";

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
  // background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContent = styled.div`
  z-index: 4;
  width: 1211px;
  max-width: 1200px;

  //background-color: green;

  flex-direction: row;
  align-items: left;

  @media screen and (max-width: 768px) {
    width: 326px;
  }
  @media screen and (max-width: 480px) {
    width: 326px;
  }
`;

export const AboutH1 = styled.h1`
  // background-color: yellow;
  color: #fff;
  font-size: 48px;
  text-align: center;
  width: 286px;
  height: 78px;
  left: 577px;
  margin-top: -18%;

  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 78px;

  color: #efbb31;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
    margin-top: -45%;
  }
`;

export const AboutHr = styled.hr`
  border: 3px solid rgba(255, 255, 255, 0, 3);

  width: 1211px;
  height: 3px;
  left: 115px;
  top: 1034px;
  width: 1211px;
  background: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    width: 100%;
  }
`;

export const AboutP = styled.p`
  margin-top: 53px;
  width: 1074px;
  height: 118px;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  font-style: normal;
  font-size: 32px;
  line-height: 184.61%;
  /* or 59px */
  color: #fff;
  // background-color: red;
  @media screen and (max-width: 768px) {
    width: 526px;
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 326px;
  }
`;

export const AboutP2 = styled.div`
  width: 1074px;
  height: 118px;

  font-style: normal;
  font-weight: bold;
  line-height: 184.61%;
  /* or 59px */
  color: #fff;

  margin-top: 52px;
  color: #efbb31;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    width: 326px;
    margin-top: 12px;
    font-size: 24px;
  }
`;

export const AboutP3 = styled.p`
  width: 1074px;
  height: 118px;

  font-style: normal;
  font-size: 32px;
  line-height: 184.61%;
  /* or 59px */
  color: #fff;

  @media screen and (max-width: 768px) {
    width: 526px;
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 326px;
  }
`;

export const AboutSppan = styled.span`
  margin-top: 24px;
  font-weight: bold;
  color: #efbb31;
  font-size: 32px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const AboutSppan2 = styled.span`
  margin-top: 24px;
  color: #efbb31;
  font-size: 32px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
