import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import moment from "moment";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/ru";
import "./style.css";
import styled from "styled-components";
import FormContainer from "./common/FormContainer";
import date from "./date.svg";

const Icon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1.125rem;
  right: 1rem;
  top: 1rem;
`;

const CustomDayPickerInput = styled(DayPickerInput)`
  & input {
    @media screen and (max-width: 1135px) {
      width: 7.99rem;
      border-radius: 0rem 0rem 0rem 0rem;
    }
  }
`;

const CustomFormContainer = styled(FormContainer)`
  @media screen and (max-width: 768px) {
    margin-bottom: 0.125rem;
  }
`;

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    this.setState({
      from
    });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <React.Fragment>
        <CustomFormContainer>
          <DayPickerInput
            value={from}
            placeholder="Туда"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 1,
              localeUtils: MomentLocaleUtils,
              locale: "Ru",
              onDayClick: () => this.to.getInput().focus()
            }}
            onDayChange={this.handleFromChange}
          />
          <Icon alt="Date" src={date} />
        </CustomFormContainer>
        <CustomFormContainer>
          <CustomDayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="Обратно"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              localeUtils: MomentLocaleUtils,
              locale: "Ru",
              fromMonth: from,
              numberOfMonths: 1
            }}
            onDayChange={this.handleToChange}
          />
          <Icon alt="Date" src={date} />
        </CustomFormContainer>
      </React.Fragment>
    );
  }
}
