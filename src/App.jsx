import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import {
  Container,
  Heading,
  Box,
  Loader,
  Notification,
  Button,
} from 'react-bulma-components';
import { checkStressLevel } from './libs/stress';
import { startGame } from './libs/fbInstant';
import StressForm from './containers/StressForm';
import StressResult from './containers/StressResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      isLoading: true,
      hasError: false,
      stressLevel: 0,
    };
  }

  componentDidMount() {
    this.handleStart();
  }

  handleStart = () => {
    startGame()
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, hasError: true });
      });
  };

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
    const { showResult, stressLevel, isLoading, hasError } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    if (hasError) {
      return (
        <Box>
          <Notification color="danger">
            There was problem starting the game.
          </Notification>
          <Button color="primary">Click here to start again</Button>
        </Box>
      );
    }

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
