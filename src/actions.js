export const TOGGLE_HAND = 'toggle_hand'
export const SET_ACTIVE_RANGE = 'set_active_range'

export function toggleHand(hand) {
  return {
    type: TOGGLE_HAND,
    payload: hand,
  }
}

export function setActiveRange(rangeNum) {
  return {
    type: SET_ACTIVE_RANGE,
    payload: rangeNum,
  }
}
