import { COUNTDOWN } from '../actions';

const INITIAL_STATE = {
  time: 30,
  setIntervalId: '',
};

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTDOWN:
      return {
        ...state,
        time: state.time - 1,
      };
    default:
      return state;
  }
};

export default timeReducer;
