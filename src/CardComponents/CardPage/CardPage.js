import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import { editCard } from '../../store/cardsSlice';
import { useParams } from 'react-router-dom';


function CardPage() {
  const { id } = useParams();

  const card = useSelector(state => state.cards.cards.find(one => one.id === id));
  const dispatch = useDispatch();

  return <>
    {card &&
      <Card
        data={card}
        readOnly={false}
        onEdit={newCard => dispatch(editCard({ ...card, ...newCard }))}
      />
    }
  </>;
}


export default CardPage;
