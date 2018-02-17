import React from 'react';
import Dimensions from 'react-dimensions';

class CatBox extends React.Component {

  render() {
    const Contents = Dimensions({elementResize: true})(dimensions =>
      <div>
        <div><img src={this.props.image} className="cat-image" /></div>
        <div className="cat-text">{this.props.fact}</div>
        <div>{dimensions.containerHeight}, {dimensions.containerWidth}</div>
      </div>
    );
    return <div className="cat-box">
      <Contents />
    </div>
  }
}

export default CatBox;
