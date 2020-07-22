import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestQuestions, addAssertions, clickedButton, scoreSum } from '../actions'; // actionCreate retorna uma tunk

class GameQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctBorder: { border: '' },
      incorrectBorder: { border: '' },
    };
    this.renderCategoryText = this.renderCategoryText.bind(this);
    this.renderQuestionText = this.renderQuestionText.bind(this);
    this.shuffleAnswer = this.shuffleAnswer.bind(this);
    this.clickedAnswer = this.clickedAnswer.bind(this);
    this.sumScore = this.sumScore.bind(this);
    this.countAssertionsAndSumScore = this.countAssertionsAndSumScore.bind(this);
  }

  componentDidMount() {
    const { token, getQuestions, player: { name, assertions, score, email } } = this.props;
    const playerObj = {
      player: {
        name,
        assertions,
        score,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('token', token);
    localStorage.setItem('state', JSON.stringify(playerObj));
    getQuestions(token);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isAnswerClicked) return true;
    if (nextProps.timer <= 28) return false;
    return true;
  }

  componentDidUpdate() {
    const { player: { name, assertions, score, email } } = this.props;
    const playerObj = {
      player: {
        name,
        assertions,
        score,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('state', JSON.stringify(playerObj));
    const now = JSON.parse(localStorage.getItem('state'));
    console.log(now.player.score);
  }

  shuffleAnswer() {
    const { dataQuestion } = this.props;
    // eslint-disable-next-line camelcase
    const { correct_answer, incorrect_answers } = dataQuestion[0];
    // eslint-disable-next-line camelcase
    const allAnswers = [correct_answer, ...incorrect_answers];

    let currentIndex = allAnswers.length;
    let temporaryValue;
    let randomIndex;

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

  sumScore() {
    const { dataQuestion, calculateScore, timer } = this.props;
    const { difficulty } = dataQuestion[0];
    switch (difficulty) {
      case 'easy':
        calculateScore(timer, 1);
        break;
      case 'medium':
        calculateScore(timer, 2);
        break;
      case 'hard':
        calculateScore(timer, 3);
        break;
      default:
        break;
    }
  }

  countAssertionsAndSumScore(buttonName) {
    const { sumAssertion } = this.props;
    if (buttonName !== '') {
      sumAssertion();
      this.sumScore();
    }
  }

  clickedAnswer(event) {
    const { name } = event.target;
    const { dispatchButtonClick } = this.props;
    this.setState({
      correctBorder: { border: '3px solid rgb(6, 240, 15)' },
      incorrectBorder: { border: '3px solid rgb(255, 0, 0)' },
    });
    this.countAssertionsAndSumScore(name);
    dispatchButtonClick();
  }

  renderCategoryText() {
    const { dataQuestion } = this.props;

    const { category } = dataQuestion[0];
    return (
      <div className="game-question-category">
        <h2 data-testid="question-category">{category}</h2>
      </div>
    );
  }

  renderQuestionText() {
    const { dataQuestion } = this.props;
    const { question } = dataQuestion[0];
    return (
      <div className="game-question-text">
        <p data-testid="question-text">{question}</p>
      </div>
    );
  }

  renderAnswerButton() {
    const { correctBorder, incorrectBorder } = this.state;
    const { dataQuestion, isAnswerClicked } = this.props;
    // eslint-disable-next-line camelcase
    const { correct_answer } = dataQuestion[0];
    const ShuffledAllAnswer = this.shuffleAnswer();
    const renderBtn = ShuffledAllAnswer.map((answer, index) => {
      // eslint-disable-next-line camelcase
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
      return (
        <button key={answer} style={incorrectBorder} disabled={isAnswerClicked} type="button" data-testid={`wrong-answer${index}`} onClick={this.clickedAnswer}>
          {answer}
        </button>
      );
    });
    return renderBtn;
  }

  render() {
    const { dataQuestion } = this.props;
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
  isAnswerClicked: state.timerReducer.isAnswerClicked,
  player: state.playerReducer,
  timer: state.timerReducer.time,
  isLoading: state.questionsReducer.isLoading,
  score: state.playerReducer.score,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(requestQuestions(token)),
  sumAssertion: () => dispatch(addAssertions()),
  dispatchButtonClick: () => dispatch(clickedButton()),
  calculateScore: (timer, difficulty) => dispatch(scoreSum(timer, difficulty)),
});

GameQuestion.defaultProps = {
  dataQuestion: Array,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameQuestion);

GameQuestion.propTypes = {
  token: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
  isAnswerClicked: PropTypes.bool.isRequired,
  timer: PropTypes.number.isRequired,
  dispatchButtonClick: PropTypes.func.isRequired,
  calculateScore: PropTypes.func.isRequired,
  sumAssertion: PropTypes.func.isRequired,
  player: PropTypes.shape({
    name: PropTypes.string,
    assertions: PropTypes.number,
    score: PropTypes.number,
    email: PropTypes.string,
  }).isRequired,
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
