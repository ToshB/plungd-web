const PLAYER_SELECTED = 'results/PLAYER_SELECTED';

const initialState = {
  selectedPlayers: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PLAYER_SELECTED:
      return {
        ...state,
        selectedPlayers: [
          ...state.selectedPlayers,
          { id: action.payload.playerId, isWinner: false }
        ]
      }
    default: 
      return state;
  }
} 

export const playerSelected = (playerId) => {
  return { type: PLAYER_SELECTED, payload: { playerId }}
}