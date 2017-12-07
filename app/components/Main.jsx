import React, { Component } from 'react';
import NavBar from './NavBar';
import CampusView from './CampusView';


export default class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <CampusView />
      </div>
    )
  }

}
