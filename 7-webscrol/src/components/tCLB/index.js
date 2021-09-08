import React from "react";
import { FaRegSquare } from "react-icons/fa";

import {
  AboutContainer,
  HeroBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutHr,
  AboutP,
  Img,
  Img2,
  SpanContent2,
  SpanContent,
  ServicesWrapper,
  SpanContent3,
} from "./TclbElements";
import first from "../../images/Frame_34.png";
import second from "../../images/Frame_35.png";

const Tclb = () => {
  return (
    <>
      <AboutContainer id="t_clb">
        <HeroBg>
          <VideoBg src={require("../../images/Rectangle_11.jpg").default} />
        </HeroBg>
        <AboutContent>
          <AboutH1>Tokenomics of #CLB</AboutH1>
          <AboutHr />
          <ServicesWrapper>
            <SpanContent>
              <Img src={first} />
            </SpanContent>
            <SpanContent2>
              <Img2 src={second} />
            </SpanContent2>
          </ServicesWrapper>
          {/*
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "250px 250px 300px",
              gridGap: "15px",
              padding: "40px 0 60px 0",
            }}
          >
            <div
              style={{
                marginLeft: "10%",
              }}
            >
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "40%",
                  marginTop: "10%",
                }}
                src={math}
                alt={"alt"}
              />{" "}
              <span
                style={{ float: "right", marginTop: "12%", color: "white" }}
              >
                =
              </span>
              <AboutP>
                1. DEX LIQUIDE <span style={{ float: "right" }}>=</span>
              </AboutP>
              <AboutP>
                2. ECOSYSTEM <span style={{ float: "right" }}>=</span>
              </AboutP>
              <AboutP>
                3. CEX LISTING <span style={{ float: "right" }}>=</span>
              </AboutP>
              <AboutP>
                4. MARKETING <span style={{ float: "right" }}>=</span>
              </AboutP>
            </div>
            <div
              style={{
                marginLeft: "5%",
              }}
            >
              <AboutP>10 000 000 #CLB</AboutP>
              <AboutP>5 000 000 #CLB</AboutP>
              <AboutP>2 000 000 #CLB</AboutP>
              <AboutP>2 000 000 #CLB</AboutP>
              <AboutP>1 000 000 #CLB</AboutP>
            </div>
            <div
              style={{
                marginTop: "1%",
              }}
            >
              <Img src={req} alt={"alt"} />
            </div>
          </div>
            */}
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default Tclb;
