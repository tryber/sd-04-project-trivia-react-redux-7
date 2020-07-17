import { combineReducers } from 'redux';
import gravatarReducer from './gravatarReducer';
import tokenReducer from './tokenReducer';
import questionsReducer from './questionsReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  gravatarReducer,
  tokenReducer,
  questionsReducer,
  timerReducer,
});

export default rootReducer;
// state.gravatarReducer.avatarUrl;
