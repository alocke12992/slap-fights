import React, { Component, Fragment } from 'react';
import Game from './Game'
import Scores from './Scores'

class Home extends Component {
  state = {playGame: false}


  render(){
    const {playGame} = this.state
    if (playGame) {
      return(
        <Fragment>
          <Game />
        </Fragment>
      )
    } else {
      return(
        <Fragment>
          <Scores />
        </Fragment>
      )
    }
  }
}
export default Home;
