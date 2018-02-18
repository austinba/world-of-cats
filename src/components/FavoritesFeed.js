import React from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import * as R from 'ramda';

const FavoritesFeed = (props) => {
  const {cats, favorites} = props;
  const favoriteCats = R.values(R.pickAll(R.values(favorites || {}), cats.data));
  if(favoriteCats.length === 0) return <div className="message">You haven't selected any favorites yet!</div>;
  return (
    <Feed cats={favoriteCats} />
  );
}

const mapStateToProps = state => ({
  cats: state.cats,
  favorites: state.favorites
});

export default connect(mapStateToProps)(FavoritesFeed)
