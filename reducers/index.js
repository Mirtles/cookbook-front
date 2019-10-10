
import { combineReducers } from "redux";

import user from './user'
import courses from './courses'
import recipes from './recipes'

export default combineReducers({
  user,
  courses,
  recipes,
});