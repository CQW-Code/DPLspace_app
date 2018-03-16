import { 
  MEMBERS, 
  ADD_MEMBER, 
  UPDATE_MEMBER, 
  DELETE_MEMBER,
} from '../actions/members';

const apps = ( state = [], action ) => {
  switch (action.type) {
    case MEMBERS:
      return action.members
    case ADD_MEMBER:
      return [action.member, ...state]
    case UPDATE_MEMBER:
      return state.map( m => {
        if (m.id === action.member.id)
          return action.member
        return m
      })
    case DELETE_MEMBER:
      return state.filter( m => m.id !== action.id )
    default:
      return state
  }
}

export default members;

