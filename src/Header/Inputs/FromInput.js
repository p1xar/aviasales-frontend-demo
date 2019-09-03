import React from "react";
import styled from "styled-components";
import Autosuggest from "react-autosuggest";
import StyledWrapper from "./StyledWrapper";
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
