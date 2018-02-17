import * as R from 'ramda';

console.log(R)
const initialState = [
  {image: 'http://24.media.tumblr.com/tumblr_m172tpPR651r5gvzxo1_1280.jpg', fact: 'The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).'},
  {image: 'http://25.media.tumblr.com/tumblr_m1qtb6SBtM1r5z2dco1_1280.jpg'},
  {},
  {}
]

const catsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CATBOX_UPDATE_HEIGHT':
      return R.assocPath([action.id, 'height'], action.height)(state);

    default:
      return state;
  }
  return state;
}

export default catsReducer;
