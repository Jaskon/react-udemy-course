import { getCardList } from '../api/cards.api';

const fetchCards = () => dispatch => {
  getCardList().then(cards => dispatch(setCards(cards)));
};

const setCards = cards => ({
  type: 'setCards',
  payload: { cards }
});

const addCard = card => ({
  type: 'addCard',
  payload: { card }
});

const removeSelectedCards = () => ({
  type: 'removeSelectedCards'
});

const editCard = card => ({
  type: 'editCard', payload: { card }
});


export { fetchCards, setCards, addCard, removeSelectedCards, editCard };
