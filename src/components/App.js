import React from 'react';
import { connect } from 'react-redux';
import CatBox from './cat-box';
import '../styles/reset.css';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.cats.map(({image, fact}, id) =>
        <CatBox image={image} fact={fact} id={id} key={id} />
      )}
    </div>
  }
}

const mapStateToProps = state => ({
  cats: state.cats
});
export default connect(mapStateToProps)(App)
