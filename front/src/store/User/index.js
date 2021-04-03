import { combineReducers } from 'redux';
import { userData } from './userData';

export const UserData = combineReducers({
  userState: userData,
});