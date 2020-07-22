import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestQuestions, addAssertions } from '../actions'; // actionCreate retorna uma tunk

class GameQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAnswerClicked: false,
      correctBorder: { border: '' },
      incorrectBorder: { border: '' },
    };
    this.renderCategoryText = this.renderCategoryText.bind(this);
    this.renderQuestionText = this.renderQuestionText.bind(this);
    this.shuffleAnswer = this.shuffleAnswer.bind(this);
    this.clickedAnswer = this.clickedAnswer.bind(this);
    this.countAssertions = this.countAssertions.bind(this);
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    localStorage.setItem('token', token);
    getQuestions(token);
  }

  shuffleAnswer() {
    const { dataQuestion } = this.props;
    const { correct_answer, incorrect_answers } = dataQuestion[0];
    const allAnswers = [correct_answer, ...incorrect_answers];

    let currentIndex = allAnswers.length; let temporaryValue; let
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = allAnswers[currentIndex];
      allAnswers[currentIndex] = allAnswers[randomIndex];
      allAnswers[randomIndex] = temporaryValue;
    }

    return allAnswers;
  }

  countAssertions(name) {
    const { sumAssertion } = this.props;
    if (name !== '') {
      sumAssertion();
    }
  }

  clickedAnswer(event) {
    const { name } = event.target;
    this.setState({
      isAnswerClicked: true,
      correctBorder: { border: '3px solid rgb(6, 240, 15)' },
      incorrectBorder: { border: '3px solid rgb(255, 0, 0)' },
    });
    this.countAssertions(name);
  }

  renderCategoryText() {
    const { dataQuestion } = this.props;
    console.log(dataQuestion);

    const { category } = dataQuestion[0];
    console.log(category);
    return (
      <div className="game-question-category">
        <h2 data-testid="question-category">
          {category}
        </h2>
      </div>
    );
  }

  renderQuestionText() {
    const { dataQuestion } = this.props;
    const { question } = dataQuestion[0];
    return (
      <div className="game-question-text">
        <p data-testid="question-text">
          {question}
        </p>
      </div>
    );
  }

  renderAnswerButton() {
    const { isAnswerClicked, correctBorder, incorrectBorder } = this.state;
    const { dataQuestion } = this.props;
    const { correct_answer, incorrect_answers } = dataQuestion[0];
    console.log(correct_answer, incorrect_answers);
    const ShuffledAllAnswer = this.shuffleAnswer();

    const renderBtn = ShuffledAllAnswer.map((answer, index) => {
      if (answer === correct_answer) {
        return (
          <button
            key={answer}
            name={index}
            style={correctBorder}
            disabled={isAnswerClicked}
            type="button"
            data-testid="correct-answer"
            onClick={this.clickedAnswer}
          >
            {answer}
          </button>
        );
      }
      return <button key={answer} style={incorrectBorder} disabled={isAnswerClicked} type="button" data-testid={`wrong-answer${index}`} onClick={this.clickedAnswer}>{answer}</button>;
    });
    return renderBtn;
  }

  render() {
    const { dataQuestion } = this.props;
    const { assertion } = this.state;
    console.log('assertions = ', assertion);
    if (dataQuestion.length === 0) return <p>loading...</p>;
    return (
      <div className="game-question">
        {this.renderCategoryText()}
        {this.renderQuestionText()}
        {this.renderAnswerButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataQuestion: state.questionsReducer.dataQuestions,
  token: state.tokenReducer.dataToken,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(requestQuestions(token)),
  sumAssertion: () => dispatch(addAssertions()),
});

GameQuestion.defaultProps = {
  dataQuestion: Array,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameQuestion);

GameQuestion.propTypes = {
  token: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
  sumAssertion: PropTypes.func.isRequired,
  dataQuestion: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      type: PropTypes.string,
      difficulty: PropTypes.string,
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};
