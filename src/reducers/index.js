import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import tokenReducer from './tokenReducer';
import questionsReducer from './questionsReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  playerReducer,
  tokenReducer,
  questionsReducer,
  timerReducer,
});

export default rootReducer;
// state.gravatarReducer.avatarUrl;
