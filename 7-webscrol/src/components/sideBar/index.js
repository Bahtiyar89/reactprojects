import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SidebarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SidebarMenu>
          <SideBarLink to="about_us" onClick={toggle}>
            About us
          </SideBarLink>
          <SideBarLink to="our_plans" onClick={toggle}>
            Our plans
          </SideBarLink>
          <SideBarLink to="walk_fame" onClick={toggle}>
            Walk of fame
          </SideBarLink>
          <SideBarLink to="t_celebrity" onClick={toggle}>
            Tocenomics of CELEBRİTY's
          </SideBarLink>
          <SideBarLink to="t_clb" onClick={toggle}>
            Tocenomics of #CLB
          </SideBarLink>
          <SideBarLink to="road_map" onClick={toggle}>
            Road map
          </SideBarLink>
        </SidebarMenu>

        <SideBtnWrap>
          {/*
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
          */}
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
