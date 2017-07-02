import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayersAutocomplete from './PlayersAutocomplete'
import { playerSelected } from '../../modules/results';

class PlayersAutocompleteContainer extends Component {
  constructor() {
    super();
    this.handlePlayerSelected = this.handlePlayerSelected.bind(this);
  }

  handlePlayerSelected(filterText) {
    this.props.dispatch(playerSelected(filterText));
  }

  render() {
    return (
      <PlayersAutocomplete 
        players={this.props.players}
        playerSelected={this.handlePlayerSelected}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.players,
});

export default connect(mapStateToProps)(PlayersAutocompleteContainer);
