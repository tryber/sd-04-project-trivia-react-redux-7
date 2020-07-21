import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameHeader from '../components/GameHeader';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  render() {
    // const { score } = this.props; // store
    const numeroDeAcertos = 4; /// atualizar depois
    const score = 5;
    return (
      <div>
        <GameHeader />

        <p data-testid="feedback-text">{(numeroDeAcertos >= 3 ? 'Mandou bem!' : 'Podia ser melhor...')}</p>

        <p>Você acertou <span data-testid="feedback-total-question">{numeroDeAcertos}</span> questões</p>
        <p>Um total de <span data-testid="feedback-total-score">{score}</span> pontos</p>
        <Link to="/rank">
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

// const mapStateToProps = (state) => ({
// score: state.
// });

export default connect(null, null)(Feedback); // arrumar depois

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};