import url from '../constants'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'

const fetchedRecipes = (payload) => {
  return {
    type: RECIPES_FETCHED,
    payload
  }
}

export const getRecipes = (id, jwt) => dispatch => {
  fetch(`${url}/course/${id}/recipe`, {
    method: "GET",
    headers: new Headers({
      'Authorization': `Bearer ${jwt}`,
    })
  })
    .then(res => res.json())
    .then(json => {
      dispatch(fetchedRecipes(json))
    })
    .catch(console.error)
}
