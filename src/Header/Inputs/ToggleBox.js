import React from "react";
import styled from "styled-components";

const ToggleBoxContainer = styled.div`
  min-width: 98%;
  background: tomato;
  position: absolute;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

class ToggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAdultsChange(e.target.value);
    this.props.onTeenChange(e.target.value);
    this.props.onChildrenChange(e.target.value);
  }

  render() {
    const adults = this.props.adults;
    const teen = this.props.teen;
    const children = this.props.children;
    const isBusiness = this.props.isBusiness;
    return (
      <React.Fragment>
        <ToggleBoxContainer>
          <div>
            <button onClick={this.props.decrementAdult}>-</button>
            <input value={adults} onChange={this.handleChange} readOnly />
            <button onClick={this.props.incrementAdult}>+</button>
          </div>
          <div>
            <button onClick={this.props.decrementTeen}>-</button>
            <input value={teen} onChange={this.handleChange} readOnly />
            <button onClick={this.props.incrementTeen}>+</button>
          </div>
          <div>
            <button onClick={this.props.decrementChildren}>-</button>
            <input value={children} onChange={this.handleChange} readOnly />
            <button onClick={this.props.incrementChildren}>+</button>
          </div>
          <div>
            <input value={isBusiness} readOnly />
            <button>+</button>
          </div>
        </ToggleBoxContainer>
      </React.Fragment>
    );
  }
}

export default ToggleBox;
