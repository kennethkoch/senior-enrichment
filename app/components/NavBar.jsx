import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/campuses'>View Campuses</Link>
        </div>
        <div>
          <Link to='/students'>View Students</Link>
        </div>
      </div>
    )
  }

}
