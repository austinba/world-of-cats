import * as R from 'ramda';

const initialState = {
  status: 'NOT_LOADED'
};

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CATS_LOADED':
      return {status: 'LOADED', data: action.data};

    case 'CATS_LOADING_FAILED':
      return {status: 'ERROR'};

    case 'ADD_FAVORITE':
      return R.assocPath(['favorites', action.id.toString()], action.id)(state);

    case 'REMOVE_FAVORITE':
      return R.dissocPath(['favorites', action.id.toString()])(state);

    default:
      return state;
  }
}

export default catsReducer;
