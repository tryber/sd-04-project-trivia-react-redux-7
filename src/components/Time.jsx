import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countdown } from '../actions';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setIntervalId: '',
    };
    this.timeManagement = this.timeManagement.bind(this);
    // this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    this.timeManagement();
  }

  componentDidUpdate() {
    const { setIntervalId } = this.state;
    const { time } = this.props;
    if (time <= 0) {
      clearInterval(setIntervalId);
      console.log('clearInterval done');
    }
  }

  timeManagement() {
    const { timeCount } = this.props;
    const setIntervalId = setInterval(timeCount, 1000);
    this.setState({ setIntervalId });
  }

  render() {
    const { time } = this.props;
    return <div>{time}</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeCount: () => dispatch(countdown()),
});

const mapStateToProps = (state) => ({
  time: state.timerReducer.time,
});

Time.propTypes = {
  timeCount: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);
