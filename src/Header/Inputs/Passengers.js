import React from "react";
import styled from "styled-components";
import StyledInput from "./common/StyledInput";
import ToggleBox from "./ToggleBox";
const PassengersInput = styled(StyledInput)`
  position: relative;
  border-radius: 0 0.3rem 0.3rem 0;
  padding-right: 2rem;
  cursor: pointer;
  @media screen and (max-width: 1135px) {
    border-radius: 0 0 0.3rem 0.3rem;
    padding-right: 0;
  }
`;

const ToggleBoxContainer = styled.div`
  width: 13.1875rem;
  position: absolute;
  background: #fff;
  box-shadow: 0rem 0rem 0.5rem rgba(74, 74, 74, 0.2),
    0rem 0.125rem 0.25rem rgba(74, 74, 74, 0.2);
  border-radius: 0.125rem;
  padding: 0 1rem;
  margin-top: 0.1rem;
  z-index: 2;
  @media screen and (max-width: 1135px) {
    width: 16.2rem;
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
      teen: 0,
      children: 0,
      isBusiness: false,
      hideDiv: true
    };
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleTeenChange = this.handleTeenChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.toggleBoxOpen = this.toggleBoxOpen.bind(this);
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

  toggleBoxOpen = () => {
    this.setState({ hideDiv: !this.state.hideDiv });
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
          onClick={this.toggleBoxOpen}
          readOnly
        ></PassengersInput>
        <ToggleBoxContainer hidden={this.state.hideDiv}>
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
        </ToggleBoxContainer>
      </React.Fragment>
    );
  }
}

export default Passengers;
