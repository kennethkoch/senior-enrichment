import React, { Component } from 'react';
import store from '../store';
import {addStudentFirstName, addStudentLastName, addStudentEmail, addStudentGpa,
        addStudentCampus, postStudent, fetchCampuses, newStudentEntry} from '../store';
//make action creators for changing all fields of newStudentEntry
export default class AddCampus extends Component {
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
    console.log(campusId);

    store.dispatch(addStudentCampus(campusId))
    const newStudent = this.state.newStudentEntry;
    store.dispatch(newStudentEntry(newStudent))
  }

  handleSubmit(evt){
    evt.preventDefault()
    const newStudent = this.state.newStudentEntry
    const firstName = this.state.newStudentEntry.firstName;
    const lastName = this.state.newStudentEntry.lastName;
    const email = this.state.newStudentEntry.email;
    const gpa = this.state.newStudentEntry.gpa;
    const campusId = this.state.newStudentEntry.campusId;
    const thunk = postStudent(firstName, lastName, email, gpa, campusId);
    store.dispatch(thunk)
    store.dispatch(newStudentEntry(this.state.newStudentEntry))
    this.props.history.replace('/students')
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type='text'
          name='firstName'
          onChange={this.handleFirstNameChange}
          placeholder='First Name'>
          </input>
          <input
          type='text'
          name='lastName'
          onChange={this.handleLastNameChange}
          placeholder='Last Name'>
          </input>
          <input
          type='text'
          name='email'
          onChange={this.handleEmailChange}
          placeholder='email'></input>
          <input
          type='number'
          step='0.1'
          name='gpa'
          onChange={this.handleGpaChange}
          placeholder='GPA'></input>
          <input
          type='text'
          name='campus'
          onChange={this.handleCampusChange}
          placeholder='Campus Name'></input>
          <input type='submit'></input>
        </form>

      </div>
    )
  }

}
