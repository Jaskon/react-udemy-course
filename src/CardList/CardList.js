import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import Card from '../Card';
import './CardList.scss';
import { useState } from 'react';
import AddCard from '../AddCard/AddCard';
import Modal from '../Modal/Modal';
import WithLoadingDelay from '../common/WithLoadingDelay/WithLoadingDelay';


const CardWithLoading = WithLoadingDelay(Card, {height: '200px'});


function CardList({ cards, onListEdit }) {

  const [readOnlyState, setReadOnlyState] = useState(false);
  const [cardAddState, setCardAddState] = useState(false);


  const cardsRendered = cards.map(card =>
    <CardWithLoading
      key={card.id}
      className={'CardList__card'}
      data={card}
      readOnly={readOnlyState}
      onEdit={newCard =>
        onListEdit(
          cards.map(one =>
            one.id === card.id
              ? { ...one, ...newCard }
              : one
          )
        )
      }
    />
  );


  const readOnlyCheckboxHandler = (e) => {
    setReadOnlyState(e.currentTarget.checked);
    // Clear editing status
    onListEdit(cards.map(card => ({ ...card, editing: false })));
  };

  const deleteSelectedButtonHandler = () => {
    onListEdit(cards.filter(card => !card.selected));
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
          onOk={(card) => onListEdit([card, ...cards])}
          onCancel={addCardButtonHandler}
        />
      </Modal>
    }
  </>;
}


export default CardList;
