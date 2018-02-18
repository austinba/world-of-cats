import * as R from 'ramda';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/actionTypes';

const initialState = {}; // Stored as a SET of catIDs {'12': 12, '18':18, '24':24}

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FAVORITE:
      return R.assoc(action.id.toString(), action.id)(state);

    case REMOVE_FAVORITE:
      return R.dissoc(action.id.toString())(state);

    default:
      return state;
  }
}

export default catsReducer;
