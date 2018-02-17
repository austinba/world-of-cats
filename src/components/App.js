import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import * as catsActions from '../actions/cats';

class App extends React.Component {
  componentWillMount() {
    if(this.props.cats.status === 'NOT_LOADED') this.props.catsActions.loadCats();
  }
  render() {
    let contents = <div></div>;
    if(this.props.cats.status === 'NOT_LOADED') contents = <div className="message">LOADING...</div>;
    if(this.props.cats.status === 'ERROR') contents = <div className="message">ERROR LOADING CATS</div>;
    if(this.props.cats.status === 'LOADED') contents = this.props.children;

    return <div>
      <Header />
      {contents}
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
