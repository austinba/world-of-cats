import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import cats from './cats';
import display from './display';
import favorites from './favorites';

const rootReducer = combineReducers({
  routing,
  cats,
  display,
  favorites
});

export default rootReducer;
