import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';

const MainFeed = (props) => {
  const {cats, display} = props;
  if(cats.status === 'LOADING') return <h2>LOADING...</h2>;
  if(cats.status === 'ERROR') return <h2>ERROR LOADING CATS</h2>
  return <Feed cats={cats.data} display={display} />
}

const mapStateToProps = state => ({
  cats: state.cats,
  display: state.display
});
export default connect(mapStateToProps)(MainFeed)
