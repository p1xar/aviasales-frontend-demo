import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import HeaderGradient from "./common/HeaderGradient";
import FormWrapper from "./common/FormWrapper";
import Logo from "./common/Logo";

const FormWrapperCustom = styled(FormWrapper)`
  margin-top: 2.5rem;
  margin-bottom: 15.875rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
    margin-bottom: 5.5rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15.875rem;
  @media screen and (max-width: 320px) {
    margin-top: 2rem;
  }
  @media screen and (min-width: 321px) and (max-width: 768px) {
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
  @media screen and (max-width: 320px) {
    font-size: 1.25rem;
    line-height: 1.4375rem;
    padding: 0 0.375rem;
  }
  @media screen and (min-width: 321px) and (max-width: 768px) {
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
  @media screen and (max-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.4375rem;
  }
`;

export default () => {
  return (
    <HeaderGradient>
      <Logo />
      <HeaderContent>
        <HeaderTitle>Поиск дешевых авиабилетов</HeaderTitle>
        <HeaderTitleForm>
          Лучший способ купить авиабилеты дешево
        </HeaderTitleForm>
        <FormWrapperCustom>
          <Inputs />
        </FormWrapperCustom>
      </HeaderContent>
    </HeaderGradient>
  );
};
