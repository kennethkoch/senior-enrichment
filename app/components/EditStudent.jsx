import React, { Component } from 'react';
import store from '../store';
import {addStudentFirstName, addStudentLastName, addStudentEmail, addStudentGpa,
        addStudentCampus, updateStudent, fetchStudents, newStudentEntry, fetchSingleStudent} from '../store';
//make action creators for changing all fields of newStudentEntry
export default class EditStudent extends Component {
  constructor() {
    super()
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleGpaChange = this.handleGpaChange.bind(this)
    this.handleCampusChange = this.handleCampusChange.bind(this)
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
    const thunk = fetchSingleStudent(this.props.match.params.id)
    store.dispatch(thunk)

  }

  componentWillUnmount(){
    this.unsubscribe()
  }
  ///change these to match newStudentEntry fields
  handleFirstNameChange(evt){
    store.dispatch(addStudentFirstName(evt.target.value))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }
  handleLastNameChange(evt){
    store.dispatch(addStudentLastName(evt.target.value))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }

  handleEmailChange(evt){
    store.dispatch(addStudentEmail(evt.target.value))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }

  handleGpaChange(evt){
    store.dispatch(addStudentGpa(evt.target.value))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }

  handleCampusChange(evt){
    const newStudentCampus = this.state.campuses.filter(campus => {
      return campus.name === evt.target.value
    })
    let campusId = newStudentCampus.map(campus => campus.id)[0];
    store.dispatch(addStudentCampus(campusId))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }

  handleSubmit(evt){
    evt.preventDefault()
    let update;
    const student = this.state.newStudentEntry;
    for (var updatedField in student) {
      if (student[updatedField]) {
        update = {
          [updatedField]: student[updatedField]
        }
      }
    }
    const studentId = this.props.match.params.id;
    const thunk = updateStudent(studentId, update)
    store.dispatch(thunk)
    store.dispatch(updateStudent())
    this.props.history.replace('/students')
  }



  render() {
    const currentStudent = this.state.currentStudent
    return (
      <div>
      <h1>Edit Student: {currentStudent.name}</h1>
      <ul>
      <form onSubmit={this.handleSubmit}>
      <input
      type='text'
      name='firstName'
      onChange={this.handleFirstNameChange}
      placeholder={currentStudent.firstName}>
      </input>
      <input type='submit' value='Submit Changes'></input>
      </form>
      <form onSubmit={this.handleSubmit}>
      <input
      type='text'
      name='lastName'
      onChange={this.handleLastNameChange}
      placeholder={currentStudent.lastName}>
      </input>
      <input type='submit' value='Submit Changes'></input>
      </form>
      <form onSubmit={this.handleSubmit}>
      <input
      type='text'
      name='email'
      onChange={this.handleEmailChange}
      placeholder={currentStudent.email}></input>
      <input type='submit' value='Submit Changes'></input>
      </form>
      <form onSubmit={this.handleSubmit}>
      <input
      type='number'
      step='0.1'
      name='gpa'
      onChange={this.handleGpaChange}
      placeholder='GPA'></input>
      <input type='submit' value='Submit Changes'></input>
      </form>
      <form onSubmit={this.handleSubmit}>
      <input
      type='text'
      name='campus'
      onChange={this.handleCampusChange}
      placeholder='Campus Name'></input>
      <input type='submit' value='Submit Changes'></input>
      </form>

      </ul>

      </div>
    )
  }

}
