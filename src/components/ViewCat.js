import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';

import * as catBoxActions from  '../actions/catBox';

class ViewCat extends React.Component {

  render() {
    const id = this.props.params.id;
    console.log(this.props)
    if(!this.props.cats[id]) return <div className="message">Could not find requested cat. Please go back.</div>;
    const {image, fact, height} = this.props.cats[id];

    return <div className="view-a-cat-box">
    <div className="view-a-cat-text">{fact}</div>
      <div><img src={image} className="view-a-cat-image" /></div>
    </div>
  }
}

const mapStateToProps = state => ({
  cats: state.cats.data
});

export default connect(mapStateToProps)(ViewCat)
