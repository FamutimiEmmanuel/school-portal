import { combineReducers } from 'redux';
import staffReducer from './staffReducer';
import studentReducer from './studentReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  staff: staffReducer,
  student: studentReducer,
  admin:adminReducer
});