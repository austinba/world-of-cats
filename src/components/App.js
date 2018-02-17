import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as R from 'ramda';
import '../styles/reset.css';
import '../styles/index.css';

import Header from './Header';
import Feed from './Feed';
import * as catsActions from '../actions/cats';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.catsActions.loadCats();
  }
  render() {
    return <div>
      <Header />
      <Feed/>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  catsActions: bindActionCreators(catsActions, dispatch),
})
const mapStateToProps = state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App)
