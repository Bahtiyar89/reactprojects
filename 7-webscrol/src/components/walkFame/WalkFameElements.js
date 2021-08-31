import styled from "styled-components";

export const WalkFameContainer = styled.div`
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

export const WalkFameBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WalkFameContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  //background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const WalkFameH1 = styled.h1`
  // background-color: yellow;
  color: #fff;
  font-size: 48px;
  text-align: center;
  width: 100%;
  height: 78px;
  left: 577px;
  margin-top: 0%;

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
    margin-top: -30%;
  }
`;

export const WalkFameHr = styled.hr`
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
    width: 80%;
  }
`;

export const SpanWhite = styled.span`
  color: white;
`;

export const WalkFameP = styled.p`
  //background-color: red;
  //margin-top: 64px;
  color: #efbb31;
  font-size: 16px;
  text-align: left;
  max-width: 600px;
  line-height: -0.9;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 5%;
    font-size: 18px;
  }
`;

export const RowContent = styled.div`
  z-index: 1;
  width: 1211px;
  max-width: 1200px;

  //background-color: green;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 326px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const RowContent2 = styled.div`
  z-index: 1;
  width: 1211px;
  max-width: 1200px;

  //background-color: green;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
    margin-top: 10%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    margin-left: 0%;
    margin-top: 10%;
  }
`;

export const Vector = styled.img`
  margin-top: 25px;
  padding-top: -65px;
  color: #fff;
  width: 272px;
  height: 326px;
  left: 59px;
  top: 2766px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    padding-top: -55%;
    width: 20%;
    height: 25%;
    // background: red;
  }
`;

export const Vector2 = styled.img`
  margin-top: 15px;
  padding-top: 5px;
  padding-lleft: 15px;
  // background-color: #fff;
  width: 221px;
  height: 326px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    width: 17%;
    height: 20%;
    // background: blue;
  }
`;

export const Vector3 = styled.img`
  // background-color: red;
  margin-top: 10%;
  text-align: center;
  height: 28px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    height: 22px;
    width: 18px;
    // background: blue;
    margin-top: 40%;
  }
`;
