import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Heading, Box } from 'react-bulma-components';
import { checkStressLevel } from './libs/stress';
import StressForm from './containers/StressForm';
import StressResult from './containers/StressResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      stressLevel: 0,
    };
  }

  handleSubmit = values => {
    this.setState({
      showResult: true,
      stressLevel: checkStressLevel(values),
    });
  };

  handleReset = () => {
    this.setState({ showResult: false });
  };

  render() {
    const { showResult, stressLevel } = this.state;

    return (
      <Container>
        <Box>
          <Heading size={1}>Check your stress level</Heading>
          {showResult ? (
            <StressResult
              stressLevel={stressLevel}
              onReset={this.handleReset}
            />
          ) : (
            <StressForm onSubmit={this.handleSubmit} />
          )}
        </Box>
      </Container>
    );
  }
}

export default hot(module)(App);
