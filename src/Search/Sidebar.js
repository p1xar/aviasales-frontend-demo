import React from "react";
import styled from "styled-components";
import triangle from "./triangle.svg";
import clear from "./clear.svg";

const Sidebar = styled.div`
  width: 18.75rem;
  background: lightgrey;
  border-radius: 0.25rem;
  background: #fff;
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-top: 1.3rem;
`;

const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SidebarTitleText = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #5b5b5c;
`;

const Triangle = styled.img`
  width: 0.625rem;
  height: 0.3125rem;
  margin-right: 0.375rem;
`;

const Clear = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: auto;
`;

const SidebarItems = styled(SidebarSection)``;

const CheckBoxItem = styled(SidebarTitle)`
  height: 2.25rem;
`;

const CheckBoxLabel = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 2.25rem;
  color: #4a4a4a;
`;

const CheckBox = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  background: #ffffff;
  border: 0.0625rem solid #a0b0b9;
  border-radius: 0.25rem;
  margin-right: 0.375rem;
`;

export default () => {
  return (
    <React.Fragment>
      <Sidebar>
        <SidebarSection>
          <SidebarTitle>
            <Triangle alt="Triangle" src={triangle} />
            <SidebarTitleText href="#">ПЕРЕСАДКИ</SidebarTitleText>
            <Clear alt="Clear" src={clear} />
          </SidebarTitle>
          <SidebarItems>
            <CheckBoxItem>
              <CheckBox />
              <CheckBoxLabel>Все</CheckBoxLabel>
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox />
              <CheckBoxLabel>Без пересадок</CheckBoxLabel>
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox />
              <CheckBoxLabel>2 пересадки</CheckBoxLabel>
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox />
              <CheckBoxLabel>3 пересадки</CheckBoxLabel>
            </CheckBoxItem>
          </SidebarItems>
        </SidebarSection>
        <hr />
      </Sidebar>
    </React.Fragment>
  );
};
