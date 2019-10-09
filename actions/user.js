import url from '../constants'

export const LOGGED_IN = 'LOGGED_IN'

const loggedIn = (payload) => {
  return {
    type: LOGGED_IN,
    payload
  }
}

export const login = (name, password) => dispatch => {
  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      password
    })
  })
    .then(res => res.json())
    .then(json => dispatch(loggedIn(json.jwt)))
    .catch(console.error)
}
