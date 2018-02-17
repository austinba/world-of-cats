import * as R from 'ramda';

const initialState = {};

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return R.assoc(action.id.toString(), action.id)(state);

    case 'REMOVE_FAVORITE':
      return R.dissoc(action.id.toString())(state);

    default:
      return state;
  }
}

export default catsReducer;
