import React, { useReducer } from 'react';
import axios from 'axios';
import adminContext from './adminContext';
import adminReducer from './adminReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
   
    // SET_ALERT,
    // REMOVE_ALERT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ADMIN,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../../actions/types';

  const AdminState = (props) => {
    const initialState = {
        admin: {},
        token: localStorage.getItem('token'),
       isAuthenticated: null,
       loading: true,
        error: null
        // alert:[]
      };


      const [state, dispatch] = useReducer(adminReducer, initialState);

       const adminRegister = async (Data) =>  {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('http://localhost:5000/api/admin/register',Data,config);
    
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          });
          // getAdmin();
        } catch (err) {
          dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
          });
        }
      };
    
     const adminLogin = async (Data) =>  {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('http://localhost:5000/api/admin/login',Data,config);
    
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
          });
          // getAdmin();
        } catch (err) {
          dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
          });
        }
      };
     
      const getAdmin = async() =>  {

        if(localStorage.token) {
          setAuthToken(localStorage.token);
        }
        try {
      
          const res = await axios.get('http://localhost:5000/api/adminauth');
      
          dispatch({
            type: GET_ADMIN,
            payload: res.data
          });
        } catch (err) {
          dispatch({
            type: AUTH_ERROR,
            payload: err.response
          });
        }
      };
    
    
    //   const setAlert = (msg, type, timeout = 5000) =>  {
    //          dispatch({
    //              type: SET_ALERT,
    //              payload: { msg, type}
    //          });
    
    //          setTimeout( () => dispatch({
    //              type: REMOVE_ALERT,
    //              payload: msg
    //          }), timeout)
    //      };
    
     
     
     const logout = () =>  {
        dispatch({ 
            type: LOGOUT
        });
    };

    const deleteStaff = async (id) => {
      await axios.delete(`http://localhost:5000/api/staff/${id}`);
      
  };
    const deleteStudent = async (id) => {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      
  };


      return (
        <adminContext.Provider
         value={{
             admin: state.admin,
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading,
             error: state.error,
             alert:state.alert,
             adminRegister,
             adminLogin,
             getAdmin,
             deleteStaff,
             deleteStudent,
            //  setAlert,
             logout
            }}
        >
            {props.children}
        </adminContext.Provider>
    );

  }

export default AdminState; 