import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import {fetchSingleStudent, fetchCampuses} from '../store'

export default class singleStudent extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const studentId = this.props.match.params.id;
    const studentThunk = fetchSingleStudent(studentId)
    const campusThunk = fetchCampuses()
    store.dispatch(studentThunk)
    store.dispatch(campusThunk)

  }


  componentWillUnmount () {
    this.unsubscribe()
  }

  render() {
    const campuses = this.state.campuses;
    const student = this.state.currentStudent;
    const campusId = student.campusId
    return (
      <div>
        <h1>{student.name}</h1>
        <ul>
          <li>{student.email}</li>
          <li>{student.gpa}</li>
          <li>{campuses.filter(campus => campus.id === campusId).map((campus) => {
            return campus.name
          })}</li>
        </ul>
      </div>
    )
  }

}
