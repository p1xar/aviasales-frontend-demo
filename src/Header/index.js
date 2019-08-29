import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import { NavLink } from "react-router-dom";
import FormWrapper from "./Inputs";

const Header = styled.div`
  background: linear-gradient(
    151.09deg,
    #00b0de 0.36%,
    #01aedc 4.04%,
    #02abdb 7.77%,
    #02abdb 11.48%,
    #02abdb 11.7%,
    #196ebd 100%
  );
`;

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

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15.875rem;
  @media screen and (max-width: 20rem) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
    margin-top: 2.625rem;
  }
`;

const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 0.625rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 20rem) {
    font-size: 1.25rem;
    line-height: 1.4375rem;
    padding: 0 0.375rem;
  }
  @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const HeaderTitleForm = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 0.625rem;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 20rem) {
    display: none;
  }
  @media screen and (min-width: 20.0625rem) and (max-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.4375rem;
  }
`;

export default () => {
  return (
    <Header>
      <Logo alt="Logo" src={logo} />
      <LogoText to="/">aviasales</LogoText>
      <HeaderContent>
        <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
        <HeaderTitleForm>
          Лучший способ купить авиабилеты дешево
        </HeaderTitleForm>
        <FormWrapper />
      </HeaderContent>
    </Header>
  );
};
