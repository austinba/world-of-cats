import React from 'react';
import { connect } from 'react-redux';

const ViewCat = (props) => {
  const id = props.params.id;
  if(!props.cats[id]) return <div className="message">Could not find requested cat. Please go back.</div>;
  const {image, fact} = props.cats[id];

  return (
    <div className="view-a-cat-box">
      <div className="view-a-cat-text">{fact}</div>
      <div><img src={image} className="view-a-cat-image" alt="a cat"/></div>
    </div>
  );
}

const mapStateToProps = state => ({
  cats: state.cats.data
});

export default connect(mapStateToProps)(ViewCat)
