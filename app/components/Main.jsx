import React, { Component } from 'react';
import NavBar from './NavBar';
import CampusView from './CampusView';
import StudentsView from './StudentsView';
import { Link } from 'react-router-dom';
import {browserHistory} from 'react-router'
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';
import Index from './Index';



export default class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/students' component={StudentsView}/>
          <Route path='/students/:id' component={singleStudent}/>
          <Route exact path='/campuses' component={CampusView}/>
          <Route path='/campuses/:id' component={singleCampus}/>
          <Route component={Index}/>
        </Switch>
        </div>
      </Router>
    )
  }

}


/**
**/
