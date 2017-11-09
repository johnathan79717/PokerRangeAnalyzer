import { TOGGLE_HAND } from '../actions.js';

export default function(state = {}, action) {
  if (action.type == TOGGLE_HAND) {
    return { ...state, [action.payload]: !state[action.payload] }
  }
  return state
}
