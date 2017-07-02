import { getPlayers } from '../api/plungd';

const LOAD_REQUEST = 'players/LOAD_REQUEST';
const LOAD_SUCCESS = 'players/LOAD_SUCCESS';
const LOAD_ERROR = 'players/LOAD_ERROR';

const initialState = {
  players: [],
  isLoading: false,
  loadError: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        loadError: action.payload.error
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        players: action.payload.players
      };
    default: 
      return state;
  }
};

export const loadPlayers = () => (dispatch) => {
  dispatch({ type: LOAD_REQUEST });
  getPlayers().then((players) => {
    dispatch({ type: LOAD_SUCCESS, payload: { players } });
  }, (error) => {
    dispatch({ type: LOAD_ERROR, payload: { error: error.message } });
  });
}