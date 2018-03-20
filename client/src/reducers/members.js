import { 
  MEMBERS, 
  
} from '../actions/members';

const members = ( state = [], action ) => {
  switch (action.type) {
    case MEMBERS:
      return action.members
    //from App_store_fin reducers/Apps.js
    default:
      return state
  }
}
export default members;

