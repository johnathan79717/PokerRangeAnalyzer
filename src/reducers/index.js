import { combineReducers } from 'redux';
import SelectedHandsReducer from './selected_hands.js'

const rootReducer = combineReducers({
  selectedHands: SelectedHandsReducer,
});

export default rootReducer;
