import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Game from './Game';
import Scores from './Scores';
import {Grid, Button, Divider, Segment, Header} from 'semantic-ui-react';

class Home extends Component {
  state = {playGame: false}

  toggleGame = () => {
    const {playGame} = this.state
    this.setState( state => {
      return{
        playGame: !state.playGame
      }
    })
  }


  render(){
    const {playGame} = this.state
    if (playGame) {
      return(
        <Fragment>
          <Game closeGame={this.toggleGame}/>
        </Fragment>
      )
    } else {
      return(
        <Grid centered>
          <Divider hidden />
          <Grid.Row centered>
            <Header as='h1'>Slap App</Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={10}>
              <Button onClick={this.toggleGame}>Start Slapping</Button>
              <Segment basic>
                <Scores/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }
}


export default Home;
