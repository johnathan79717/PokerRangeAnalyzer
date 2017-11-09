import { combineReducers } from 'redux';
import handToRange from './hand_to_range.js'
import activeRange from './active_range.js'

const rootReducer = combineReducers({
  handToRange,
  activeRange,
});

export default rootReducer;
