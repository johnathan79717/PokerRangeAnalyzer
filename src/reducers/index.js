import { combineReducers } from 'redux';
import selectedHands from './selected_hands.js'
import activeRange from './active_range.js'

const rootReducer = combineReducers({
  selectedHands,
  activeRange,
});

export default rootReducer;
