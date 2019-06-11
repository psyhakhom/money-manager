import axios from 'axios';

export const actionTypes = {
  SET_DATA: 'SET_DATA'
}

export const fetchData = () => {
  return (dispatch) => {
    return axios.get('data.json')
      .then(response => {
        dispatch({
          type: actionTypes.SET_DATA,
          payload: response.data
        })
      })
  }
}