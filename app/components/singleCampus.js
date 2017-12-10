import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'
import {gotStudents, gotSingleCampus} from '../store'

export default class singleCampus extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const campusId = this.props.match.params.id;
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then((campus) => {
    store.dispatch(gotSingleCampus(campus))
    axios.get('/api/students')
      .then(res => res.data)
      .then((students) => {
        store.dispatch(gotStudents(students))
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const campus = this.state.currentCampus
    const students = this.state.students
    return (
      <div>
        <h1>{`${campus.name} Campus`}</h1>
        <ul>
        {students.filter(student => {
          return student.campusId === campus.id
        }).map(student => {
          return <li key={student.id}>{student.name}</li>
        })}
        </ul>
      </div>
    )
  }

}
