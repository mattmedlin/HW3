import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  {
    /* Used this video https://www.youtube.com/watch?v=VzWBLj_CfpE&t=1842s to build navbar, hamburger menu appears with media query, but sidebar menu is not implemented*/
  }
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>The Lab</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/research-projects" activeStyle>
            Research Projects
          </NavLink>
          <NavLink to="/publications" activeStyle>
            Publications
          </NavLink>
          <NavLink to="/team" activeStyle>
            Team
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
