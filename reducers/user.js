import { LOGGED_IN } from "../actions/user"

export default function (state = "", action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload
    default:
      return state
  }
}