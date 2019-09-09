import React from "react";
import styled from "styled-components";
import StyledInput from "./common/StyledInput";

const PassengersInput = styled(StyledInput)`
  border-radius: 0 0.3rem 0.3rem 0;
  padding-right: 2rem;
  cursor: pointer;
  @media screen and (max-width: 70.999rem) {
    border-radius: 0 0 0.3rem 0.3rem;
    padding-right: 0;
  }
`;

const ToggleBoxContainer = styled.div``;

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      text: " пассажир",
      passAmount: 0,
      isBusiness: false
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state.opened;
    this.setState({ opened: !opened });
  }

  updateValue = value => {
    let summary = value.adults + value.teen + value.children;
    this.setState({
      passAmount: summary,
      isBusiness: value.isBusiness
    });
  };

  render() {
    return (
      <React.Fragment>
        <PassengersInput
          value={!this.state.isBusiness ? this.state.passAmount : 999}
        />
        <ToggleBox updateValue={this.updateValue} />
      </React.Fragment>
    );
  }
}

class ToggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 4,
      teen: 1,
      children: 1,
      isBusiness: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <button
          href="#"
          onClick={() => {
            this.props.updateValue(this.state);
          }}
        >
          pososi
        </button>
      </React.Fragment>
    );
  }
}

export default Passengers;
