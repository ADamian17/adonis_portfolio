import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// , NavLink

const Header = styled.header`
  display: grid;
  grid-template-columns: 140px 2fr 3fr 50px;
  align-content: center;
  background-color: red;
  width: 100%;
  height: 50px;
  /* position: fixed; */

  @media (max-width: 375px) {
    grid-template-columns: 90px 1fr;
  }
`;

const NavIcon = styled.div`
  grid-column: 1;
  justify-self: center;
`;

const NavList = styled.nav`
  grid-column: 3;
  justify-self: end;

  @media (max-width: 375px) {
    grid-column: 2;
  }
`;
const NavLinks = styled.a`
  margin-right: 5px;
`;

const Navbar = (props) => {
  return (
    <Header>
      <NavIcon>
        <Link to="/">ADP</Link>
      </NavIcon>
      <NavList>
        <NavLinks href="/projects">Projects</NavLinks>
        <NavLinks href="/contact">Contact</NavLinks>
        <NavLinks href="/resume">resume</NavLinks>
      </NavList>
    </Header>
  );
};

export default Navbar;
