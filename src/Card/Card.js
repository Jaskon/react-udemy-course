import { useState } from 'react';
import cl from 'classnames';
import './Card.scss';
import { BiEditAlt, BiXCircle, BiSave } from 'react-icons/bi';

function Card({ className, caption, content, onSelect, onEdit, onEditSave,
                editMode = false, selected = false }) {

  // New values state
  const [state, setState] = useState({ caption, content });

  const onHeaderClick = () => {
    if (onSelect !== undefined && !editMode) {
      onSelect();
    }
  };

  const onEditClick = e => {
    // Prevent from clicking on the header
    e.stopPropagation();
    if (onEdit !== undefined) {
      // setState({ caption, content });
      onEdit(true);
    }
  }

  const onSaveClick = e => {
    e.stopPropagation();
    if (onEditSave !== undefined) {
      // onEditSave(state);
      onEditSave(state);
    }
  }

  const onCancelClick = e => {
    e.stopPropagation();
    if (onEdit !== undefined) {
      setState({ caption, content });
      onEdit(false);
    }
  }

  const headerButtonsRendered = editMode
    ? <>
      <BiSave className={'Card__icon-save'} onClick={onSaveClick}/>
      <BiXCircle className={'Card__icon-cancel'} onClick={onCancelClick}/>
    </>
    : <>
      <BiEditAlt className={'Card__icon-edit'} onClick={onEditClick} />
      <input type={'checkbox'} checked={selected} readOnly />
    </>;

  const captionRendered = editMode
    ? <input
        onChange={e => setState({...state, caption: e.target.value})}
        defaultValue={state.caption} />
    : <div className={'Card__caption'}>{caption}</div>;

  const contentRendered = editMode
    ? <textarea
        className={'Card__input-content'}
        onChange={e => setState({...state, content: e.target.value})}
        defaultValue={state.content}
        />
    : <div className={'Card__content'}>{content}</div>;

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <div
          className={cl('Card__header', 'Card__clickable')}
          onClick={onHeaderClick}
        >
          <div className={'Card__caption-wrapper'}>{captionRendered}</div>
          <div className={'Card__header-buttons'}>
            {headerButtonsRendered}
          </div>
        </div>

        <div className={'Card__divider'} />

        <div className={'Card__content-wrapper'}>
          {contentRendered}
        </div>
      </div>

    </div>
  );
}

export default Card;
