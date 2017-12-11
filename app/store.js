import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';
import rootReducer from './reducers';
import { GOT_CAMPUSES, GOT_STUDENTS, GOT_SINGLE_CAMPUS, NEW_CAMPUS_IMAGE,
         NEW_CAMPUS_DESCRIPTION, NEW_CAMPUS_ENTRY, NEW_CAMPUS_NAME, GOT_SINGLE_STUDENT,
         NEW_STUDENT_ENTRY, NEW_STUDENT_GPA, NEW_STUDENT_EMAIL, NEW_STUDENT_LAST_NAME,
         NEW_STUDENT_FIRST_NAME, NEW_STUDENT_CAMPUS} from './reducers/constants';


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

//add a new campus to database
export const addCampusName = function (newCampusName) {
  return {
    type: NEW_CAMPUS_NAME,
    newCampusName: newCampusName,
  }
}

export const addCampusImage = function (newCampusImage) {
  return {
    type: NEW_CAMPUS_IMAGE,
    newCampusImage: newCampusImage,
  }
}

export const addCampusDescription = function (newCampusDescription) {
  return {
    type: NEW_CAMPUS_DESCRIPTION,
    newCampusDescription: newCampusDescription,
  }
}

export const newCampusEntry = function (newCampusEntry) {
  return {
    type:  NEW_CAMPUS_ENTRY,
    newCampusEntry: newCampusEntry
  }
}

//Add a new student to database
export const addStudentFirstName = function (newStudentFirstName) {
  return {
    type: NEW_STUDENT_FIRST_NAME,
    newStudentFirstName: newStudentFirstName,
  }
}

export const addStudentLastName = function (newStudentLastName) {
  return {
    type: NEW_STUDENT_LAST_NAME,
    newStudentLastName: newStudentLastName,
  }
}

export const addStudentEmail = function (newStudentEmail) {
  return {
    type: NEW_STUDENT_EMAIL,
    newStudentEmail: newStudentEmail,
  }
}

export const addStudentGpa = function (newStudentGpa) {
  return {
    type: NEW_STUDENT_GPA,
    newStudentGpa: newStudentGpa,
  }
}

export const addStudentCampus = function (campusId) {
  return {
    type: NEW_STUDENT_CAMPUS,
    campusId: campusId,
  }
}

export const newStudentEntry = function (newStudentEntry) {
  return {
    type:  NEW_STUDENT_ENTRY,
    newStudentEntry: newStudentEntry
  }
}


export function fetchCampuses() {
  return function thunk(dispatch) {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then((campuses) => {
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

export function postCampus(name, imageUrl, description) {
  return function thunk(dispatch){
    axios.post('/api/campuses', {name: name, imageUrl: imageUrl, description: description})
    .then(() => {
      dispatch(fetchCampuses())
    })
  }
}

export function deleteCampus(campusId) {
  return function thunk(dispatch){
    axios.delete(`/api/campuses/${campusId}`)
    .then(() => {
      dispatch(fetchCampuses())
    })
  }
}

export function postStudent(firstName, lastName, email, gpa, campusId) {
  return function thunk(dispatch){
    axios.post('/api/students', { firstName: firstName, lastName: lastName,
                                  email: email, gpa: gpa, campusId: campusId})
    .then(() => {
      dispatch(fetchStudents())
    })
  }
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
export default store
