import * as api from '../api';
export const loadCats = () => dispatch => {
  api.loadCats()
    .then(data => dispatch({ type: 'CATS_LOADED', data }))
    .catch(error => dispatch({ type: 'CATS_LOADING_FAILED', error }))
}
