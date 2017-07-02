import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsForm from './ResultsForm'

class ResultsFormContainer extends Component {
  render() {
    return (
      <ResultsForm 
        selectedPlayers={this.props.selectedPlayers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPlayers: state.results.selectedPlayers.map((selectedPlayer) => {
      return {
        ...state.players.players.find(p => p.id === selectedPlayer.id),
        ...selectedPlayer
      }
    })
  };
};


export default connect(mapStateToProps)(ResultsFormContainer);
