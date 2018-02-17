import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';
import { Link } from 'react-router';

import * as catBoxActions from  '../actions/catBox';

class CatBox extends React.Component {

  render() {
    const id = this.props.id;
    const {image, fact} = this.props.cats[id];
    const {updateHeight, addFavorite, removeFavorite} = this.props.actions;

    const likeBox = !this.props.favorites.hasOwnProperty(id) ?
      <div className="like-button" onClick={() => addFavorite(id)}>LIKE</div> :
      <div className="like-button" onClick={() => removeFavorite(id)}>UNLIKE</div>

    return <div className="cat-box">
      <ResizeObserver onResize={(rect) => updateHeight(id, rect.height)} />
      {likeBox}
      <Link to={'/cat/'+id}>
        <div><img src={image} className="cat-image" alt="image of a cat" /></div>
        <div className="cat-text">{fact}</div>
      </Link>
    </div>
  }
}

const mapStateToProps = state => ({
  cats: state.cats.data,
  favorites: state.favorites
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(catBoxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CatBox)
