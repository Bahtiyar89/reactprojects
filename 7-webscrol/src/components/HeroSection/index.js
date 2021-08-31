import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  MainStar,
  SocialIconLink,
  Vector,
  SocialIconLinkTwitter,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg src={require("../../images/Rectangle_1.jpg").default} />
      </HeroBg>

      <HeroContent>
        <MainStar src={require("../../images/starMain.png").default} />

        <HeroP>Reach for your star</HeroP>

        <HeroBtnWrapper>
          <SocialIconLink
            href="https://t.me/CeLebRitY_ch"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTelegram />
          </SocialIconLink>
          <SocialIconLinkTwitter
            href="https://twitter.com/celebrity_crypt"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLinkTwitter>
          <SocialIconLink
            href="https://t.me/celebrity_crypto"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTelegram />
          </SocialIconLink>
          {/*
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
           */}
        </HeroBtnWrapper>
        <Vector src={require("../../images/Vector.png").default} />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
