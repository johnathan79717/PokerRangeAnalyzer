import React, { Component } from 'react'

//const OFFSUIT = 'offsuit';
//const SUITED = 'suited';
//const PAIR = 'pair';

export default class Cell extends Component {
  isPair() {
    return this.props.handStr.length == 2;
  }

  render() {
    return (
      <td className={`event0${this.isPair() ? 'p' : ''}`}>
        <div className="cell">
          { this.props.handStr }
        </div>
      </td>
    )
  }
}


