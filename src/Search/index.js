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

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ticketPrice: "7 712",
        from: {
          DepartureTime: "00:05",
          DepartureCity: "Москва",
          DepartureDate: "24 фев 2018, Cб",
          ArrivalTime: "03:05",
          ArrivalCity: "Барселона",
          ArrivalDate: "24 фев 2018, Cб",
          TimeDuration: "5 ч",
          DepartureAirport: "VKO",
          ArrivalAirport: "BCN"
        },
        to: {
          DepartureTime: "10:35",
          DepartureCity: "Барселона",
          DepartureDate: "3 мар 2018, Cб",
          ArrivalTime: "17:10",
          ArrivalCity: "Москва",
          ArrivalDate: "3 мар 2018, Cб",
          TimeDuration: "4 ч 35 м",
          DepartureAirport: "BCN",
          ArrivalAirport: "SVO"
        }
      }
    };
  }
  render() {
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
            <Tickets ticketPrice={this.state.data} />
          </SearchWrapper>
        </SearchContainer>
      </React.Fragment>
    );
  }
}
