import React, {Component} from 'react';
import {Header, Grid, Image, Divider} from 'semantic-ui-react';
import image from '../assets/ANDREW.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import AddScore from './AddScore'; 

const kaPow = ["Smack", "Kapow", "WHAM", "FLAP"]

class Game extends Component {
  state = {x: 250, y: 300, hits: 0, message: "", timer: 60}

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
    setInterval(this.countDown, 1000)
  }
  
  countDown = () => {
    const {timer} = this.state
    if(timer > 0){
      this.setState({timer: timer - 1})
    }
  }

  handleMouseMove = ({pageX: x, pageY: y}) => {
    this.setState({x, y})
  }

  hit = () => {
    const kaPow = ["Smack", "Kapow", "WHAM", "FLAP"]
    let rand = kaPow[Math.floor(Math.random() * kaPow.length)];
    const {hits} = this.state
    this.setState({hits: hits + 1, message: rand})
    this.fadeSlap()
  }

  fadeSlap = () => {
    setTimeout(() => {
      this.setState({message: ""})
    }, 500);
  }

  render() {
    const {hits, x, y, timer} = this.state
    if(timer !== 0){
      return (
        <Grid centered >
          <Divider hidden />
          <Image
            src=
            {
              x > 400 ?
                right
                :
                left
            }
            size='small'
            style={{
              position: 'absolute',
              padding: '0px !important',
              left: x - 90,
              top: y - 100,
              zIndex: "2",
            }}
          />
          <Grid.Row>
            <Header as='h1' textAlign='center'>Slap App</Header>
            <Header as='h2' textAlign='center'>Time Remaining:<br />{this.state.timer}</Header>
          </Grid.Row>
          <Grid.Row centered style={styles.cursor}>
            <Grid.Column width={4}>
              {this.state.message === "" ?
                null
                :
                <Header as="h2" textAlign='center'>{this.state.message}</Header>
              }
              <Image size='medium' onMouseOver={this.hit} src={image} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h3' textAlign='center'>Hits:<br />{hits}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else{
      return (
        <AddScore 
          closeGame={() => this.props.closeGame()} 
          hits={hits}
        />
      )
    }
  }
}
const styles = {
  image: {
    position: "absolute",
  },
  cursor: {
    cursor: "none !important",
  }
}

export default Game;
