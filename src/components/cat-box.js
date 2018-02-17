import React from 'react';

class CatBox extends React.Component {

  render() {
    return <div className="cat-box">
      <div><img src={this.props.image} className="cat-image" /></div>
      <div className="cat-text">{this.props.fact}</div>
    </div>
  }
}

export default CatBox;
