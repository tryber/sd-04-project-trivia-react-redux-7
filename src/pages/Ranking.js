import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetStateToRestart } from '../actions';
// import { saveRanking } from '../actions';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.insertNewPlayerOnRanking = this.insertNewPlayerOnRanking.bind(this);
  }

  insertNewPlayerOnRanking() {
    const {
      player: { name, score, avatarUrl },
    } = this.props;

    const rankingOnStorage = JSON.parse(localStorage.getItem('ranking'));
    let newRanking = [];

    if (rankingOnStorage) {
      newRanking = [...rankingOnStorage, { name, score, picture: avatarUrl }];
    } else {
      newRanking = [{ name, score, picture: avatarUrl }];
    }

    newRanking.sort((a, b) => a.score - b.score).reverse();
    localStorage.setItem('ranking', JSON.stringify(newRanking));
    return newRanking;
  }

  render() {
    const ranking = this.insertNewPlayerOnRanking();
    const { resetToRestart } = this.props;
    return (
      <div>
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          <ol>
            {ranking.map(({ name, score, picture }, index) => (
              <li key={`${name}_${score}`}>
                <img src={picture} alt="" />
                <h3 data-testid={`player-name-${index}`}>{name}</h3>
                <h4 data-testid={`player-score-${index}`}>{score}</h4>
              </li>
            ))}
          </ol>
        </div>
        <Link to="/">
          <button data-testid="btn-go-home" type="button" onClick={() => resetToRestart()}>
            Jogar Novamente!
          </button>

        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetToRestart: () => dispatch(resetStateToRestart()),
});

const mapStateToProps = (state) => ({
  player: state.playerReducer,
});

Ranking.propTypes = {
  resetToRestart: PropTypes.func.isRequired,
  player: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    avatarUrl: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
