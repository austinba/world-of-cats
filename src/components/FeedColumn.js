import CatBox from './CatBox';
import React from 'react';

export default function FeedColumn({cats}) {
  return <div className="feed-column">
    {
      cats.map(({id}) => (
        <CatBox id={id} key={id} />
      ))
    }
  </div>
}
