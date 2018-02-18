import { FEED_UPDATE_WIDTH } from './actionTypes';

export const updateFeedWidth = (width) => {
  return { type: FEED_UPDATE_WIDTH, width };
}
