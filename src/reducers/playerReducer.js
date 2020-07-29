import {
  PLAYER_INFO,
  ADD_ASSERTIONS,
  CALCULATE_SCORE,
  RESET_STATE_TO_RESTART,
} from '../actions';

const INICIAL_STATE = {
  assertions: 0,
  score: 0,
  avatarUrl: '',
  email: '',
  name: '',
};

const playerReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_INFO:
      return {
        ...state,
        avatarUrl: action.url,
        email: action.email,
        name: action.name,
      };
    case ADD_ASSERTIONS:
      return {
        ...state,
        assertions: state.assertions + 1,
      };
    case CALCULATE_SCORE:
      return {
        ...state,
        score: state.score + 10 + (action.timer * action.difficulty),
      };
    case RESET_STATE_TO_RESTART:
      return {
        ...INICIAL_STATE,
      };
    default:
      return state;
  }
};

export default playerReducer;
