import CustomCheckbox from '../common/CustomCheckbox/CustomCheckbox';
import { setReadOnly } from '../store/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Settings() {
  const dispatch = useDispatch();
  const readOnly = useSelector(state => state.cards.readOnly);

  const readOnlyCheckboxHandler = (e) => {
    dispatch(setReadOnly(!readOnly));
  };

  return <>
    <CustomCheckbox
      checked={readOnly}
      onChange={readOnlyCheckboxHandler}
      label='Read only'
    />
  </>;
}

export default Settings;
