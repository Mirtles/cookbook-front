const { COURSES_FETCHED } = require('../actions/courses')

export default function (state = [], action = {}) {
  switch (action.type) {
    case COURSES_FETCHED:
      return action.payload
    default:
      return state
  }
}