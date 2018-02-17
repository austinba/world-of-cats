import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <div>
      {JSON.stringify(this.props.cats)}
    </div>
  }
}

const mapStateToProps = state => ({
  cats: state.cats
});
export default connect(mapStateToProps)(App)
