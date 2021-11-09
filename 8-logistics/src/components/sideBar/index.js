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
          <SideBarLink to="about" onClick={toggle}>
            О нас
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            меню 2
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Сервисы
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Регистрация
          </SideBarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
