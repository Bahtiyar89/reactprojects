import React, { Fragment, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
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
  NavBtnLink,
} from "./NavbarElements";
import { isAuthonticated } from "../../utils/helpers";

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
  console.log("isAuthonticated: ", isAuthonticated);
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "red" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              swt
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  O нас
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Меню 2
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Сервисы
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Регистрация
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {isAuthonticated ? (
                <NavBtnLink onClick={signOut} to="signin">
                  Sign Out
                </NavBtnLink>
              ) : (
                <NavBtnLink to="signin">Sign In</NavBtnLink>
              )}
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
