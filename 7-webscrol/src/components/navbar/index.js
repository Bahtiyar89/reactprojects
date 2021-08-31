import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  MobileIcon2,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, seTscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      seTscrollNav(true);
    } else {
      seTscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            {/*
            <NavLogo to="/" onClick={toggleHome}></NavLogo>
            */}
            <MobileIcon onClick={toggle}>
              <FaStar style={{ color: "#efbb31;" }} />
            </MobileIcon>
            <MobileIcon2 to="/" onClick={toggleHome} scrollNav={scrollNav}>
              CELEBRITY
            </MobileIcon2>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about_us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  About us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="our_plans"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Our plans
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="walk_fame"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Walk of fame
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="t_celebrity"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Tocenomics of CELEBRITY's
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="t_clb"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Tocenomics of #CLB
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="road_map"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Road map
                </NavLinks>
              </NavItem>
            </NavMenu>
            {/*
            <NavBtn>
            
              <NavBtnLink to="signin"></NavBtnLink>
              
            </NavBtn>
            */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
