import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Notification } from 'react-bulma-components';
import HourSelect from '../../components/HourSelect';
import AgeSelect from '../../components/AgeSelect';

class StressForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      workHours: 0,
      sleepHours: 0,
      age: undefined,
      ageGroup: undefined,
      showError: false,
    };
  }

  validate = () => {
    const { workHours, sleepHours, ageGroup } = this.state;

    if (!workHours || !sleepHours || ageGroup === undefined) {
      this.setState({ showError: true });
      return false;
    }

    this.setState({ showError: false });
    return true;
  };

  handleHoursChange = field => value => this.setState({ [field]: value });

  handleAgeChange = (age, ageGroup) => this.setState({ age, ageGroup });

  handleSubmit = e => {
    e.preventDefault();

    const { workHours, sleepHours, ageGroup } = this.state;
    const { onSubmit } = this.props;

    if (this.validate()) {
      onSubmit({ workHours, sleepHours, ageGroup });
    }
  };

  render() {
    const { age, workHours, sleepHours, showError } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {showError && (
          <Notification color="danger">Please finish the form</Notification>
        )}
        <AgeSelect
          label="How old are you?"
          onChange={this.handleAgeChange}
          value={age}
        />
        <HourSelect
          label="How many hours do you work every day?"
          value={workHours}
          max={24 - sleepHours}
          onChange={this.handleHoursChange('workHours')}
        />
        <HourSelect
          label="How many hours do you sleep every day?"
          value={sleepHours}
          max={24 - workHours}
          onChange={this.handleHoursChange('sleepHours')}
        />
        <Button color="primary">Check it out!</Button>
      </form>
    );
  }
}

export default StressForm;
