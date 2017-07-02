import React, { Component } from 'react';
import PlayersAutocomplete from '../players-autocomplete';

class ResultsForm extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Players</h2>
          <ul>
            {this.props.selectedPlayers.map((player) => {
              return <li key={player.id}>{player.name}</li>
            })}
          </ul>
          <PlayersAutocomplete />
        </div>
      </div>
    );
  }
}

export default ResultsForm;