import { PLAYER_INFO } from '../actions';

const INICIAL_STATE = {
  avatarUrl: '',
  name: '',
};

const gravatarReducer = (state = INICIAL_STATE, action) => {
  console.log(action.token);
  switch (action.type) {
    case PLAYER_INFO:
      return {
        ...state,
        avatarUrl: action.url,
        name: action.name,
      };
    default:
      return state;
  }
};

export default gravatarReducer;
