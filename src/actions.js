export const CLICK_HAND = 'click_hand'
export const SET_ACTIVE_RANGE = 'set_active_range'

export function clickHand(hand, activeRange) {
  return {
    type: CLICK_HAND,
    payload: { hand, activeRange },
  }
}

export function setActiveRange(rangeNum) {
  return {
    type: SET_ACTIVE_RANGE,
    payload: rangeNum,
  }
}
