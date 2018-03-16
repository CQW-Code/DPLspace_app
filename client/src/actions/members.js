import axios from 'axios';

export const MEMBERS = 'MEMBERS';
export const ADD_MEMBER = 'ADD_MEMBER';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';

export const getMembers = (cb) => {
  return (dispatch) => {
    axios.get('/api/members')
      .then( res => dispatch({ type: MEMBERS, members: res.data }) )
      .then( cb() )
  }
}

export const addMember = (member) => {
  return (dispatch) => {
    axios.post('/api/members', { member })
      .then( res => dispatch({ type: ADD_MEMBERS, members: res.data }) )
  }
}

export const updateMembers = (members) => {
  return (dispatch) => {
    axios.put(`/api/members/${member.id}`, { member })
      .then( res => dispatch({ type: UPDATE_MEMBER, member: res.data }) )
  }
}

export const deleteMember = (id) => {
  return (dispatch) => {
    axios.delete(`/api/members/${id}`)
      .then( () => dispatch({ type: DELETE_MEMBER, id }) )
  }
}


