import {
    GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    SET_CURRENT_STUDENT,
    CLEAR_CURRENT_STUDENT,
    UPDATE_STUDENT,
    FILTER_STUDENTS,
    CLEAR_FILTER,
    CLEAR_STUDENTS,
    SET_ALERT,
    REMOVE_ALERT,
    STAFF_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    STUDENT_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../actions/types';




const initialState = {
    student: null,
    current: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    alert:[],
    filtered:[]
  };

  export default (state = initialState, action) => {
     switch(action.type) {
         default:
          return state
     }
  }
  
 