import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import Card from '../Card';
import './CardList.scss';
import {useContext, useState} from 'react';
import AddCard from '../AddCard/AddCard';
import Modal from '../Modal/Modal';
import {CardsContext} from "../App/App";


function CardList() {

  const [readOnlyState, setReadOnlyState] = useState(false);
  const [cardAddState, setCardAddState] = useState(false);
  const {cards, setCards, addCard, removeSelectedCards, editCard} = useContext(CardsContext);


  const cardsRendered = cards.map(card =>
    <Card
      key={card.id}
      className={'CardList__card'}
      data={card}
      readOnly={readOnlyState}
      onEdit={newCard => editCard({...card, ...newCard})}
    />
  );


  const readOnlyCheckboxHandler = (e) => {
    setReadOnlyState(e.currentTarget.checked);
    // Clear editing status
    setCards(cards.map(card => ({...card, editing: false})));
  };

  const deleteSelectedButtonHandler = () => {
    removeSelectedCards();
  };

  const addCardHandler = card => {
    addCard(card);
  };

  const addCardButtonHandler = () => {
    setCardAddState(!cardAddState);
  }


  return <>
    <CustomCheckbox
      checked={readOnlyState}
      onChange={readOnlyCheckboxHandler}
      label='Read only'
    />
    <button
      disabled={!cards.find(card => card.selected)}
      onClick={deleteSelectedButtonHandler}
    >
      Delete selected
    </button>
    <button onClick={addCardButtonHandler}>Add a new card</button>

    <div className={'CardList__cards'}>
      {cardsRendered}
    </div>

    {cardAddState &&
    <Modal onBackdropClick={addCardButtonHandler}>
      <AddCard
        onOk={addCardHandler}
        onCancel={addCardButtonHandler}
      />
    </Modal>
    }
  </>;
}


export default CardList;
