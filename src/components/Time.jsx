import React from 'react';
// import { connect } from 'react-redux';
// import { timeManagement } from '../actions';

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
    console.log('udate time: ', time);
    if (time === 0) {
      clearInterval(setIntervalId);
      console.log('clear interval done');
    }
  }

  timeManagement() {
    const setIntervalId = setInterval(this.countdown, 1000);
    this.setState({ setIntervalId });
  }

  countdown() {
    console.log('time tests');
    this.setState((state) => ({ time: state.time - 1 }));
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

// const mapStateToProps = (state) => ({
//   setIntervalId: state.timerReducer.setIntervalId,
//   time: state.timerReducer.time,
// });

// const mapDispatchToProps = (dispatch) => ({
//   timeMan: (time) => dispatch(timeManagement(time)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Time);

export default Time;
