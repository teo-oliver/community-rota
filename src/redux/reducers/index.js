import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import timecardsReducer from './timecardsReducer';

export default combineReducers({
  users: usersReducer,
  timecards: timecardsReducer
});
