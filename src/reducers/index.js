import { combineReducers } from 'redux';
import gravatarReducer from './gravatarReducer';
import tokenReducer from './tokenReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  gravatarReducer,
  tokenReducer,
  questionsReducer,
});

export default rootReducer;
// state.gravatarReducer.avatarUrl;
