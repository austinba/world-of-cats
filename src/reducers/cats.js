import * as R from 'ramda';

const initialState = {
  status: 'LOADING'
};

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CATS_LOADED':
      return {status: 'LOADED', data: action.data};

    case 'CATS_LOADING_FAILED':
      return {status: 'ERROR'};

    // Put this under display, not here
    case 'CATBOX_UPDATE_HEIGHT':
      return R.assocPath(['data', action.id, 'height'], action.height)(state);

    case 'ADD_FAVORITE':
      return R.assocPath(['favorites', action.id.toString()], action.id)(state);

    case 'REMOVE_FAVORITE':
      return R.dissocPath(['favorites', action.id.toString()])(state);


    default:
      return state;
  }
}

export default catsReducer;
