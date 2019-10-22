import React from "react";
import styled from "styled-components";
import { Color } from "Utils";

const NavbarWrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.dark};
  h3 {
    color: #fff;
    text-transform: capitalize;
    font-size: 1.3em;
    span {
      color: ${Color.primary};
    }
  }
`;

const Header = () => {
  return (
    <NavbarWrap>
      <h3>
        Default Starter <span>React</span> Boilerplate Using <span>CRA</span>
      </h3>
    </NavbarWrap>
  );
};

export default Header;
