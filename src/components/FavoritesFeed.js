import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import * as R from 'ramda';

const FavoritesFeed = (props) => {
  const {cats, display, favorites} = props;

  if(cats.status === 'LOADING') return <h2>LOADING...</h2>;
  if(cats.status === 'ERROR') return <h2>ERROR LOADING CATS</h2>

  const favoriteCats = R.values(R.pickAll(R.values(favorites || {}), cats.data));
  return <Feed cats={favoriteCats} />
}

const mapStateToProps = state => ({
  cats: state.cats,
  favorites: state.favorites
});

export default connect(mapStateToProps)(FavoritesFeed)
