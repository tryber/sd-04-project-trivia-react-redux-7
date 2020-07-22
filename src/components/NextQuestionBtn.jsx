import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeQuestionsIndex, nextQuestion } from '../actions';

class NextQuestionBtn extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const { changeQuestionIndex, questionIndex, resetForNewQuestion } = this.props;
    if (questionIndex < 4) {
      resetForNewQuestion();
      changeQuestionIndex();
    }
  }

  render() {
    return (
      <div>
        <button type="button" data-testid="btn-next" onClick={this.onClickHandler}>Próxima</button>
      </div>
    );
  }
}

const mapStatoToProps = (state) => ({
  questionIndex: state.questionsReducer.questionIndex,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuestionIndex: () => dispatch(changeQuestionsIndex()),
  resetForNewQuestion: () => dispatch(nextQuestion()),
});

export default connect(mapStatoToProps, mapDispatchToProps)(NextQuestionBtn);

NextQuestionBtn.propTypes = {
  changeQuestionIndex: PropTypes.func.isRequired,
  resetForNewQuestion: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
