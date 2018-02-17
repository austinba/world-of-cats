import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as R from 'ramda';
import Header from './Header';
import Feed from './Feed';
import * as catsActions from '../actions/cats';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if(this.props.cats.status = 'NOT_LOADED') this.props.catsActions.loadCats();
  }
  render() {
    return <div>
      <Header />
      {this.props.children}
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  catsActions: bindActionCreators(catsActions, dispatch),
})
const mapStateToProps = state => ({
  cats: state.cats
});
export default connect(mapStateToProps, mapDispatchToProps)(App)
