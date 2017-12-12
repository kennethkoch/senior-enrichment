import React, {Component} from 'react';
import store from '../store'
import {Link} from 'react-router-dom';
import {fetchCampuses, fetchStudents, deleteStudent} from '../store'
import AddStudent from './AddStudent';

export default class StudentsView extends Component {
  constructor() {
    super()
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const studentThunk = fetchStudents()
    const campusThunk = fetchCampuses()
    store.dispatch(studentThunk)
    store.dispatch(campusThunk)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleClick(evt) {
    evt.preventDefault()
    const studentId = evt.target.getAttribute('id')
    const thunk = deleteStudent(studentId)
    store.dispatch(thunk)
  }

  render() {
    const students = this.state.students
    const campuses = this.state.campuses

    return (<div>
      <div>
        <Link to='/addStudent'>
          <div className='nav-button' id='add'>Add Student</div>
        </Link>
      </div>
      <table>
        <th>#</th>
        <th>Name</th>
        <th>Campus</th>
        {
          students.map(student => {
            let thisCampus = {}
            const filterdCampuses = campuses.filter(campus => {
              return campus.id === student.campusId
            })
            filterdCampuses.forEach(campus => {
              thisCampus = campus
            })
            return <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                <Link to={`/students/${student.id}`}>{student.firstName}</Link>
              </td>
              <td>
                <Link to={`/campuses/${thisCampus.id}`}>{thisCampus.name}</Link>
              </td>
              <td>
                <Link to={`/editStudent/${student.id}`}>
                  <button>edit student</button>
                </Link>
              </td>
              <td>
                <button id={student.id} onClick={this.handleClick}>Delete Student</button>
              </td>
            </tr>
          })
        }
      </table>
    </div>)
  }

}
