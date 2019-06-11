import {actionTypes} from '../actions';

export default(state=[], action) => {
  switch(action.type) {
    case actionTypes.SET_DATA:
      return [...state, action.payload];
    default: 
      return state;
  }
}