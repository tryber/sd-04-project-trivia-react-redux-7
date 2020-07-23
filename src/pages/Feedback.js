import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameHeader from '../components/GameHeader';


class Feedback extends Component {
  render() {
    const { player } = this.props;
    const { assertions, score } = player;
    return (
      <div>
        <GameHeader />
        <p data-testid="feedback-text">{(assertions >= 3 ?
          'Mandou bem!' : 'Podia ser melhor...')}</p>

        <p>Você acertou <span data-testid="feedback-total-question">
          {assertions}</span> questões</p>
        <p>Um total de <span data-testid="feedback-total-score">{score}</span> pontos</p>
        <Link to="/ranking">
          <button data-testid="btn-ranking" type="button">
            VER RANKING
          </button></Link>
        <Link to="/">
          <button data-testid="btn-play-again">
            JOGAR NOVAMENTE
         </button>
        </Link>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.playerReducer.score,
  player: state.playerReducer,
});


export default connect(mapStateToProps)(Feedback); // arrumar depois

Feedback.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
};
