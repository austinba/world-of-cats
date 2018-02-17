import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';

import * as catBoxActions from  '../actions/catBox';

class CatBox extends React.Component {

  render() {
    const id = this.props.id;
    const {image, fact, height} = this.props.cats[id];
    const {updateHeight} = this.props.actions;

    return <div className="cat-box">
      <div><img src={image} className="cat-image" /></div>
      <div className="cat-text">{fact}</div>
        <ResizeObserver onResize={(rect) => updateHeight(id, rect.height)} />
        {height}
    </div>
  }
}

const mapStateToProps = state => ({
  cats: state.cats
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(catBoxActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CatBox)
