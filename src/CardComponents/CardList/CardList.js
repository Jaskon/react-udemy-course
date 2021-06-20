import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import './CardList.scss';
import AddCard from '../AddCard/AddCard';
import Modal from '../../common/Modal/Modal';
import { addCard, removeSelectedCards, editCard } from '../../store/cardsSlice';


function CardList() {

  const history = useHistory();
  const cards = useSelector(state => state.cards.cards);
  const readOnly = useSelector(state => state.cards.readOnly);
  const dispatch = useDispatch();

  const [cardAddState, setCardAddState] = useState(false);


  const cardsRendered = cards.map(card =>
    <Card
      key={card.id}
      className={'CardList__card'}
      data={card}
      readOnly={readOnly}
      onEdit={newCard => dispatch(editCard({ ...card, ...newCard }))}
      onDoubleClick={() => readOnly && history.push(`/card/${card.id}`)}
    />
  );

  const deleteSelectedButtonHandler = () => {
    dispatch(removeSelectedCards());
  };

  const addCardHandler = card => {
    dispatch(addCard(card));
  };

  const addCardButtonHandler = () => {
    setCardAddState(!cardAddState);
  }


  return <>
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
