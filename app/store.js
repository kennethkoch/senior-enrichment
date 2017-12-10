import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import {*} from './reducers/constants'
import {GOT_CAMPUSES, GOT_STUDENTS, GOT_SINGLE_CAMPUS, GOT_SINGLE_STUDENT} from './reducers/constants'
import axios from 'axios'





//action creators
export const gotCampuses = function (campuses) {
  return {
    type: GOT_CAMPUSES,
    campuses: campuses,
  }
}
export const gotStudents = function (students) {
  return {
    type: GOT_STUDENTS,
    students: students,
  }
}
export const gotSingleCampus = function (currentCampus) {
  return {
    type: GOT_SINGLE_CAMPUS,
    currentCampus: currentCampus,
  }
}
export const gotSingleStudent = function (currentStudent) {
  return {
    type: GOT_SINGLE_STUDENT,
    currentStudent: currentStudent,
  }
}

export function fetchCampuses() {
  return function thunk(dispatch) {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then((campuses) => {
      // const action = gotCampuses(campuses)
      dispatch(gotCampuses(campuses))
    })
  }
}
export function fetchStudents() {
  return function thunk(dispatch) {
    axios.get('/api/students')
    .then(res => res.data)
    .then((students) => {
      dispatch(gotStudents(students))
    })
  }
}

export function fetchSingleCampus(campusId) {
  return function thunk(dispatch){
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then((campus) => {
    dispatch(gotSingleCampus(campus))
    })
  }
}

export function fetchSingleStudent(studentId) {
  return function thunk(dispatch){
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then((student) => {
    dispatch(gotSingleStudent(student))
    })
  }
}


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
export default store
