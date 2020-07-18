import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';
import Questions from '../components/Questions';

class Game extends Component {

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
  isLoading: PropTypes.bool.isRequired,
};
