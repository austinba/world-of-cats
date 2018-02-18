import {
  CATBOX_UPDATE_HEIGHT, ADD_FAVORITE, REMOVE_FAVORITE
} from './actionTypes';

export const updateCatBoxHeight = (id, height) => {
  return { type: CATBOX_UPDATE_HEIGHT, id, height };
}
export const addFavorite = (id) =>  {
  return { type: ADD_FAVORITE, id };
}
export const removeFavorite = (id) =>  {
  return { type: REMOVE_FAVORITE, id };
}
