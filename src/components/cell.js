import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clickHand } from '../actions.js'

class Cell extends Component {
  isPair() {
    return this.props.handStr.length == 2
  }

  onClick(event) {
    console.log("before click")
    console.log(this.props.handToRange);
    this.props.clickHand(this.props.handStr, this.props.activeRange)
  }

  render() {
    console.log(this.props.handToRange);
    const className = `event${this.props.handToRange[this.props.handStr] || 0}a`
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

function mapStateToProps({ handToRange, activeRange }) {
  return { handToRange, activeRange }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickHand }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
