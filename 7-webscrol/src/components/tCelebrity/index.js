import React from "react";

import {
  AboutContainer,
  HeroBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutHr,
  Img,
  Img2,
  SpanContent,
  SpanContent2,
  ServicesWrapper,
} from "./TcelebrityElements";
import math from "../../images/Frame_32.png";
import math2 from "../../images/Frame_36.png";

const Tcelebrity = () => {
  return (
    <>
      <AboutContainer id="t_celebrity">
        <HeroBg>
          <VideoBg src={require("../../images/Rectangle_1.jpg").default} />
        </HeroBg>
        <AboutContent>
          <AboutH1>Tocenomics of CELEBRITY’S TOKEN</AboutH1>
          <AboutHr />
          <ServicesWrapper>
            <SpanContent>
              <Img src={math} />
            </SpanContent>
            <SpanContent2>
              <Img2 src={math2} />
            </SpanContent2>
          </ServicesWrapper>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default Tcelebrity;
