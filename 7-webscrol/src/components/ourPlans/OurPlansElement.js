import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const OurPlansContainer = styled.div`
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

export const OurPlansBg = styled.div`
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

export const OurPlansContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OurPlansH1 = styled.h1`
  width: 296px;
  height: 78px;
  left: 556px;
  margin-top: -15%;
  top: calc(50% - 78px / 2 + 1293px);

  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 78px;
  text-align: center;
  color: #efbb31;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
    margin-top: -18%;
  }
`;

export const OurPlansHr = styled.hr`
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
    font-size: 36px;
    width: 100%;
  }
`;

export const RowContent = styled.div`
  z-index: 4;
  width: 1074px;
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

export const OurPlansOl = styled.ol`
  margin-top: 83px;
  color: #fff;
  font-size: 24px;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const OurPlansLi = styled.li`
  margin-top: 34px;
  color: #fff;
  font-size: 32px;
  width: 100%;
  max-width: 1200px;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
