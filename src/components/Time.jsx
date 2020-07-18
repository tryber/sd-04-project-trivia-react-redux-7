import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
      setIntervalId: '',
    };
    this.timeManagement = this.timeManagement.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    this.timeManagement();
  }

  componentDidUpdate() {
    const { time, setIntervalId } = this.state;
    if (time === 0) {
      clearInterval(setIntervalId);
    }
  }

  timeManagement() {
    const setIntervalId = setInterval(this.countdown, 1000);
    this.setState({ setIntervalId });
  }

  countdown() {
    this.setState((state) => ({ time: state.time - 1 }));
  }

  render() {
    const { time } = this.state;
    return <div>{time}</div>;
  }
}

export default Time;
