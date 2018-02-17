import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

import './styles/reset.css';
import './styles/index.css';
import App from './components/App';
import MainFeed from './components/MainFeed';
import ViewCat from './components/ViewCat';
import FavoritesFeed from './components/FavoritesFeed';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MainFeed} />
        <Route path="/favorites" component={FavoritesFeed} />
        <Route path="/cat/:id" component={ViewCat} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
