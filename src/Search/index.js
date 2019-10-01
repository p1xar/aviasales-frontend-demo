import React from "react";
import styled from "styled-components";
import Inputs from "../Header/Inputs";
import Tickets from "./Tickets/Tickets";
import HeaderGradient from "../Header/common/HeaderGradient";
import FormWrapper from "../Header/common/FormWrapper";
import Logo from "../Header/common/Logo";
import Sidebar from "./Sidebar/Sidebar";

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
  @media screen and (max-width: 1050px) {
    width: 100%;
    justify-content: center;
  }
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
          <Tickets />
        </SearchWrapper>
      </SearchContainer>
    </React.Fragment>
  );
};
