import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 500px;
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
    height: 500px;
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

export const AboutH1 = styled.h1`
  // background-color: yellow;
  width: 334px;
  height: 78px;
  left: 553px;
  top: 3371px;

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
    text-align: center;
  }
`;

export const RowContent = styled.div`
  z-index: 4;
  width: 1074px;
  max-width: 1200px;

  // background-color: green;

  flex-direction: row;
  align-items: left;

  @media screen and (max-width: 768px) {
    width: 326px;
  }
  @media screen and (max-width: 480px) {
    width: 326px;
  }
`;

export const SpanContent = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Centered = styled.div`
  // background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AlignRight = styled.div`
  margin-top: 33px;
  // background-color: blue;
  width: 335px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  float: right;
  background: #c08f0a;
  border-radius: 20px;
  border-width: 1px;

  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
`;
