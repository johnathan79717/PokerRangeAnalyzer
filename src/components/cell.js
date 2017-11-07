import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleHand } from '../actions.js'

//const OFFSUIT = 'offsuit';
//const SUITED = 'suited';
//const PAIR = 'pair';

class Cell extends Component {
  isPair() {
    return this.props.handStr.length == 2
  }

  onClick(event) {
    this.props.toggleHand(this.props.handStr)
  }

  isSelected() {
    return !!this.props.selectedHands[this.props.handStr];
  }

  render() {
    const className = this.isSelected() ? 'event1a' : 'event0'
    return (
      <td onClick={this.onClick.bind(this)}
          className={`${className} ${this.isPair() ? 'diagonal' : ''}`}>
        <div className="cell">
          { this.props.handStr }
        </div>
      </td>
    )
  }
}

function mapStateToProps({ selectedHands }) {
  return { selectedHands }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleHand }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
