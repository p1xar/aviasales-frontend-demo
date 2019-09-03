import styled from "styled-components";
import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

const Logo = styled.img`
  padding-left: 6.625rem;
  padding-top: 1.1875rem;
  @media screen and (max-width: 48rem) {
    padding-left: 0.5rem;
  }
`;

const LogoText = styled(NavLink)`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
    font-style: normal;
    font-weight: 300;
    font-size: 1.25rem;
    position: absolute;
    left: 9.5rem;
    top: 1.25rem;
    line-height: 1.5625rem;
    color: #fff;
    text-decoration: none;
  }
  @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
    display: block;
    font-style: normal;
    font-weight: 300;
    font-size: 1.25rem;
    position: absolute;
    left: 3.125rem;
    top: 1.25rem;
    line-height: 1.5625rem;
    color: #fff;
    text-decoration: none;
  }
`;

export default () => {
  return (
    <React.Fragment>
      <Logo alt="Logo" src={logo} />
      <LogoText to="/">aviasales</LogoText>
    </React.Fragment>
  );
};
