import React, { Component } from 'react'
import _ from 'lodash'
import { numToCardRank } from '../helper.js'

import Cell from './cell.js'

export default class Grid extends Component {
  render() {
    return (
      <table className="grid">
        <tbody>
          { _.map(_.range(14, 2, -1), this.renderRow.bind(this)) }
        </tbody>
      </table>
    )
  }

  numsToHandStr(card1, card2) {
    const cardStr1 = numToCardRank(card1);
    const cardStr2 = numToCardRank(card2);
    if (card1 < card2) {
      return cardStr2 + cardStr1 + 'o';
    } else if (card1 > card2) {
      return cardStr1 + cardStr2 + 's';
    } else {
      return cardStr1 + cardStr2;
    }
  }

  renderRow(card1) {
    return (
      <tr key={card1}>
        {
          _.map(
            _.range(14, 2, -1),
            card2 =>
              <Cell
                key={`${card1}-${card2}`}
                handStr={this.numsToHandStr(card1, card2)}
              />
          )
        }
      </tr>
    )
  }
}
