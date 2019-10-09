import url from '../constants'

export const COURSES_FETCHED = 'COURSES_FETCHED'

const fetchedCourses = (payload) => {
  return {
    type: COURSES_FETCHED,
    payload
  }
}

export const getCourses = () => dispatch => {
  fetch(`${url}/course`, {
    method: "GET",
  })
    .then(res => res.json())
    .then(json => {
      dispatch(fetchedCourses(json))
    })
    .catch(console.error)
}
