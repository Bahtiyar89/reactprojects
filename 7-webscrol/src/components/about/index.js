import React from "react";
import {
  AboutContainer,
  HeroBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutHr,
  AboutP,
  AboutP2,
  AboutP3,
  AboutSppan,
  AboutSppan2,
  RowContent,
} from "./AboutElements";

const AboutPage = () => {
  return (
    <>
      <AboutContainer id="about_us">
        <HeroBg>
          <VideoBg src={require("../../images/Rectangle_4.jpg").default} />
        </HeroBg>
        <AboutContent>
          <AboutH1>About Us</AboutH1>
          <AboutHr />
          <RowContent>
            <AboutP>
              <AboutSppan>CELEBRITY - </AboutSppan>NFT Marketplace, where
              celebrities will make their NFT. Online platform for online fan
              meetings with celebrity
            </AboutP>
            <AboutP2>How will it work ? </AboutP2>
            <AboutP3>
              After launch 5 tokens and lounch main token{" "}
              <AboutSppan2>“CELEBRITY”</AboutSppan2> will be start NFT
              Marketplace, where people, who will buy NFT of someone{" "}
              <AboutSppan2>CELEBRITY</AboutSppan2>, will get a chance to meet a{" "}
              <AboutSppan2>CELEBRITY</AboutSppan2> online.
            </AboutP3>
          </RowContent>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutPage;
