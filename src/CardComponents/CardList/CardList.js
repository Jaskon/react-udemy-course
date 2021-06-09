import CustomCheckbox from '../../common/CustomCheckbox/CustomCheckbox';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import './CardList.scss';
import AddCard from '../AddCard/AddCard';
import Modal from '../../common/Modal/Modal';
import { setCards, addCard, removeSelectedCards, editCard } from '../../store/actions';


function CardList() {

  const history = useHistory();
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const [readOnlyState, setReadOnlyState] = useState(false);
  const [cardAddState, setCardAddState] = useState(false);


  const cardsRendered = cards.map(card =>
    <Card
      key={card.id}
      className={'CardList__card'}
      data={card}
      readOnly={readOnlyState}
      onEdit={newCard => dispatch(editCard({ ...card, ...newCard }))}
      onDoubleClick={() => readOnlyState && history.push(`/card/${card.id}`)}
    />
  );


  const readOnlyCheckboxHandler = (e) => {
    setReadOnlyState(e.currentTarget.checked);
    // Clear editing status
    dispatch(setCards(cards.map(card => ({ ...card, editing: false }))));
  };

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
