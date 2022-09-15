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
                        student: null,
                        error: action.payload
                    };
                    case CLEAR_ERRORS:
                      return {
                          ...state,
                          error: null
                      };
                      case STUDENT_LOADED:
                        return {
                            ...state,
                            isAuthenticated: true,
                            loading: false,
                            user: action.payload
                        };
                        case GET_STUDENTS:
                          return {
                              ...state,
                              student: action.payload,
                              loading: false
                          };
                          case ADD_STUDENT:
                            return {
                                ...state,
                                student: [...state.student, action.payload],
                                loading: false
                            };
                            case UPDATE_STUDENT:
                              return {
                                  ...state,
                                  student: state.student.map((s) => s._id === action.payload._id ?
                                  action.payload : s),
                                  loading: false
                              };
                
                          case DELETE_STUDENT:
                              return {
                                  ...state,
                                  student:state.student.filter((s) => s._id !== action.payload),
                                  loading: false
                              };
                              case SET_CURRENT_STUDENT:
                                return {
                                    ...state,
                                    current: action.payload
                                };
                                
                            case CLEAR_CURRENT_STUDENT:
                                return {
                                    ...state,
                                    current: null
                                };
                                case FILTER_STUDENTS:
                                  return {
                                      ...state,
                                      filtered: state.student.filter((s) => {
                                          const regex = new RegExp(`${action.payload}`, 'gi');
                                          return s.name.match(regex) || s.email.match(regex) || s.studentid.match(regex);
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
                                 case CLEAR_STUDENTS:
                                        return {
                                            ...state,
                                            student: null,
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
  
 