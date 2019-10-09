
import { combineReducers } from "redux";

import user from './user'
import courses from './courses'

export default combineReducers({
  user,
  courses,
});