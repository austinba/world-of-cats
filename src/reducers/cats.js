import * as R from 'ramda';
import { NOT_LOADED, LOADED, LOADING_FAILED } from '../models/cats';

import {
  CATS_LOADED, CATS_LOADING_FAILED, ADD_FAVORITE, REMOVE_FAVORITE
} from '../actions/actionTypes';

const initialState = {
  status: NOT_LOADED,
  cats: {
    data: []
  }
};

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CATS_LOADED:
      return {status: LOADED, data: action.data};

    case CATS_LOADING_FAILED:
      return {status: LOADING_FAILED};

    case ADD_FAVORITE:
      return R.assocPath(['favorites', action.id.toString()], action.id)(state);

    case REMOVE_FAVORITE:
      return R.dissocPath(['favorites', action.id.toString()])(state);

    default:
      return state;
  }
}

export default catsReducer;
