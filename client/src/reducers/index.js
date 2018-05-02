import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import scores from './scores';

const rootReducer = combineReducers({
  user,
  flash, 
  scores,
});

export default rootReducer;
