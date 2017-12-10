/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import {GOT_CAMPUSES, GOT_STUDENTS, GOT_SINGLE_CAMPUS, GOT_SINGLE_STUDENT} from './constants'

const initialState = {
  campuses: [],
  students: [],
  currentCampus: {},
  currentStudent: {},
}

const rootReducer = function(prevState = initialState, action) {
  switch(action.type){
    case GOT_CAMPUSES:
      return Object.assign({}, prevState, {campuses:action.campuses});
    case GOT_STUDENTS:
      return Object.assign({}, prevState, {students:action.students});
    case GOT_SINGLE_CAMPUS:
      return Object.assign({}, prevState, {currentCampus:action.currentCampus});
    case GOT_SINGLE_STUDENT:
      return Object.assign({}, prevState, {currentStudent:action.currentStudent});
    default:
      return prevState;
  }
};

export default rootReducer
