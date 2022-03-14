import songData from './songs.json';
import categoryData from './categories.json'

let initialState={
  songData,
  categoryData,
  activeCategory:''
}
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY':
      return { ...state, activeCategory: payload }

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const category = (name) => {
  return {
    type: 'CATEGORY',
    payload: name
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};