export const cardRanks = 'AKQJT98765432'

export function numToCardRank(i) {
  return cardRanks[14-i];
}
