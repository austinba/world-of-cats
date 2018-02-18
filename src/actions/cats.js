import * as api from '../api';
import { CATS_LOADED, CATS_LOADING_FAILED } from './actionTypes';

export const loadCats = () => dispatch => {
  api.loadCats()
    .then(data => dispatch({ type: CATS_LOADED, data }))
    .catch(error => dispatch({ type: CATS_LOADING_FAILED, error }))
}
