import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';
import * as R from 'ramda';

import CatBox from './CatBox';
import * as catsActions from '../actions/cats';
import * as displayActions from '../actions/display';
import '../styles/reset.css';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.catsActions.loadCats();
  }
  render() {
    const {cats, display} = this.props;
    if(cats.status === 'LOADING') return <h2>LOADING...</h2>;
    if(cats.status === 'ERROR') return <h2>ERROR LOADING CATS</h2>

    const {updateFeedWidth} = this.props.displayActions;

    // arrange cats into columns evenly
    const columnCount = Math.floor(display.feedWidth / 280);
    const columnHeights = Array(columnCount).fill(0);
    const columnCats = Array(columnCount).fill(0).map(()=>[]);
    cats.data.forEach((cat, id) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights)); // find the minimum index
      columnCats[shortestColumn].unshift(R.assoc('id', id)(cat));
      columnHeights[shortestColumn] += cat.height || 1;
    });

    console.log(columnHeights)
    return <div>
      <ResizeObserver onResize={(rect) => updateFeedWidth(rect.width)} />
      { columnCats.map((column, columnID) =>
          <div className="feed-column" key={columnID}>
          {
            column.map(({image, fact, id}) =>
              <CatBox image={image} fact={fact} id={id} key={id} />)
          }
          </div>
        )
      }
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  catsActions: bindActionCreators(catsActions, dispatch),
  displayActions: bindActionCreators(displayActions, dispatch),
})
const mapStateToProps = state => ({
  cats: state.cats,
  display: state.display
});
export default connect(mapStateToProps, mapDispatchToProps)(App)
