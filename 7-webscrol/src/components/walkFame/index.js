import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

import {
  WalkFameContainer,
  WalkFameContent,
  VideoBg,
  WalkFameBg,
  WalkFameH1,
  WalkFameHr,
  WalkFameP,
  SpanWhite,
  RowContent,
  RowContent2,
  Vector,
  Vector2,
  Vector3,
  WalkFamePWEB,
} from "./WalkFameElements";

const WalkFamePage = () => {
  return (
    <WalkFameContainer id="walk_fame">
      <WalkFameBg>
        <VideoBg src={require("../../images/Rectangle_5.jpg").default} />
      </WalkFameBg>

      <WalkFameContent>
        <WalkFameH1>Walk of fame</WalkFameH1>

        <WalkFameHr />
        <BrowserView>
          <RowContent>
            <span style={{ paddingBottom: "100px", marginLeft: "-1%" }}>
              <Vector src={require("../../images/Frame41.png").default} />
            </span>
            <Vector src={require("../../images/Frame42.png").default} />

            <Vector2 src={require("../../images/Frame_43.png").default} />
            <Vector2 src={require("../../images/Frame_44.png").default} />
            <Vector2 src={require("../../images/Frame_45.png").default} />
          </RowContent>

          <RowContent>
            <WalkFamePWEB>
              <SpanWhite>Name: </SpanWhite>Keanu Charles Reeves
              <br />
              <SpanWhite>Born:</SpanWhite> 2 semptember, 1964 (age 56)
              <br />
              <SpanWhite>Nationality: </SpanWhite> Canadian
              <br />
              <SpanWhite>Best works: </SpanWhite> Matrix (1,2,3), John Wick
              (1,2,3)
              <br />
              47 ronin, Constantine, Devils advocate
            </WalkFamePWEB>

            <WalkFamePWEB>
              <SpanWhite>Name: </SpanWhite>Willard Carroll Smith Jr. ( Will
              Smith)
              <br />
              <SpanWhite>Born:</SpanWhite> 25 September 1968 ( age 53)
              <br />
              <SpanWhite>Nationality: </SpanWhite> American
              <br />
              <SpanWhite>Best works: </SpanWhite>the Pursuit of Happiness,
              <br />7 lives , Men in black , I’m a legendThe Fresh Prince of
              Bel-Air
            </WalkFamePWEB>
          </RowContent>
        </BrowserView>
        <MobileView>
          <RowContent>
            <Vector src={require("../../images/Frame41.png").default} />
            <Vector src={require("../../images/Frame42.png").default} />

            <Vector2 src={require("../../images/Frame_43.png").default} />
            <Vector2 src={require("../../images/Frame_44.png").default} />
            <Vector2 src={require("../../images/Frame_45.png").default} />
          </RowContent>

          <RowContent>
            <WalkFameP>
              <Vector3 src={require("../../images/1.png").default} />
              <br />
              <SpanWhite>Name: </SpanWhite>Keanu Charles Reeves
              <br />
              <SpanWhite>Born:</SpanWhite> 2 semptember, 1964 (age 56)
              <br />
              <SpanWhite>Nationality: </SpanWhite> Canadian
              <br />
              <SpanWhite>Best works: </SpanWhite> Matrix (1,2,3), John Wick
              (1,2,3)
              <br />
              47 ronin, Constantine, Devils advocate
            </WalkFameP>

            <WalkFameP>
              <Vector3 src={require("../../images/2.png").default} /> <br />
              <SpanWhite>Name: </SpanWhite>Willard Carroll Smith Jr. ( Will
              Smith)
              <br />
              <SpanWhite>Born:</SpanWhite> 25 September 1968 ( age 53)
              <br />
              <SpanWhite>Nationality: </SpanWhite> American
              <br />
              <SpanWhite>Best works: </SpanWhite>the Pursuit of Happiness,
              <br />7 lives , Men in black , I’m a legend, The Fresh Prince of
              Bel-Air
            </WalkFameP>
          </RowContent>
        </MobileView>

        {/*
          <WalkFameSpan></WalkFameSpan>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={first} />
              <ServicesH2>Keanu Reeves</ServicesH2>
              <ServicesPP>1</ServicesPP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={second} />
              <ServicesH22>?</ServicesH22>
              <ServicesP>2</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={second} />
              <ServicesH22>?</ServicesH22>
              <ServicesP>3</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={second} />
              <ServicesH22>?</ServicesH22>
              <ServicesP>4</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={second} />
              <ServicesH22>?</ServicesH22>
              <ServicesP>5</ServicesP>
            </ServicesCard>
          </ServicesWrapper>

          <WalkFameP>
            <SpanWhite>Name: </SpanWhite>Keanu Charles Reeves
            <br />
            <SpanWhite>Born: 2</SpanWhite> semptember, 1964 (age 56)
            <br />
            <SpanWhite>Nationality: </SpanWhite> Canadian
            <br />
            <SpanWhite>Best works: </SpanWhite> Matrix (1,2,3), John Wick
            (1,2,3)
            <br />
            47 ronin, Constantine, Devils advocate
          </WalkFameP>
         */}
      </WalkFameContent>
    </WalkFameContainer>
  );
};

export default WalkFamePage;
