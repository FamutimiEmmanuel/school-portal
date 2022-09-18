import {
   
    SET_ALERT,
    REMOVE_ALERT,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ADMIN,
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../../actions/types';


  export default (state, action) => {
    switch(action.type) {
     case REGISTER_SUCCESS:
         case LOGIN_SUCCESS:
             localStorage.setItem('token', action.payload.token );
             return {
               ...state,
               ...action.payload,
               isAuthenticated: true,
               loading: false
             };
             case REGISTER_FAIL:
               case AUTH_ERROR:
               case LOGIN_FAIL :
               case LOGOUT :
                   localStorage.removeItem('token');
                   return {
                       ...state,
                       token: null,
                       isAuthenticated: false,
                       loading: false,
                       admin: null,
                       error: action.payload
                   };
                   case CLEAR_ERRORS:
                     return {
                         ...state,
                         error: null
                     };
                       case GET_ADMIN:
                         return {
                             ...state,
                             admin: action.payload,
                             loading: false
                         };
                                   case SET_ALERT:
                                     return {
                                       ...state,
                                       alert:action.payload
                                      
                                     };
                                 case REMOVE_ALERT:
                                     return state.alert.filter(a => a.msg !== action.payload);
        default:
         return state
    }
 }
 
