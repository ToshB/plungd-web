import { combineReducers } from 'redux';
import results from './results';
import players from './players';

export default combineReducers({
  results,
  players
});