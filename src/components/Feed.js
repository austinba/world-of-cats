import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';
import * as R from 'ramda';

import FeedColumn from './FeedColumn';
import * as catsActions from '../actions/cats';
import * as displayActions from '../actions/display';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {cats, display} = this.props;
    if(cats.status === 'LOADING') return <h2>LOADING...</h2>;
    if(cats.status === 'ERROR') return <h2>ERROR LOADING CATS</h2>

    const columnCount = Math.floor(display.feedWidth / 280);
    const columnCats = splitIntoColumns(cats.data, columnCount);

    return <div class="feed">
      <ResizeObserver onResize={(rect) => this.props.displayActions.updateFeedWidth(rect.width)} />
        { columnCats.map((catsInColumn, id) => <FeedColumn cats={catsInColumn} key={id} />) }
    </div>
  }
}

function splitIntoColumns(cats, columnCount) {
  const columnHeights = Array(columnCount).fill(0);
  const columnCats = Array(columnCount).fill(0).map(()=>[]);
  cats.forEach((cat, id) => {
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights)); // find the minimum index
    columnCats[shortestColumn].unshift(R.assoc('id', id)(cat));
    columnHeights[shortestColumn] += cat.height || 1; // use 1 if height is not available
  });
  return columnCats;
}

const mapDispatchToProps = dispatch => ({
  catsActions: bindActionCreators(catsActions, dispatch),
  displayActions: bindActionCreators(displayActions, dispatch),
})
const mapStateToProps = state => ({
  cats: state.cats,
  display: state.display
});
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
