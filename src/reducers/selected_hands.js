import { TOGGLE_HAND } from '../actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case TOGGLE_HAND:
      return { ...state, [action.payload]: !state[action.payload] }
    default:
      return state
  }
}
