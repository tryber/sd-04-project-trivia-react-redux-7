import { PLAYER_INFO, ADD_ASSERTIONS } from '../actions';

const INICIAL_STATE = {
  avatarUrl: '',
  name: '',
  assertions: 0,
};

const gravatarReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_INFO:
      return {
        ...state,
        avatarUrl: action.url,
        name: action.name,
      };
    case ADD_ASSERTIONS:
      return {
        ...state,
        assertions: state.assertions + 1,
      };
    default:
      return state;
  }
};

export default gravatarReducer;
