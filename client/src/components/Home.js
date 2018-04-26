import React, { Component } from 'react';
import { Header, Grid, Image} from 'semantic-ui-react';

class Home extends Component {
  state = {x: 250, y: 300}

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  } 

  handleMouseMove = ({pageX: x, pageY: y}) => {
    this.setState({x, y})
  }
  
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
