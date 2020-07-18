import React, { Component } from "react";
import { connect } from "react-redux";
import { requestQuestions } from "../actions"; // actionCreate retorna uma tunk
import { PropTypes } from "prop-types";

class Questions extends Component {
  componentDidMount() {
    const { token, getQuestions } = this.props;
    localStorage.setItem("token", token);
    getQuestions(token);
  }

  render() {
    const { token } = this.props;
    console.log(token);
    return <div></div>;
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
