import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>home</div>
        <div><link to='./students'/>students</div>
      </div>
    )
  }

}
