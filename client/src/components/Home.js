import React, { Component } from 'react';
import { Header, Grid, Image} from 'semantic-ui-react';
import image from '../assets/ANDREW.png'

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
    const {hits} = this.state
    return (
      <div>
        <Header as='h1' textAlign='center'>Hits: <br />{hits}</Header>
        {this.state.message === "" ? 
        null
        :
          <Header as="h2" textAlign='center'>{this.state.message}</Header>
        }
        <Image onMouseOver={this.hit} src={image} />

      </div>
    );
  }
}

export default Home;
