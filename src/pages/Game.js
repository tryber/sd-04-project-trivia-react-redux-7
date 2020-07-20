import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';
<<<<<<< HEAD
import GameQuestion from '../components/GameQuestion';
=======
import Questions from '../components/Questions';
>>>>>>> f374b138127b05b1a36245074ae11186cdd801e6

class Game extends Component {

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <GameHeader />
<<<<<<< HEAD
        <GameQuestion />
=======
        {isLoading ? 'Loading' : <Questions />}
>>>>>>> f374b138127b05b1a36245074ae11186cdd801e6
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
  isLoading: PropTypes.bool.isRequired,
};
