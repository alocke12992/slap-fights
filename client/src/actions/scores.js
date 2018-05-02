import axios from 'axios'
import {setFlash} from '../actions/flash';
export const SCORES = "SCORES"
export const ADD_SCORE = "ADD_SCORE"

export const getScores = () => {
  return (dispatch) => {
    axios.get('/api/scores')
      .then(res => dispatch({type: SCORES, scores: res.data}))
  }
}

export const addScore = (score) =>{
  return (dispatch) => {
    axios.post('/api/scores', score)
      .then(res => dispatch({type: ADD_SCORE, score: res.data}))
      .then(dispatch(setFlash("Your Score has been added", 'green')))
  }
}
  