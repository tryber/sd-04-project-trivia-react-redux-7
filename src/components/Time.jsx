import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { timeout } from '../actions';

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
    const { timeIsOut } = this.props;
    if (time === 0) {
      clearInterval(setIntervalId);
      timeIsOut();
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

const mapDispatchToProps = (dispatch) => ({
  timeIsOut: () => dispatch(timeout()),
});

Time.propTypes = {
  timeIsOut: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Time);
