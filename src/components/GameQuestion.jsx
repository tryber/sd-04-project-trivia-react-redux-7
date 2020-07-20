import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderCategoryText = this.renderCategoryText.bind(this);
    this.renderQuestionText = this.renderQuestionText.bind(this);
    this.shuffleAnswer = this.shuffleAnswer.bind(this);
  }

  shuffleAnswer(array) {
    let currentIndex = array.length; let temporaryValue; let
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  renderCategoryText() {
    const { dataQuestion } = this.props;
    const { category } = dataQuestion;
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
    const { question } = dataQuestion;
    return (
      <div className="game-question-text">
        <p data-testid="question-text">
          {question}
        </p>
      </div>
    );
  }

  renderAnswerButton() {
    const { dataQuestion } = this.props;
    const { correct_answer, incorrect_answer } = dataQuestion;
    const allAnswers = [...correct_answer, ...incorrect_answer];
    const shuffledAnswers = this.shuffleAnswer(allAnswers);

    const renderBtn = shuffledAnswers.map((answer) => {
      if (answer === correct_answer) return <button type="button" data-testid="correct-answer">{answer}</button>;
      return <button type="button" data-testid="wrong-answer">{answer}</button>;
    });
    return renderBtn;
  }

  render() {
    const { dataQuestion } = this.props;
    console.log(dataQuestion);
    return (
      <div className="game-question">
        {this.renderCategoryText()}
        {this.renderQuestionText()}
        {/* {this.renderAnswerButton()} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataQuestion: state.questionsReducer.dataQuestions,
});

export default connect(mapStateToProps)(GameQuestion);
