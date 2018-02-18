import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeObserver from 'react-resize-observer';
import * as R from 'ramda';

import FeedColumn from './FeedColumn';
import * as displayActions from '../actions/display';

const Feed = props => {
  const {cats, display} = props;
  const columnCount = Math.floor(display.feedWidth / 280);
  const columnCats = splitIntoColumns(cats, display.catBoxHeights, columnCount);

  return (
    <div className="feed">
      <ResizeObserver onResize={(rect) => props.updateFeedWidth(rect.width)} />
        { columnCats.map((catsInColumn, id) => <FeedColumn cats={catsInColumn} key={id} />) }
    </div>
  );
}

function splitIntoColumns(cats, boxHeights, columnCount) {
  const columnHeights = Array(columnCount).fill(0);
  const columnCats = Array(columnCount).fill(0).map(()=>[]);
  cats.forEach((cat) => {
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights)); // find the minimum index
    columnCats[shortestColumn].push(R.assoc('id', cat.id)(cat));
    columnHeights[shortestColumn] += (boxHeights && boxHeights[cat.id]) || 1; // use 1 if height is not available
  });
  return columnCats;
}

const mapDispatchToProps = dispatch => ({
  updateFeedWidth: bindActionCreators(displayActions.updateFeedWidth, dispatch),
})
const mapStateToProps = state => ({
  display: state.display
});
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
