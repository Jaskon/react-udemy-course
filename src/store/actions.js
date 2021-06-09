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


export { setCards, addCard, removeSelectedCards, editCard };
