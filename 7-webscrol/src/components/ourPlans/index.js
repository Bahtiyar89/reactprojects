import React from "react";
import {
  OurPlansContainer,
  OurPlansBg,
  VideoBg,
  OurPlansContent,
  OurPlansH1,
  OurPlansHr,
  OurPlansOl,
  OurPlansLi,
  RowContent,
} from "./OurPlansElement";

const OurPlansPage = () => {
  return (
    <OurPlansContainer id="our_plans">
      <OurPlansBg>
        <VideoBg src={require("../../images/Rectangle_13.jpg").default} />
      </OurPlansBg>
      <OurPlansContent>
        <OurPlansH1>Our Plans</OurPlansH1>
        <OurPlansHr />

        <RowContent>
          <OurPlansOl>
            <OurPlansLi>
              Our team will launch 5 tokens. Each of 5 tokens will be dedicated
              to an individual celebrity.
            </OurPlansLi>
            <OurPlansLi>
              First celebrity’s token will be choose by our team, and another
              celebrites tokens you will choose by vote in telegram group.
            </OurPlansLi>
            <OurPlansLi>
              Each tokens will be launched sequentially after reaching a certain
              result, wich our team will anounce in advance.
            </OurPlansLi>
            <OurPlansLi>
              After the launch of 5 celebrity’s tokens the launch date of the
              main token of the celebrity platform will be announced.
            </OurPlansLi>
          </OurPlansOl>
        </RowContent>
      </OurPlansContent>
    </OurPlansContainer>
  );
};

export default OurPlansPage;
