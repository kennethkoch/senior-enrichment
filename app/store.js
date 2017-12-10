import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
// import {*} from './reducers/constants'
import {GOT_CAMPUSES, GOT_STUDENTS, GOT_SINGLE_CAMPUS, GOT_SINGLE_STUDENT} from './reducers/constants'




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


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
export default store
