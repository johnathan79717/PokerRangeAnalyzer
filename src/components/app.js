import React, { Component } from 'react';
import Grid from './grid.js'
import Range from './range.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Grid />
        <table width="">
          <thead>
            <tr><th align="left">Color / Action</th></tr>
          </thead>
          <tbody>
            <Range num={1} value="Call" />
            <Range num={2} value="Raise" />
            <Range num={3} value="3-bet" />
            <Range num={0} value="Fold" />
          </tbody>
        </table>
      </div>
    )
  }
}
