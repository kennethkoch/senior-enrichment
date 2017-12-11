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
      <div className='navbar' id='nav'>
          <Link to='/campuses'><div className='nav-button'>View Campuses</div></Link>
          <Link to='/students'><div className='nav-button'>View Students</div></Link>
      </div>
    )
  }

}
