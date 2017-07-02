import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

const shouldItemRender = (player, value) => {
  return player.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
};

const menuStyle = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2px 0',
  fontSize: '90%',
  position: 'fixed',
  overflow: 'auto',
  maxHeight: '50%',
};

const menuItemStyle = (isHighlighted) => {
  return { 
    background: isHighlighted ? 'lightgray' : 'white',
    padding: '5px',
    cursor: 'pointer'
  }
}

class PlayersAutocomplete extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handlePlayerSelected = this.handlePlayerSelected.bind(this);
  }

  handlePlayerSelected(playerId) {
    this.props.playerSelected(parseInt(playerId, 10));
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="form-group">
        <Autocomplete
            inputProps={{ 'className': 'form-control' }}
            value={this.state.value}
            items={this.props.players.map(p => ({ id: p.id.toString(), name: p.name }))}
            autoHighlight={true}
            getItemValue={(item) => item.id}
            onChange={(event, value) => this.setState({ value })}
            onSelect={this.handlePlayerSelected}
            shouldItemRender={shouldItemRender}
            menuStyle={menuStyle}
            renderItem={(player, isHighlighted) =>
              <div style={menuItemStyle(isHighlighted)}>
                {player.name}
              </div>
            }
          />
      </div>
    );
  }
}

export default PlayersAutocomplete;