import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestQuestions } from '../actions'; // actionCreate retorna uma tunk

class Questions extends Component {
  componentDidMount() {
    const { token, getQuestions } = this.props;
    localStorage.setItem('token', token);
    getQuestions(token);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => ({
  token: state.tokenReducer.dataToken,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(requestQuestions(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);

Questions.propTypes = {
  token: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
};
