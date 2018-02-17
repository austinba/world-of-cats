import * as R from 'ramda';

const initialState = {
  feedWidth: 500
};

const displayReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FEED_UPDATE_WIDTH':
      return R.assoc('feedWidth', action.width)(state);

    default:
      return state;
  }
}

export default displayReducer;
