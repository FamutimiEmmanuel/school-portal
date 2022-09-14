import {
    GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    SET_CURRENT_STUDENT,
    CLEAR_CURRENT_STUDENT,
    UPDATE_STUDENT,
    FILTER_STUDENTS,
    CLEAR_FILTER,
    // CLEAR_STUDENTS,
    SET_ALERT,
    REMOVE_ALERT,
    // STAFF_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    // STUDENT_LOADED,
    SET_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
    // CLEAR_ERRORS
  } from './types';
  import axios from 'axios';

 
 

  export  const register = async (Data) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:5000/api/students/register',Data,config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      getStudents();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  export const login = async (Data) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:5000/api/students/login',Data,config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      getStudents();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
 
  export const getStudents = () => async dispatch => {
    try {
  
      const res = await axios.get('http://localhost:5000/api/stuents');
  
      dispatch({
        type: GET_STUDENTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };

  export const addStudent = (student) => async dispatch => {
    try {
      setLoading();

      const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
  
      const res = await axios.post('http://localhost:5000/api/students',config,student)
       
      dispatch({
        type: ADD_STUDENT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };
  export const deleteStudent = (id) => async dispatch => {
    try {
      setLoading();
  
     await axios.delete(`http://localhost:5000/api/students/${id}`)
       
      dispatch({
        type: DELETE_STUDENT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };

  export const setCurrentStudent = (student) =>  {
    return {
      type: SET_CURRENT_STUDENT,
      payload: student
    };
  };
  
  
  export const clearCurrentStudent = () => {
    return {
      type: CLEAR_CURRENT_STUDENT
    };
  };

 export const updateStudent = async (student) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.put(`http://localhost:5000/api/student/${student._id}`, student, config);
    
        dispatch({ 
            type: UPDATE_STUDENT, 
            payload: res.data
        });
    } catch (err) {
        dispatch({ 
         type: AUTH_ERROR,
         payload: err.response.msg
        });
    }
    
};

export const filterStudents = (text) => async dispatch => {
    dispatch({ 
        type: FILTER_STUDENTS, 
        payload: text 
    });
};

    export const clearFilter = () => async dispatch => {
        dispatch({ 
            type: CLEAR_FILTER 
        });
    };

    export  const setAlert = (msg, type, timeout = 5000) => async dispatch => {
         dispatch({
             type: SET_ALERT,
             payload: { msg, type}
         });

         setTimeout( () => dispatch({
             type: REMOVE_ALERT,
             payload: msg
         }), timeout)
     };

  export const setLoading = () => async dispatch => {
    dispatch({ 
        type: SET_LOADING
    });
  };

  export const logout = () => async dispatch => {
    dispatch({ 
        type: LOGOUT
    });
};