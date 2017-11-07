import React, { Component } from 'react'
import _ from 'lodash'

import Cell from './cell.js'

const cardRank = 'AKQJT98765432'

export default class Grid extends Component {
  render() {
    return (
      <table className="grid">
        <tbody>
          { _.map(cardRank, this.renderRow) }
        </tbody>
      </table>
    )
  }

  renderRow(card1) {
    return (
      <tr key={card1}>
        { _.map(cardRank, card2 => <Cell key={card1+card2} hand={card1+card2} />) }
      </tr>
    )
  }
}
