const { RECIPES_FETCHED } = require('../actions/recipes')

export default function (state = [], action = {}) {
  switch (action.type) {
    case RECIPES_FETCHED:
      return action.payload
    default:
      return state
  }
}