import React from "react";
import styled from "styled-components";
import Inputs from "../Header/Inputs";
import HeaderGradient from "../Header/common/HeaderGradient";
import FormWrapper from "../Header/common/FormWrapper";
import Logo from "../Header/common/Logo";
const FormWrapperCustom = styled(FormWrapper)`
  margin-top: 2.5rem;
  padding-bottom: 2rem;
`;
export default () => {
  return (
    <HeaderGradient>
      <Logo />
      <FormWrapperCustom>
        <Inputs />
      </FormWrapperCustom>
    </HeaderGradient>
  );
};
