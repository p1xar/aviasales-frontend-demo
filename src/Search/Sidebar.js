import React from "react";
import styled from "styled-components";
import triangle from "./triangle.svg";
import clear from "./clear.svg";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const SidebarWrapper = styled.div`
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
  transform: ${props => props.rotate || ""};
  transition: 0.3s ease;
`;

const Clear = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: auto;
  display: ${props => props.display || "block"};
`;

const SidebarItems = styled(SidebarSection)`
  transition: all 0.4s linear;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  max-height: ${props => props.maxHeight || "18.75rem"};
  overflow-y: hidden;
`;

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

const Hr = styled.hr`
  background-color: #dddddd;
  border: 0;
  height: 0.0625rem;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transfer: true,
      timeFlight: true
    };
    this.handleTransferChange = this.handleTransferChange.bind(this);
    this.handleTimeFlightChange = this.handleTimeFlightChange.bind(this);
  }

  handleTransferChange(event) {
    event.preventDefault();
    this.setState({ transfer: !this.state.transfer });
  }

  handleTimeFlightChange(event) {
    event.preventDefault();
    this.setState({ timeFlight: !this.state.timeFlight });
  }
  render() {
    return (
      <React.Fragment>
        <SidebarWrapper>
          <SidebarSection>
            <SidebarTitle>
              <Triangle
                alt="Triangle"
                src={triangle}
                rotate={this.state.transfer ? "" : "rotate(180deg)"}
              />
              <SidebarTitleText href="#" onClick={this.handleTransferChange}>
                ПЕРЕСАДКИ
              </SidebarTitleText>
              <Clear
                alt="Clear"
                src={clear}
                display={this.state.transfer ? "flex" : "none"}
                onClick={this.handleTransferChange}
              />
            </SidebarTitle>
            <SidebarItems maxHeight={this.state.transfer ? "18.75rem" : "0rem"}>
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
          <Hr />
          <SidebarSection>
            <SidebarTitle>
              <Triangle
                alt="Triangle"
                src={triangle}
                rotate={this.state.timeFlight ? "" : "rotate(180deg)"}
              />
              <SidebarTitleText href="#" onClick={this.handleTimeFlightChange}>
                Время вылета и прибытия
              </SidebarTitleText>
              <Clear
                alt="Clear"
                src={clear}
                display={this.state.timeFlight ? "flex" : "none"}
                onClick={this.handleTimeFlightChange}
              />
            </SidebarTitle>
            <SidebarItems
              maxHeight={this.state.timeFlight ? "18.75rem" : "0rem"}
            >
              <CheckBoxItem>
                <Slider />
                <Range />
              </CheckBoxItem>
            </SidebarItems>
          </SidebarSection>
        </SidebarWrapper>
      </React.Fragment>
    );
  }
}

export default Sidebar;
