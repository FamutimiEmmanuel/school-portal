import React, { useReducer } from 'react';
import axios from 'axios';
import staffContext from './staffContext';
import staffReducer from './staffReducer';
import setAuthToken from '../../utils/setAuthToken';

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
  } from '../../actions/types';

  const StaffState = (props) => {
    const initialState = {
        staff: null,
        current: null,
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        // alert:[],
        filtered:[]
      };


      const [state, dispatch] = useReducer(staffReducer, initialState);

        const staffRegister = async (Data) =>  {
       
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('http://localhost:5000/api/staff/register',Data,config);
    
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

      const staffLogin = async (Data) =>  {
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
        if(state.token) {
            setAuthToken(state.token);
          }
      };
 
 
       const getStaffs = async() =>  {

        if(localStorage.token) {
          setAuthToken(localStorage.token);
        }
        try {
      
          const res = await axios.get('http://localhost:5000/api/staffauth');
      
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

       const addStaff = async(staff) =>  {
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

       const deleteStaff = async(id) =>  {
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

       const setCurrentStaff = (staff) =>  {
        return {
          type: SET_CURRENT_STAFF,
          payload: staff
        };
      };
 
       const clearCurrentStaff = () => {
        return {
          type: CLEAR_CURRENT_STAFF
        };
      };

       const updateStaff = async (staff) =>  {
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
 
     const filterStaffs = (text) =>  {
        dispatch({ 
            type: FILTER_STAFFS, 
            payload: text 
        });
    };
    
     const clearFilter = () =>  {
            dispatch({ 
                type: CLEAR_FILTER 
            });
        };
    
    // const setAlert = (msg, type, timeout = 5000) =>  {
    //          dispatch({
    //              type: SET_ALERT,
    //              payload: { msg, type}
    //          });
    
    //          setTimeout( () => dispatch({
    //              type: REMOVE_ALERT
    //          }), timeout)
    //      };
    
     const setLoading = () =>  {
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
        <staffContext.Provider
         value={{
             staff: state.staff,
             current: state.current,
             token: state.token,
             isAuthenticated: state.isAuthenticated,
             loading: state.loading,
             error: state.error,
             alert:state.alert,
             filtered:state.filtered,
             staffRegister,
             staffLogin,
             getStaffs,
             addStaff,
             deleteStaff,
             setCurrentStaff,
             updateStaff,
             clearCurrentStaff,
             filterStaffs,
             clearFilter,
            //  setAlert,
             setLoading,
             logout
            }}
        >
            {props.children}
        </staffContext.Provider>
    );
};

export default StaffState; 