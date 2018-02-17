import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';

import * as catBoxActions from  '../actions/catBox';

class CatBox extends React.Component {

  render() {
    const id = this.props.id;
    const {image, fact, height} = this.props.cats[id];
    const {updateHeight, addFavorite, removeFavorite} = this.props.actions;

    const likeBox = !this.props.favorites.hasOwnProperty(id) ?
      <div className="like-button" onClick={() => addFavorite(id)}>LIKE</div> :
      <div className="like-button" onClick={() => removeFavorite(id)}>UNLIKE</div>

    return <div className="cat-box">
      <ResizeObserver onResize={(rect) => updateHeight(id, rect.height)} />
      {likeBox}
      <div><img src={image} className="cat-image" /></div>
      <div className="cat-text">{fact}</div>
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
