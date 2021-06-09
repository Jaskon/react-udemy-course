import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import { editCard } from '../../store/actions';
import { useParams } from 'react-router-dom';


function CardPage() {
  const { id } = useParams();

  const card = useSelector(state => state.cards.find(one => one.id === id));
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
