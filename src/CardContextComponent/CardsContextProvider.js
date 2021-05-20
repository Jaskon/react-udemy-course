import React, {useEffect, useState} from 'react';
import {getCardList} from '../api/cards.api';


const CardsContext = React.createContext({});


function CardsContextProvider(Children) {

  return function Child(props) {

    useEffect(() => {
      getCardList().then(cards => cardsContext.setCards(cards));
    }, []);

    const [cardsContext, setCardsContext] = useState(() => ({
      cards: [],
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

