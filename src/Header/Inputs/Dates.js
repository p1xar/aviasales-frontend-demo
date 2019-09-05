import React from "react";
import DayPickerInput, { LocaleUtils } from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import moment from "moment";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/ru";
import "./style.css";

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
        <DayPickerInput
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
      </React.Fragment>
    );
  }
}
