import { SET_ACTIVE_RANGE } from '../actions.js'

export default function(state=1, action) {
  if (action.type == SET_ACTIVE_RANGE) {
    state = action.payload;
  }
  return state;
}
