import React from "react";
import styled from "styled-components";
import triangle from "./triangle.svg";
import clear from "./clear.svg";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import planeicon from "./planeicon.svg";

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
  max-height: ${props => props.maxHeight || "20.75rem"};
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxItem = styled(SidebarTitle)`
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
  margin-top: 1rem;
`;

const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${props => props.top || "initial"};
`;

const RouteFrom = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #323333;
  margin-right: ${props => props.right || "0"};
`;

const RouteTo = styled(RouteFrom)``;

const PlaneIcon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.3125rem;
`;

const SliderWrapper = styled.div`
  display: flex;
`;

const SliderSubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #323333;
  margin-bottom: 0rem;
`;

const SliderLabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderLabel = styled(SliderSubTitle)``;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transfer: true,
      timeFlight: true,
      flightDuration: true
    };
    this.handleTransferChange = this.handleTransferChange.bind(this);
    this.handleTimeFlightChange = this.handleTimeFlightChange.bind(this);
    this.handleTimeFlightDurationChange = this.handleTimeFlightDurationChange.bind(
      this
    );
  }

  handleTransferChange(event) {
    event.preventDefault();
    this.setState({ transfer: !this.state.transfer });
  }

  handleTimeFlightChange(event) {
    event.preventDefault();
    this.setState({ timeFlight: !this.state.timeFlight });
  }

  handleTimeFlightDurationChange(event) {
    event.preventDefault();
    this.setState({ flightDuration: !this.state.flightDuration });
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
                rotate={this.state.transfer ? "" : "rotate(-90deg)"}
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
              <CheckboxItem>
                <CheckBox />
                <CheckBoxLabel>Все</CheckBoxLabel>
              </CheckboxItem>
              <CheckboxItem>
                <CheckBox />
                <CheckBoxLabel>Без пересадок</CheckBoxLabel>
              </CheckboxItem>
              <CheckboxItem>
                <CheckBox />
                <CheckBoxLabel>2 пересадки</CheckBoxLabel>
              </CheckboxItem>
              <CheckboxItem>
                <CheckBox />
                <CheckBoxLabel>3 пересадки</CheckBoxLabel>
              </CheckboxItem>
            </SidebarItems>
          </SidebarSection>
          <Hr />
          <SidebarSection>
            <SidebarTitle>
              <Triangle
                alt="Triangle"
                src={triangle}
                rotate={this.state.timeFlight ? "" : "rotate(-90deg)"}
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
            <SidebarItems maxHeight={this.state.timeFlight ? "30rem" : "0rem"}>
              <SidebarItem>
                <RouteWrapper>
                  <RouteFrom right={"0.3125rem"}>Москва</RouteFrom>
                  <PlaneIcon alt="Plane Icon" src={planeicon} />
                  <RouteTo>Барселона</RouteTo>
                </RouteWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderSubTitle>Вылет из Москвы:</SliderSubTitle>
                <SliderLabelsWrapper>
                  <SliderLabel>c 00:05, 24 фев</SliderLabel>
                  <SliderLabel>до 23:45, 24 фев</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderSubTitle>Прибытие в Барселону: </SliderSubTitle>
                <SliderLabelsWrapper>
                  <SliderLabel>c 03:05, 24 фев</SliderLabel>
                  <SliderLabel>до 13:50, 26 фев</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
              <SidebarItem>
                <RouteWrapper top={"1.5rem"}>
                  <RouteFrom right={"0.3125rem"}>Барселона</RouteFrom>
                  <PlaneIcon alt="Plane Icon" src={planeicon} />
                  <RouteTo>Москва</RouteTo>
                </RouteWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderSubTitle>Вылет из Барселоны: </SliderSubTitle>
                <SliderLabelsWrapper>
                  <SliderLabel>c 06:00, 3 мар</SliderLabel>
                  <SliderLabel>до 23:45, 3 мар</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderSubTitle>Прибытие в Москву: </SliderSubTitle>
                <SliderLabelsWrapper>
                  <SliderLabel>c 15:00, 3 мар</SliderLabel>
                  <SliderLabel>до 09:55, 5 мар</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
            </SidebarItems>
          </SidebarSection>
          <Hr />
          <SidebarSection>
            <SidebarTitle>
              <Triangle
                alt="Triangle"
                src={triangle}
                rotate={this.state.flightDuration ? "" : "rotate(-90deg)"}
              />
              <SidebarTitleText
                href="#"
                onClick={this.handleTimeFlightDurationChange}
              >
                Время вылета и прибытия
              </SidebarTitleText>
              <Clear
                alt="Clear"
                src={clear}
                display={this.state.flightDuration ? "flex" : "none"}
                onClick={this.handleTimeFlightDurationChange}
              />
            </SidebarTitle>
            <SidebarItems
              maxHeight={this.state.flightDuration ? "30rem" : "0rem"}
            >
              <SidebarItem>
                <RouteWrapper>
                  <RouteFrom right={"0.3125rem"}>Москва</RouteFrom>
                  <PlaneIcon alt="Plane Icon" src={planeicon} />
                  <RouteTo>Барселона</RouteTo>
                </RouteWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderLabelsWrapper>
                  <SliderLabel>от 04ч 20м</SliderLabel>
                  <SliderLabel>до 48ч 50м</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
              <SidebarItem>
                <RouteWrapper>
                  <RouteFrom top={"1.5rem"} right={"0.3125rem"}>
                    Барселона
                  </RouteFrom>
                  <PlaneIcon alt="Plane Icon" src={planeicon} />
                  <RouteTo>Москва</RouteTo>
                </RouteWrapper>
              </SidebarItem>
              <SidebarItem>
                <SliderLabelsWrapper>
                  <SliderLabel>от 04ч 10м</SliderLabel>
                  <SliderLabel>до 41ч 20м</SliderLabel>
                </SliderLabelsWrapper>
                <SliderWrapper>
                  <Slider />
                </SliderWrapper>
              </SidebarItem>
            </SidebarItems>
          </SidebarSection>
          <Hr />
        </SidebarWrapper>
      </React.Fragment>
    );
  }
}

export default Sidebar;
