import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';

const MainFeed = (props) => {
  return <Feed cats={props.cats.data} />
}

const mapStateToProps = state => ({ cats: state.cats });
export default connect(mapStateToProps)(MainFeed)
