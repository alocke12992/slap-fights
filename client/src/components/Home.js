import React, { Component } from 'react';
import { Header, Grid, Image, Divider} from 'semantic-ui-react';
import image from '../assets/ANDREW.png'
import test from '../assets/punch.png'

const kaPow = ["Smack", "Kapow", "WHAM", "FLAP"]

class Home extends Component {
  state = {x: 250, y: 300, hits: 0, message: ""}

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  } 

  handleMouseMove = ({pageX: x, pageY: y}) => {
    this.setState({x, y})
  }

  hit = () => {
    const kaPow = ["Smack", "Kapow", "WHAM", "FLAP"]
    let rand = kaPow[Math.floor(Math.random() * kaPow.length)];
    debugger
    const {hits} = this.state
    this.setState({ hits: hits + 1, message: rand})
    this.fadeSlap() 
  }

  fadeSlap = () => {
    setTimeout(() => {
      this.setState({message: ""})
    }, 500);
  }

  render() {
    const {hits, x, y} = this.state
    return (
      <Grid centered>
        <Divider hidden />
        <Image 
          src={test} 
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
        </Grid.Row>
        <Grid.Row centered>
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
  }
}
const styles = {
  image: {
    position: 'absolute',
  }
}

export default Home;
