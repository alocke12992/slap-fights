import React, {Fragment} from 'react';
import {Grid, Button, Header, Segment, Divider, Form} from 'semantic-ui-react';
import {connect} from 'react-redux'
import {addScore} from '../actions/scores';

class AddScore extends React.Component{
  state = {showForm: false, username: ''}

  endGame = () => {
    this.props.closeGame()
  }
  toggleForm = () => {
    const {showForm} = this.state
    this.setState( state => {
      return{
        showForm: !state.showForm
      }
    })
  }

  form = (hits) => {
    const {username} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input 
            name='username'
            value={username}
            onChange={this.handleChange}
            placeholder='Username' 
          />
        </Form.Field>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit =(e) =>{
    e.preventDefault
    const {username} = this.state
    const {dispatch, closeGame, hits} = this.props
    dispatch(addScore({username, hits}))
    closeGame()
  }

  render(){
    const {hits} = this.props 
    const {showForm} = this.state
    return(
      <Grid centered>
        <Grid.Row centered>
          <Grid.Column width={10} textAlign='center'>
          <Header as='h1'>GAME OVER</Header>
          <Header as='h3'>Your Score</Header>
          <Header as='h4'>{hits}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10} textAlign='center'>
            {showForm ? 
              this.form(hits)
            :
            <Fragment>
              <Header as='h3'>Would you like to record your score?</Header>
                <Button onClick={this.toggleForm}>Add Score</Button>
                <Button onClick={this.endGame}>End Game</Button>
            </Fragment>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect()(AddScore)