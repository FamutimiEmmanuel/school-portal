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
  } from '../../actions/types';




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
                        staff: null,
                        error: action.payload
                    };
                    case CLEAR_ERRORS:
                      return {
                          ...state,
                          error: null
                      };
                      case STAFF_LOADED:
                        return {
                            ...state,
                            isAuthenticated: true,
                            loading: false,
                            staff: action.payload
                        };
                        case GET_STAFFS:
                          return {
                              ...state,
                              staff: action.payload,
                              loading: false
                          };
                          case ADD_STAFF:
                            return {
                                ...state,
                                staff: [...state.staff, action.payload],
                                loading: false
                            };
                            case UPDATE_STAFF:
                              return {
                                  ...state,
                                  staff: state.staff.map((s) => s._id === action.payload._id ?
                                  action.payload : s),
                                  loading: false
                              };
                
                          case DELETE_STAFF:
                              return {
                                  ...state,
                                  staff:state.staff.filter((s) => s._id !== action.payload),
                                  loading: false
                              };
                              case SET_CURRENT_STAFF:
                                return {
                                    ...state,
                                    current: action.payload
                                };
                                
                            case CLEAR_CURRENT_STAFF:
                                return {
                                    ...state,
                                    current: null
                                };
                                case FILTER_STAFFS:
                                  return {
                                      ...state,
                                      filtered: state.staff.filter((s) => {
                                          const regex = new RegExp(`${action.payload}`, 'gi');
                                          return s.name.match(regex) || s.email.match(regex);
                                      })
                                  };
                                  case CLEAR_FILTER:
                                    return {
                                        ...state,
                                        filtered: null
                                    };
                                    case SET_ALERT:
                                      return {
                                        ...state,
                                        alert:action.payload
                                       
                                      };
                                  case REMOVE_ALERT:
                                      return state.alert.filter(a => a.msg !== action.payload);
                                 case CLEAR_STAFFS:
                                        return {
                                            ...state,
                                            staff: null,
                                            filtered: null,
                                            error: null,
                                            current: null
                                        };
                                  case STAFF_ERROR:
                                    return {
                                      ...state,
                                     ...action.payload,
                                  
                                    };
                        
         default:
          return state
     }
  }
  