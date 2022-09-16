import {
   
    SET_ALERT,
    REMOVE_ALERT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ADMIN,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from './types';
  import axios from 'axios';

 
 

  export  const adminRegister = async (Data) => async dispatch => {
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
      getAdmin();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  export const adminLogin = async (Data) => async dispatch => {
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
      getAdmin();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
 
  export const getAdmin = () => async dispatch => {
    try {
  
      const res = await axios.get('http://localhost:5000/api/admin');
  
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

 

  export const logout = () => async dispatch => {
    dispatch({ 
        type: LOGOUT
    });
};