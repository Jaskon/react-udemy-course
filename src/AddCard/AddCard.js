import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './AddCard.scss';


function AddCard({ onOk, onCancel }) {
  const [state, setState] = useState({ caption: '', content: '' });
  const { caption, content } = state;

  const okButtonHandler = () => {
    onOk({ id: uuid(), caption, content });
    onCancel();
  };

  const cancelButtonHandler = () => {
    onCancel();
  };


  return <>
    <div className={'AddCard__wrapper'}>
      <fieldset>
        <legend>Caption</legend>
        <input onChange={e => setState({ ...state, caption: e.currentTarget.value })}/>
      </fieldset>
      <fieldset>
        <legend>Content</legend>
        <textarea onChange={e => setState({ ...state, content: e.currentTarget.value })}/>
      </fieldset>
      <div className={'AddCard__buttons'}>
        <button onClick={okButtonHandler}>Ok</button>
        <button onClick={cancelButtonHandler}>Cancel</button>
      </div>
    </div>
  </>;
}


export default AddCard;
