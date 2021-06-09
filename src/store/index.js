import * as redux from 'redux';


const initState = { cards: [] };

const reducer = (state = initState, { type, payload }) => {
  if (type === 'setCards') {
    return { ...state, cards: payload.cards };
  }

  if (type === 'addCard') {
    return { ...state, cards: [payload.card, ...state.cards] };
  }

  if (type === 'removeSelectedCards') {
    return { ...state, cards: state.cards.filter(card => !card.selected) };
  }

  if (type === 'editCard') {
    return { ...state, cards: state.cards.map(one => one.id === payload.card.id ? {...one, ...payload.card} : one) };
  }

  return state;
};

const store = redux.createStore(reducer);


export default store;
