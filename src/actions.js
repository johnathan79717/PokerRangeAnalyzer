export const TOGGLE_HAND = 'toggle_hand'

export function toggleHand(hand) {
  return {
    type: TOGGLE_HAND,
    payload: hand,
  }
}
