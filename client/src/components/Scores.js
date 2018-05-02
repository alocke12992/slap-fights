import React from 'react';
import {connect} from 'react-redux';
import {getScores} from '../actions/scores';
import {Grid, Header, Table} from 'semantic-ui-react';

class Scores extends React.Component{

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(getScores())
  }

  listScores = (score) => {
    return(
      <Table.Row key={score.id}>
        <Table.Cell>{score.username}</Table.Cell>
        <Table.Cell singleLine>{score.hits}</Table.Cell>
      </Table.Row>
    )
  }

  render(){
    const {scores} = this.props
    return(
      <Grid>
        <Grid.Row>
          <Header as='h3'>Top Scores</Header>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Username</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {scores.map(score => {
                return(
                  this.listScores(score)
                )
              })}
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const {scores} = state
  return {scores};
};

export default connect(mapStateToProps)(Scores)