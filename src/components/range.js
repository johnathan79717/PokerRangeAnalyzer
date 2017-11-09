import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setActiveRange } from '../actions.js'

class Range extends Component {
  onClick() {
    this.props.setActiveRange(this.props.num);
  }

  render() {
    return (
      <tr>
        <td className={`event${this.props.num}a range_label`}>
          <input type="radio"
                 checked={this.props.num == this.props.activeRange}
                 onClick={this.onClick.bind(this)}
                 readOnly
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text"
                 defaultValue={this.props.value}
                 onClick={this.onClick.bind(this)}
          />
        </td>
      </tr>
    )
  }
}

function mapStateToProps({ activeRange }) {
  return { activeRange }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveRange }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Range)
