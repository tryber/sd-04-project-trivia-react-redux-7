import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { countdown, clickedButton } from '../actions';

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
    const { time, isAnswerClicked, dispatchButtonClick } = this.props;
    if (time <= 0 || isAnswerClicked) {
      clearInterval(setIntervalId);
      console.log('clearInterval done');
      dispatchButtonClick();
    }
  }

  timeManagement() {
    const { timeCount } = this.props;
    const setIntervalId = setInterval(timeCount, 1000);
    this.setState({ setIntervalId });
  }

  render() {
    const { time } = this.props;
    return <div>{`Timer: ${time}`}</div>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  timeCount: () => dispatch(countdown()),
  dispatchButtonClick: () => dispatch(clickedButton()),
});

const mapStateToProps = (state) => ({
  time: state.timerReducer.time,
  isAnswerClicked: state.timerReducer.isAnswerClicked,
});

Time.propTypes = {
  timeCount: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  isAnswerClicked: PropTypes.bool.isRequired,
  dispatchButtonClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);
