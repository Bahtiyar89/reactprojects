import React from "react";

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

        <RowContent>
          <span style={{ paddingBottom: "100px" }}>
            <Vector src={require("../../images/Frame1.png").default} />
          </span>
          <Vector2 src={require("../../images/Frame2.png").default} />

          <Vector2 src={require("../../images/Frame3.png").default} />
          <Vector2 src={require("../../images/Frame4.png").default} />

          <Vector2 src={require("../../images/Frame5.png").default} />
        </RowContent>
        <RowContent2>
          <Vector3 src={require("../../images/1.png").default} />
        </RowContent2>
        <RowContent>
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
        </RowContent>
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
