import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';

const MainFeed = (props) => {
  const {cats, display} = props;
  if(cats.status === 'NOT_LOADED') return <h2>LOADING...</h2>;
  if(cats.status === 'ERROR') return <h2>ERROR LOADING CATS</h2>
  if(cats.status === 'LOADED') return <Feed cats={cats.data} />
}

const mapStateToProps = state => ({ cats: state.cats });
export default connect(mapStateToProps)(MainFeed)
