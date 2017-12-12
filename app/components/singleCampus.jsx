import React, {Component} from 'react';
import store from '../store'
import {Link} from 'react-router-dom';
import {fetchStudents, fetchSingleCampus} from '../store'

export default class singleCampus extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const campusId = this.props.match.params.id;
    const campusThunk = fetchSingleCampus(campusId)
    const studentThunk = fetchStudents();
    store.dispatch(campusThunk)
    store.dispatch(studentThunk)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const campus = this.state.currentCampus
    const students = this.state.students
    return (<div>
      <h1>{`${campus.name} Campus`}</h1>
      <ul>
        {
          students.filter(student => {
            return student.campusId === campus.id
          }).map(student => {
            return <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.name}</Link>
            </li>
          })
        }
      </ul>
    </div>)
  }

}
