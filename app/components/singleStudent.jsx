import React, { Component } from 'react';
import store from '../store'
import {fetchSingleStudent, fetchCampuses} from '../store'
import { Link } from 'react-router-dom';

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


  list (){
    {if (true) {
      return (
        <div>can i do this</div>
      )
    }}
  }

  render() {
    const campuses = this.state.campuses;
    const student = this.state.currentStudent;
    const campusId = student.campusId
    return (
      <div>
        <h1>{student.name}</h1>
        <list />
        <ul>
          <li>{student.email}</li>
          <li>{student.gpa}</li>
          <Link id={student.id} to={`/campuses/${campusId}`}><li>{campuses.filter(campus => campus.id === campusId).map((campus) => {
            return campus.name
          })}</li></Link>
        </ul>
      </div>
    )
  }

}
