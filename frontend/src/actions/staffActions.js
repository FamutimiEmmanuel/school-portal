import {
    GET_STAFFS,
    ADD_STAFF,
    DELETE_STAFF,
    SET_CURRENT_STAFF,
    CLEAR_CURRENT_STAFF,
    UPDATE_STAFF,
    FILTER_STAFFS,
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
      const res = await axios.post('http://localhost:5000/api/staffs/register',Data,config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      getStaffs();
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
      const res = await axios.post('http://localhost:5000/api/staffs/login',Data,config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      getStaffs();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
 
  export const getStaffs = () => async dispatch => {
    try {
  
      const res = await axios.get('http://localhost:5000/api/staffs');
  
      dispatch({
        type: GET_STAFFS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };

  export const addStaff = (staff) => async dispatch => {
    try {
      setLoading();

      const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
  
      const res = await axios.post('http://localhost:5000/api/staffs',config,staff)
       
      dispatch({
        type: ADD_STAFF,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };
  export const deleteStaff = (id) => async dispatch => {
    try {
      setLoading();
  
     await axios.delete(`http://localhost:5000/api/staffs/${id}`)
       
      dispatch({
        type: DELETE_STAFF,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response
      });
    }
  };

  export const setCurrentStaff = (staff) =>  {
    return {
      type: SET_CURRENT_STAFF,
      payload: staff
    };
  };
  
  
  export const clearCurrentStaff = () => {
    return {
      type: CLEAR_CURRENT_STAFF
    };
  };

 export const updateStaff = async (staff) => async dispatch => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    try {
        const res = await axios.put(`http://localhost:5000/api/staffs/${staff._id}`, staff, config);
    
        dispatch({ 
            type: UPDATE_STAFF, 
            payload: res.data
        });
    } catch (err) {
        dispatch({ 
         type: AUTH_ERROR,
         payload: err.response.msg
        });
    }
    
};

export const filterStaffs = (text) => async dispatch => {
    dispatch({ 
        type: FILTER_STAFFS, 
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
             type: REMOVE_ALERT
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