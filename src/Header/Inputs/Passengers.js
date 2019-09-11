import React from "react";
import styled from "styled-components";
import StyledInput from "./common/StyledInput";
import ToggleBox from "./ToggleBox";

const PassengersInput = styled(StyledInput)`
  position: relative;
  border-radius: 0 0.3rem 0.3rem 0;
  padding-right: 2rem;
  cursor: pointer;
  @media screen and (max-width: 70.999rem) {
    border-radius: 0 0 0.3rem 0.3rem;
    padding-right: 0;
  }
`;

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      text: " пассажир",
      passAmount: 0,
      adults: 1,
      teen: 1,
      children: 1,
      isBusiness: true
    };
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleTeenChange = this.handleTeenChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
  }

  handleAdultsChange(value) {
    this.setState({ adults: value });
  }
  handleTeenChange(value) {
    this.setState({ teen: value });
  }
  handleChildrenChange(value) {
    this.setState({ children: value });
  }

  toggleCheckBox = () => {
    this.setState({ isBusiness: !this.state.isBusiness });
  };

  incrementAdults() {
    this.setState({
      adults: this.state.adults + 1
    });
  }

  decrementAdults() {
    if (this.state.adults !== 0 || this.state.adults > 0) {
      this.setState({
        adults: this.state.adults - 1
      });
    }
  }

  incrementTeens() {
    this.setState({
      teen: this.state.teen + 1
    });
  }

  decrementTeens() {
    if (this.state.teen !== 0 || this.state.teen > 0) {
      this.setState({
        teen: this.state.teen - 1
      });
    }
  }

  incrementChildrens() {
    this.setState({
      children: this.state.children + 1
    });
  }

  decrementChildrens() {
    if (this.state.children !== 0 || this.state.children > 0) {
      this.setState({
        children: this.state.children - 1
      });
    }
  }

  render() {
    const adults = this.state.adults;
    const teen = this.state.teen;
    const children = this.state.children;
    const isBusiness = this.state.isBusiness;
    const summary = this.state.adults + this.state.teen + this.state.children;
    return (
      <React.Fragment>
        <PassengersInput
          value={
            isBusiness
              ? summary + " пассажир, бизнес"
              : summary + " пассажир, эконом"
          }
        ></PassengersInput>
        <ToggleBox
          adults={adults}
          teen={teen}
          children={children}
          isBusiness={isBusiness}
          onAdultsChange={this.handleAdultsChange}
          onTeenChange={this.handleChildrenChange}
          onChildrenChange={this.handleChildrenChange}
          toggleCheckBox={this.toggleCheckBox}
          incrementAdult={this.incrementAdults.bind(this)}
          decrementAdult={this.decrementAdults.bind(this)}
          incrementTeen={this.incrementTeens.bind(this)}
          decrementTeen={this.decrementTeens.bind(this)}
          incrementChildren={this.incrementChildrens.bind(this)}
          decrementChildren={this.decrementChildrens.bind(this)}
        ></ToggleBox>
      </React.Fragment>
    );
  }
}

export default Passengers;
