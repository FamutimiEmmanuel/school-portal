import {
    GET_STAFFS,
    ADD_STAFF,
    DELETE_STAFF,
    SET_CURRENT_STAFF,
    CLEAR_CURRENT_STAFF,
    UPDATE_STAFF,
    FILTER_STAFFS,
    CLEAR_FILTER,
    CLEAR_STAFFS,
    SET_ALERT,
    REMOVE_ALERT,
    STAFF_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    STAFF_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
  } from '../actions/types';




  const initialState = {
    staff: null,
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
  