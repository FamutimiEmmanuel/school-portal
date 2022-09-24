import React, { useReducer } from 'react';
import axios from 'axios';
import studentContext from './studentContext';
import studentReducer from './studentReducer';
import setAuthToken from '../../utils/setAuthToken';

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
  } from '../../actions/types';

  const StudentState = (props) => {
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

      const [state, dispatch] = useReducer(studentReducer, initialState);


      const studentRegister = async (Data) =>  {
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
          // getStudents();
        } catch (err) {
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
          });
        }
        if(state.token) {
            setAuthToken(state.token);
          }
      };
    
     const studentLogin = async (Data) =>  {
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
          // getStudents();
        } catch (err) {
          dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
          });
        }
        if(state.token) {
            setAuthToken(state.token);
          }
      };
     
       const getStudents = async () =>  {
        try {
      
          const res = await axios.get('http://localhost:5000/api/students');
      
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
    
      const addStudent = async (student) =>  {
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
     const deleteStudent = async (id) => async dispatch => {
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
    
     const setCurrentStudent = (student) =>  {
        return {
          type: SET_CURRENT_STUDENT,
          payload: student
        };
      };
      
      
     const clearCurrentStudent = () => {
        return {
          type: CLEAR_CURRENT_STUDENT
        };
      };
    
      const updateStudent = async (student) =>  {
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
    
     const filterStudents = (text) =>  {
        dispatch({ 
            type: FILTER_STUDENTS, 
            payload: text 
        });
    };
    
     const clearFilter = () =>  {
            dispatch({ 
                type: CLEAR_FILTER 
            });
        };
    
    //  const setAlert = (msg, type, timeout = 5000) =>  {
    //          dispatch({
    //              type: SET_ALERT,
    //              payload: { msg, type}
    //          });
    
    //          setTimeout( () => dispatch({
    //              type: REMOVE_ALERT,
    //              payload: msg
    //          }), timeout)
    //      };
    
     const setLoading = () => {
        dispatch({ 
            type: SET_LOADING
        });
      };
    
     const logout = () => {
        dispatch({ 
            type: LOGOUT
        });
    };

      return (
        <studentContext.Provider
         value={{
             student: state.student,
             current: state.current,
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading,
             error: state.error,
             alert:state.alert,
             filtered:state.filtered,
             studentRegister,
             studentLogin,
             getStudents,
             addStudent,
             deleteStudent,
             setCurrentStudent,
             updateStudent,
             clearCurrentStudent,
             filterStudents,
             clearFilter,
            //  setAlert,
             setLoading,
             logout
            }}
        >
            {props.children}
        </studentContext.Provider>
    );
  }

  export default StudentState; 