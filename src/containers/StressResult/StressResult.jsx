import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, Button } from 'react-bulma-components';
import { shareResult } from '../../libs/fbInstant';

class StressResult extends Component {
  static propTypes = {
    stressLevel: PropTypes.number,
    onReset: PropTypes.func,
  };

  handleShare = () => {
    const { stressLevel } = this.props;
    shareResult({
      intent: 'REQUEST',
      text: `I am ${stressLevel}% stressed. Please check out your stress level too!`,
    });
  };

  render() {
    const { stressLevel, onReset } = this.props;

    return (
      <Content>
        <p>
          You are <strong>{stressLevel}%</strong> stressed!
        </p>
        <Button color="info" onClick={onReset}>
          Share result!
        </Button>
        <Button color="primary" onClick={onReset}>
          Click here to play again!
        </Button>
      </Content>
    );
  }
}

StressResult.defaultProps = {};

export default StressResult;
