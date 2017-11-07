import React, { Component } from 'react'

export default class Cell extends Component {
  render() {
    return (
      <td className="event0" style={{ position: 'relative' }}>
        <div className="cell">
          { this.props.hand }
        </div>
      </td>
    )
  }
}
