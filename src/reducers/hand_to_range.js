import { CLICK_HAND } from '../actions.js';

export default function(state = {}, action) {
  if (action.type == CLICK_HAND) {
    console.log(CLICK_HAND);
    const { hand, activeRange } = action.payload;
    console.log(`hand = ${hand}, activeRange = ${activeRange}`)
    return {
      ...state,
      [hand]: state[hand] == activeRange ? 0 : activeRange,
    }
  }
  return state
}
