import * as R from 'ramda';
import { FEED_UPDATE_WIDTH, CATBOX_UPDATE_HEIGHT } from '../actions/actionTypes';

const initialState = {
  feedWidth: 500
};

const displayReducer = (state = initialState, action) => {
  switch(action.type) {
    case FEED_UPDATE_WIDTH:
      return R.assoc('feedWidth', action.width)(state);

    case CATBOX_UPDATE_HEIGHT:
      return R.assocPath(['catBoxHeights', action.id], action.height)(state);

    default:
      return state;
  }
}

export default displayReducer;
