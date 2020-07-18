import React, { Component } from 'react';

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
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

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

  renderCategoryText(category) {
    return (
      <div className="game-question-category">
        <h2 data-testid="question-category">
          {this.category}
        </h2>
      </div>
    );
  }

  renderQuestionText(question) {
    return (
      <div className="game-question-text">
        <p data-testid="question-text">
          {this.question}
        </p>
      </div>
    );
  }

  renderAnswerButton(correct_answer, incorrect_answer) {
    const allAnswers = [correct_answer, ...incorrect_answer]
    const shuffledAnswers = this.shuffleAnswer(allAnswers);
    const renderBtn =  shuffledAnswers.map((answer) => {  
      if (answer === correct_answer) return <button data-testid="correct-answer">{answer}</button>
      return <button data-testid={`wrong-answer-${indexOf(answer)}`}>{answer}</button>
      });
    return renderBtn;
    }
  }

  render() {
    const { questionsApiData } = this.props;
    const { category, question, correct_answer, incorrect_answer} = questionsApiData;
    return (
      <div className="game-question">
        {this.renderCategoryText(category)}
        {this.renderQuestionText(question)}
        {this.renderAnswerButton(correct_answer, incorrect_answer)}
      </div>
    )
  }

export default GameQuestion;
