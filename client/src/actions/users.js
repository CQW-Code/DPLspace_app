import axios from 'axios';

export const USERS = 'USERS';


export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: USERS, users: res.data }) )
  }
}