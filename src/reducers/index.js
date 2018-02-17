import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import cats from './cats';
import display from './display';

const rootReducer = combineReducers({
  routing,
  cats,
  display
});

export default rootReducer;
