import { COUNTDOWN, TIME_MANAGEMENT } from '../actions';

const INITIAL_STATE = {
  time: 30,
  setIntervalId: '',
};

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIME_MANAGEMENT:
      return {
        ...state,
        setIntervalId: action.setIntervalId,
      };
    case COUNTDOWN:
      return {
        ...state,
        time: action.newTime,
      };
    default:
      return state;
  }
};

export default timeReducer;
