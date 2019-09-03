import React from "react";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";

const words = [
  {
    name: "Москва, Россия"
  },
  {
    name: "Бангок, Тайланд"
  },
  {
    name: "Владивосток, Россия"
  },
  {
    name: "Барселона, Испания"
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : words.filter(
        word => word.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const StyledWrapper = styled.div`
  & .react-autosuggest__input {
    color: #4a4a4a;
    background: #fff;
    border: none;
    border-radius: 0.3rem 0 0 0.3rem;
    height: 3rem;
    padding-left: 1rem;
    margin-right: 0.3rem;
    position: relative;
    &:placeholder {
      color: #a0b0b9;
      font-size: 16px;
      line-height: 20px;
    }
    @media screen and (max-width: 1135px) {
      margin-bottom: 0.125rem;
      width: 17.25rem;
    }
    @media screen and (max-width: 1400px) {
      border-radius: 0.3rem 0.3rem 0 0;
    }
    @media screen and (min-width: 601px) and (max-width: 1120px) {
      border-radius: 0.3rem 0 0 0;
    }
  }
  & .react-autosuggest__suggestions-container {
    position: absolute;
    min-width: 100%;
    margin-top: 0.1rem;
    box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
      0px 2px 4px rgba(74, 74, 74, 0.2);
    border-radius: 2px;
    z-index: 4;
    background: #fff;
  }
  & .react-autosuggest__suggestions-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  & .react-autosuggest__suggestion {
    cursor: pointer;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.125rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    padding-left: 1rem;
    &:nth-child(2n) {
      background: #f4f4f4;
    }
  }
`;

class FromInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Отправление",
      value,
      onChange: this.onChange
    };

    return (
      <StyledWrapper>
        <Autosuggest
          id="from"
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </StyledWrapper>
    );
  }
}

export default FromInput;
