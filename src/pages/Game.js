import React, { Component } from 'react';
import GameHeader from '../components/GameHeader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Questions from '../components/Questions';

class Game extends Component {

  componentDidMount() {
    const { dataToken } = this.props
    localStorage.setItem('token', dataToken)
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <GameHeader />
        {isLoading ? 'Loading' : <Questions />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  dataToken: state.tokenReducer.dataToken,
  isLoading: state.tokenReducer.isLoading,
});

export default connect(mapStateToProps)(Game);

Game.propTypes = {
  dataToken: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

// export default Game;
