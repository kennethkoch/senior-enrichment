/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import {GOT_CAMPUSES, GOT_STUDENTS, GOT_SINGLE_CAMPUS, GOT_SINGLE_STUDENT,
        NEW_CAMPUS_ENTRY, NEW_CAMPUS_NAME, NEW_CAMPUS_IMAGE, UPDATE_STUDENT,
        NEW_CAMPUS_DESCRIPTION, NEW_STUDENT_ENTRY, NEW_STUDENT_GPA,
        NEW_STUDENT_EMAIL, NEW_STUDENT_LAST_NAME, NEW_STUDENT_FIRST_NAME, NEW_STUDENT_CAMPUS} from './constants'
//import student entry constants
const initialState = {
  campuses: [],
  students: [],
  currentCampus: {},
  currentStudent: {},
  newCampusEntry: {name: '', imageUrl: '', description:'',},
  newStudentEntry: {firstName: '', lastName: '', email:'', gpa:'', campusId: 0,}
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
    case NEW_CAMPUS_NAME:
      return Object.assign({}, prevState, {newCampusEntry:{ name:action.newCampusName,
                                                            imageUrl:prevState.newCampusEntry.imageUrl,
                                                            description: prevState.newCampusEntry.description}})

    case NEW_CAMPUS_IMAGE:
      return Object.assign({}, prevState, {newCampusEntry:{ name:prevState.newCampusEntry.name,
                                                            imageUrl:action.newCampusImage,
                                                            description:prevState.newCampusEntry.description}})
    case NEW_CAMPUS_DESCRIPTION:
      return Object.assign({}, prevState, {newCampusEntry:{ name:prevState.newCampusEntry.name,
                                                            imageUrl:prevState.newCampusEntry.imageUrl,
                                                            description:action.newCampusDescription}})
    case NEW_CAMPUS_ENTRY:
      return Object.assign({}, prevState, {campuses: prevState.campuses.concat(action.newCampusEntry)})
    case NEW_STUDENT_FIRST_NAME:
      return Object.assign({}, prevState, {newStudentEntry:{firstName:action.newStudentFirstName,
                                                            lastName:prevState.newStudentEntry.lastName,
                                                            email: prevState.newStudentEntry.email,
                                                            gpa:prevState.newStudentEntry.gpa,
                                                            campusId: prevState.newStudentEntry.campusId}})
    case NEW_STUDENT_LAST_NAME:
      return Object.assign({}, prevState, {newStudentEntry:{firstName:prevState.newStudentEntry.firstName,
                                                            lastName:action.newStudentLastName,
                                                            email: prevState.newStudentEntry.email,
                                                            gpa:prevState.newStudentEntry.gpa,
                                                            campusId: prevState.newStudentEntry.campusId}})

    case NEW_STUDENT_EMAIL:
      return Object.assign({}, prevState, {newStudentEntry:{firstName:prevState.newStudentEntry.firstName,
                                                            lastName:prevState.newStudentEntry.lastName,
                                                            email: action.newStudentEmail,
                                                            gpa:prevState.newStudentEntry.gpa,
                                                            campusId: prevState.newStudentEntry.campusId}})
    case NEW_STUDENT_GPA:
      return Object.assign({}, prevState, {newStudentEntry:{firstName:prevState.newStudentEntry.firstName,
                                                            lastName:prevState.newStudentEntry.lastName,
                                                            email: prevState.newStudentEntry.email,
                                                            gpa:action.newStudentGpa,
                                                            campusId: prevState.newStudentEntry.campusId}})
    case NEW_STUDENT_CAMPUS:
      return Object.assign({}, prevState, {newStudentEntry:{firstName:prevState.newStudentEntry.firstName,
                                                            lastName:prevState.newStudentEntry.lastName,
                                                            email: prevState.newStudentEntry.email,
                                                            gpa:prevState.newStudentEntry.gpa,
                                                            campusId: action.campusId}})
    case NEW_STUDENT_ENTRY:
      return Object.assign({}, prevState, {students: prevState.students.concat(action.newStudentEntry)})
    case UPDATE_STUDENT:
      return Object.assign({}, prevState, {students: prevState.students.concat(action.newStudentEntry)})
    default:
      return prevState;
  }
};

export default rootReducer
