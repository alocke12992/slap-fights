import {
  SCORES,
  ADD_SCORE,

} from '../actions/scores';

const scores = (state = [], action) => {
  switch (action.type) {
    case SCORES:
      return action.scores;
    case ADD_SCORE:
      return [action.score, ...state];
    default:
      return state;
  }
};

export default scores;
