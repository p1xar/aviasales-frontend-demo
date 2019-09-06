import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

import shape from "./shape.svg";
import plane from "./plane.svg";
import { FromInput, ToInput } from "./Inputs";
import Dates from "./Dates";
import StyledInput from "./common/StyledInput";
import FormContainer from "./common/FormContainer";

const Icon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1.125rem;
  right: 1.5rem;
  top: 1rem;
`;

const ArrowIcon = styled(Icon)``;

const Passangers = styled(StyledInput)`
  border-radius: 0 0.3rem 0.3rem 0;
  padding-right: 2rem;
  cursor: pointer;
  @media screen and (max-width: 70.999rem) {
    border-radius: 0 0 0.3rem 0.3rem;
    padding-right: 0;
  }
`;

const ShapeIcon = styled(Icon)`
  width: 0.625rem;
`;

const CustomFormContainer = styled(FormContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 18.3125rem;
  height: 4rem;
  background: #ff9241;
  border-radius: 0.3rem;
`;

const SearchButton = styled.a`
  color: white;
  border: 0;
  border-radius: 0.25rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.0625rem;
  text-decoration: none;
  @media screen and (max-width: 70.999rem) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const PlaneIcon = styled(Icon)`
  width: 1.585rem;
  height: 1.305rem;
  top: 0rem;
  right: -1.5rem;
  position: relative;
`;

const BreakColumn = styled.div`
  display: none;
  flex-basis: 100%;
  @media screen and (max-width: 37.599rem) {
    display: block;
  }
  @media screen and (min-width: 37.699rem) and (max-width: 70.999rem) {
    display: none;
    &:nth-child(4),
    &:nth-child(9) {
      display: block;
    }
  }
  @media screen and (min-width: 71rem) {
    &:nth-child(9) {
      display: block;
    }
  }
`;
export default () => {
  return (
    <React.Fragment>
      <FormContainer>
        <FromInput placeholder="Отправление" />
        <ArrowIcon alt="Arrow" src={arrow} />
      </FormContainer>
      <BreakColumn />
      <FormContainer>
        <ToInput placeholder="Прибытие" />
      </FormContainer>
      <BreakColumn />
      <Dates />
      <BreakColumn />
      <FormContainer>
        <Passangers placeholder="1 пассажир, эконом" readOnly />
        <ShapeIcon alt="Triangle" src={shape} />
      </FormContainer>
      <BreakColumn />
      <CustomFormContainer>
        <SearchButton href="/">Найти билеты</SearchButton>
        <PlaneIcon alt="Plane" src={plane} />
      </CustomFormContainer>
    </React.Fragment>
  );
};
