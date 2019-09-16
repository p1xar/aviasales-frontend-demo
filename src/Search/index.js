import React from "react";
import styled from "styled-components";
import Inputs from "../Header/Inputs";
import HeaderGradient from "../Header/common/HeaderGradient";
import FormWrapper from "../Header/common/FormWrapper";
import Logo from "../Header/common/Logo";
import Sidebar from "./Sidebar";
const FormWrapperCustom = styled(FormWrapper)`
  margin-top: 2.5rem;
  padding-bottom: 2rem;
`;

const SearchContainer = styled.div`
  background: #eaeaea;
  padding-top: 3.5rem;
`;

const SearchWrapper = styled.div`
  width: 65rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  width: 44.5625rem;
`;
export default () => {
  return (
    <React.Fragment>
      <HeaderGradient>
        <Logo />
        <FormWrapperCustom>
          <Inputs />
        </FormWrapperCustom>
      </HeaderGradient>
      <SearchContainer>
        <SearchWrapper>
          <Sidebar />
          <Tickets> dolbaeb</Tickets>
        </SearchWrapper>
      </SearchContainer>
    </React.Fragment>
  );
};
