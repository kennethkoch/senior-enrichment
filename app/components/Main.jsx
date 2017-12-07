import React, { Component } from 'react';
import NavBar from './NavBar';
import CampusView from './CampusView';
import StudentsView from './StudentsView';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';



export default class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route path='/students' component={StudentsView}/>
          <Route path='/campuses' component={CampusView}/>
        </Switch>
        </div>
      </Router>
    )
  }

}
