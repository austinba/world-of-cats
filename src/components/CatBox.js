import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';
import { Link } from 'react-router';
import * as catBoxActions from  '../actions/catBox';

const CatBox = (props) => {
  const id = props.id;
  const {image, fact} = props.cats[id];

  const likeBox = !props.favorites.hasOwnProperty(id) ?
    <div className="like-button" onClick={() => props.addFavorite(id)}>LIKE</div> :
    <div className="like-button" onClick={() => props.removeFavorite(id)}>UNLIKE</div>

  return (
    <div className="cat-box">
      <ResizeObserver onResize={(rect) => props.updateCatBoxHeight(id, rect.height)} />
      {likeBox}
      <Link to={'/cat/'+id}>
        <div><img src={image} className="cat-image" alt="image of a cat" /></div>
        <div className="cat-text">{fact}</div>
      </Link>
    </div>
  );
}

const mapStateToProps = state => ({
  cats: state.cats.data,
  favorites: state.favorites
});
const mapDispatchToProps = dispatch => ({
  updateCatBoxHeight: bindActionCreators(catBoxActions.updateCatBoxHeight, dispatch),
  addFavorite: bindActionCreators(catBoxActions.addFavorite, dispatch),
  removeFavorite: bindActionCreators(catBoxActions.removeFavorite, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CatBox)
