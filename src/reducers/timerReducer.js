import { TIMEOUT } from '../actions';

const INITIAL_STATE = {
  time: 30,
  setIntervalId: '',
  timeout: false,
};

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMEOUT:
      return {
        ...state,
        timeout: !state.timeout,
      };
    default:
      return state;
  }
};

export default timeReducer;
