import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import {gotCampuses, gotStudents} from '../store'

export default class StudentsView extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

componentDidMount() {
  this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  axios.get('/api/students')
  .then(res => res.data)
  .then((students) => {
    store.dispatch(gotStudents(students))
  axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      store.dispatch(gotCampuses(campuses))
      // console.log(campuses);
    })
  })
}

componentWillUnmount() {
  this.unsubscribe()
}



  render() {
    const students = this.state.students
    const campuses = this.state.campuses

    return (
      <div>
      <table>
        <th>#</th>
        <th>Name</th>
        <th>Campus</th>
        {students.map(student => {
          let thisCampus = {}
          const filterdCampuses = campuses.filter(campus => {
            return campus.id === student.campusId
          })
          filterdCampuses.forEach(campus => {
            thisCampus = campus
          })
          return <tr key = {student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{thisCampus.name}</td>
          </tr>
        })}
      </table>
      </div>
    )
  }

}
