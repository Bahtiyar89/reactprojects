import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

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
  ServicesWrapper,
  SpanContent,
  SpanContent2,
  Img,
  RoadMapImg,
  ServicesWrapper2,
  OurPlansOl,
  OurPlansLi,
  HeaderLi,
  SpanLi,
} from "./RoadMapElements";

const RoadMap = () => {
  return (
    <>
      <AboutContainer id="road_map">
        <HeroBg>
          <VideoBg src={require("../../images/Rectangle_1.jpg").default} />
        </HeroBg>
        <AboutContent>
          <AboutH1>Road Map</AboutH1>
          <AboutHr />
          <RowContent>
            <BrowserView>
              <ServicesWrapper>
                <SpanContent>
                  <Img>- Listing of all MAP 5 celebrity tokens</Img>
                  <Img>- Own swap exchange chating</Img>
                  <Img>- Launch main token of CELEBRITY platform</Img>
                </SpanContent>
                <SpanContent>
                  <Img>
                    - Fan meetings for the best three holders with a celebrity
                  </Img>
                </SpanContent>
              </ServicesWrapper>
              <RoadMapImg src={require("../../images/road-map.png").default} />
              <ServicesWrapper2>
                <SpanContent>
                  <Img>- Website creating</Img>
                  <Img>- Launch of the first celebrity token</Img>
                  <Img>- Listing of Coinmarketcap</Img>
                  <Img>- Listing of Coingeeko</Img>
                </SpanContent>
                <SpanContent>
                  <Img>- Launch NFT marketplace</Img>
                  <Img>- Listing #CLB on CEX</Img>
                  <Img>- Creating a bridge between blockchains </Img>
                </SpanContent>
                <SpanContent>
                  <Img>- Launch of the NFT platform for stars all levels</Img>
                  <Img>
                    - Launch of a platform for online meetings with a celebrity
                    for a fee in the $CLB token
                  </Img>
                </SpanContent>
              </ServicesWrapper2>
            </BrowserView>
            <MobileView>
              <OurPlansOl>
                <HeaderLi>Q3 (2021)</HeaderLi>
                <OurPlansLi>Website creating</OurPlansLi>
                <OurPlansLi>Launch of the first celebrity token</OurPlansLi>
                <OurPlansLi>Listing of Coinmarketcap</OurPlansLi>
                <OurPlansLi>Listing of Coingeeko</OurPlansLi>
              </OurPlansOl>
              <OurPlansOl>
                <HeaderLi>Q4 (2021)</HeaderLi>
                <OurPlansLi>Listing of all MAP 5 celebrity tokens</OurPlansLi>
                <OurPlansLi>Own swap exchange chating</OurPlansLi>
                <OurPlansLi>Launch main token of CELEBRITY platform</OurPlansLi>
              </OurPlansOl>
              <OurPlansOl>
                <HeaderLi>Q1 (2022)</HeaderLi>
                <OurPlansLi>Launch NFT marketplace</OurPlansLi>
                <OurPlansLi>Listing #CLB on CEX</OurPlansLi>
                <OurPlansLi>Creating a bridge between blockchains</OurPlansLi>
              </OurPlansOl>
              <OurPlansOl>
                <HeaderLi>Q2 (2022)</HeaderLi>
                <OurPlansLi>
                  Fan meetings for the best three holders with a celebrity
                </OurPlansLi>
              </OurPlansOl>
              <OurPlansOl>
                <HeaderLi>Q3 (2022)</HeaderLi>
                <OurPlansLi>
                  Launch of the NFT platform for stars all levels{" "}
                </OurPlansLi>
                <OurPlansLi>
                  Launch of a platform for online meetings with a celebrity for
                  a fee in the $CLB token
                </OurPlansLi>
              </OurPlansOl>
            </MobileView>
            {/*
            <OurPlansOl>
              <HeaderLi>Q1 (2022)</HeaderLi>
              <OurPlansLi>Launch NFT marketplace</OurPlansLi>
              <OurPlansLi>Listing #CLB on CEX</OurPlansLi>
              <OurPlansLi>Creating a bridge between blockchains</OurPlansLi>

              <HeaderLi>Q2 (2022)</HeaderLi>
              <OurPlansLi>
                Fan meetings for the best three holders with a celebrity
              </OurPlansLi>

              <HeaderLi>Q3 (2022)</HeaderLi>
              <OurPlansLi>
                Launch of the NFT platform for stars all levels{" "}
              </OurPlansLi>
              <OurPlansLi>
                Launch of a platform for online meetings with a celebrity for a
                fee in the $CLB token
              </OurPlansLi>
            </OurPlansOl>
            
            <ServicesWrapper>
              <SpanContent>
                <Img>-Listing of all MAP 5 celebrity tokens</Img>
                <Img>-Own swap exchange chating</Img>
                <Img>-Launch main token of CELEBRITY platform</Img>
              </SpanContent>
              <SpanContent>
                <Img>
                  -Fan meetings for the best three holders with a celebrity
                </Img>
              </SpanContent>
            </ServicesWrapper>
            <RoadMapImg src={require("../../images/road-map.png").default} />
            <ServicesWrapper2>
              <SpanContent>
                <Img>--Website creating</Img>
                <Img>-Launch of the first celebrity token</Img>
                <Img>-Listing of Coinmarketcap</Img>
                <Img>-Listing of Coingeeko</Img>
              </SpanContent>
              <SpanContent>
                <Img>-Launch NFT marketplace</Img>
                <Img>-Listing #CLB on CEX</Img>
                <Img>-Creating a bridge between blockchains </Img>
              </SpanContent>
              <SpanContent>
                <Img>-Launch of the NFT platform for stars all levels</Img>
                <Img>
                  -Launch of a platform for online meetings with a celebrity for
                  a fee in the $CLB token
                </Img>
              </SpanContent>
            </ServicesWrapper2>
            */}
          </RowContent>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default RoadMap;
