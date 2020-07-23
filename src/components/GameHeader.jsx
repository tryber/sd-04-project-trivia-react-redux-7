import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GameHeader extends Component {
  render() {
    const {
      name, score, avatarUrl, questionIndex,
    } = this.props;
    return (
      <div className="game-header">
        <img src={`${avatarUrl}`} alt="/" data-testid="header-profile-picture" />
        <div className="game-header-name" data-testid="header-player-name">
          {`Player Name: ${name}`}
        </div>
        <div className="game-header-score" data-testid="header-score">
          {`Score: ${score}`}
        </div>
        <div>
          {`index: ${questionIndex}`}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.playerReducer.name,
  avatarUrl: state.playerReducer.avatarUrl,
  score: state.playerReducer.score,
  questionIndex: state.questionsReducer.questionIndex,
});

GameHeader.defaultProps = {
  score: 0,
};
export default connect(mapStateToProps)(GameHeader);

GameHeader.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  avatarUrl: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
