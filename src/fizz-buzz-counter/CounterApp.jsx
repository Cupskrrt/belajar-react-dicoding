import React from "react";
import {CounterDisplay, IncreaseButton, ResetButton} from './CounterDisplay'

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    //binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this)
  }
  

  onIncreaseEventHandler() {
    this.setState((previouseState) => {
      return {
        count: previouseState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler}/>
        <CounterDisplay count={this.state.count}/>
        <ResetButton reset={this.onResetEventHandler}/>
      </div>
    );
  }
}

export default CounterApp;
