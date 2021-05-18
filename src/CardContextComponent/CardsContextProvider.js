import React, { useState } from 'react';


const CardsContext = React.createContext({});


function CardsContextProvider(Children, { initCardList }) {

  return function Child(props) {

    const [cardsContext, setCardsContext] = useState(() => ({
      cards: initCardList,
      setCards: cards => setCardsContext(state => ({
        ...state,
        cards
      })),
      addCard: card => setCardsContext(state => ({
        ...state,
        cards: [card, ...state.cards]
      })),
      removeSelectedCards: () => setCardsContext(state => ({
        ...state,
        cards: state.cards.filter(card => !card.selected)
      })),
      editCard: newCard => setCardsContext(state => ({
        ...state,
        cards: state.cards.map(
          one => one.id === newCard.id
            ? {...one, ...newCard}
            : one
        )
      }))
    }));

    return (
      <CardsContext.Provider value={cardsContext}>
        <Children {...props} />
      </CardsContext.Provider>
    );
  }
}

export default CardsContextProvider;
export { CardsContext };

