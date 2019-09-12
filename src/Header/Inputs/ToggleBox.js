import React from "react";
import styled from "styled-components";

const ToggleBoxContainer = styled.div`
  width: 13.1875rem;
  background: tomato;
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

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

const ToggleBoxItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const ToggleBoxControls = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #dbdbdb;
  border: 1px solid #dbdbdb;
  width: 1.5rem;
  height: 2rem;
  padding: 0.3rem 0.5rem;
  background: #fff;
  transition: 0.5s;
  &:hover {
    color: #00ace2;
  }
`;

const MinusButton = styled(Button)`
  border-radius: 0.25rem 0 0 0.25rem;
`;

const PlusButton = styled(Button)`
  border-radius: 0 0.25rem 0.25rem 0;
`;

const Counter = styled.input`
  padding: 0.363rem 0.5rem;
  max-width: 1.2rem;
  text-align: center;
  border: 1px solid #dbdbdb;
  margin-right: ${props => props.right || "initial"};
`;

const Checkbox = styled(Counter)`
  width: 1.8rem;
  height: 1.8rem;
  max-width: 100%;
`;

class ToggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeAdults = this.handleChangeAdults.bind(this);
    this.handleChangeTeen = this.handleChangeTeen.bind(this);
    this.handleChangeChildren = this.handleChangeChildren.bind(this);
  }

  handleChangeAdults(e) {
    this.props.onAdultsChange(e.target.value);
  }

  handleChangeTeen(e) {
    this.props.onTeenChange(e.target.value);
  }

  handleChangeChildren(e) {
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
          <ToggleBoxItem>
            <Label>Взрослые</Label>
            <ToggleBoxControls>
              <MinusButton onClick={this.props.decrementAdult}>-</MinusButton>
              <Counter
                value={adults}
                onChange={this.handleChangeAdults}
                readOnly
              />
              <PlusButton onClick={this.props.incrementAdult}>+</PlusButton>
            </ToggleBoxControls>
          </ToggleBoxItem>
          <ToggleBoxItem>
            <Label>Дети до 12 лет</Label>
            <ToggleBoxControls>
              <MinusButton onClick={this.props.decrementTeen}>-</MinusButton>
              <Counter value={teen} onChange={this.handleChangeTeen} readOnly />
              <PlusButton onClick={this.props.incrementTeen}>+</PlusButton>
            </ToggleBoxControls>
          </ToggleBoxItem>
          <ToggleBoxItem>
            <Label>Дети до 2 лет</Label>
            <ToggleBoxControls>
              <MinusButton onClick={this.props.decrementChildren}>
                -
              </MinusButton>
              <Counter
                value={children}
                onChange={this.handleChangeChildren}
                readOnly
              />
              <PlusButton onClick={this.props.incrementChildren}>+</PlusButton>
            </ToggleBoxControls>
          </ToggleBoxItem>
          <ToggleBoxItem>
            <ToggleBoxControls>
              <Checkbox
                type="checkbox"
                checked={isBusiness}
                onChange={this.props.toggleCheckBox}
                right="0.375rem"
              />
              <Label>Бизнес-класс</Label>
            </ToggleBoxControls>
          </ToggleBoxItem>
        </ToggleBoxContainer>
      </React.Fragment>
    );
  }
}

export default ToggleBox;
