import styled from "styled-components";

export const HeroContainer = styled.div`
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

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const MainStar = styled.img`
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-top: -35px;
  }
`;

export const HeroP = styled.p`
  color: #efbb31;

  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 90%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 48px;
  padding: 10px;
`;

export const SocialIconLinkTwitter = styled.a`
  color: #fff;
  font-size: 39px;
  padding: 10px;
`;

export const Vector = styled.img`
  margin-top: 55px;
  padding-top: 55px;
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
