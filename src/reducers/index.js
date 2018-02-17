import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import cats from './cats';

const rootReducer = combineReducers({
  routing,
  cats
});

export default rootReducer;
