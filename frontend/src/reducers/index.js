import { combineReducers } from 'redux';
import staffReducer from './staffReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  staff: staffReducer,
  student: studentReducer
});