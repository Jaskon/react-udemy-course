import { useState } from 'react';
import cl from 'classnames';
import './Card.scss';
import { BiEditAlt, BiXCircle, BiSave } from 'react-icons/bi';

function Card({ className, caption, content, onEdit,
                editing = false, selected = false }) {

  // New values state
  const [state, setState] = useState({ caption, content });


  /* Handlers */

  const onHeaderClick = () => {
    if (!editing) {
      onEdit({ selected: !selected });
    }
  };

  const onEditClick = e => {
    // Prevent from clicking on the header
    e.stopPropagation();
    onEdit({ editing: true, selected: false });
  }

  const onSaveClick = e => {
    e.stopPropagation();
    onEdit({ ...state, editing: false });
  }

  const onCancelClick = e => {
    e.stopPropagation();
    // Reset state values (to passed with props)
    setState({ caption, content });
    onEdit({ editing: false });
  }


  /* Renders */

  const renderHeaderButtons = () => {
    if (editing) {
      return <>
        <BiSave className={'Card__icon-save'} onClick={onSaveClick}/>
        <BiXCircle className={'Card__icon-cancel'} onClick={onCancelClick}/>
      </>;
    }

    return <>
      <BiEditAlt className={'Card__icon-edit'} onClick={onEditClick} />
      <input type={'checkbox'} checked={selected} readOnly />
    </>;
  };

  const renderCaption = () => {
    if (editing) {
      return <input
        onChange={e => setState({...state, caption: e.target.value})}
        defaultValue={state.caption}
      />;
    }

    return <div className={'Card__caption'}>{caption}</div>;
  };

  const renderContent = () => {
    if (editing) {
      return <textarea
        className={'Card__input-content'}
        onChange={e => setState({...state, content: e.target.value})}
        defaultValue={state.content}
      />;
    }

    return <div className={'Card__content'}>{content}</div>;
  };

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <div
          className={cl('Card__header', 'Card__clickable')}
          onClick={onHeaderClick}
        >
          <div className={'Card__caption-wrapper'}>{renderCaption()}</div>
          <div className={'Card__header-buttons'}>
            {renderHeaderButtons()}
          </div>
        </div>

        <div className={'Card__divider'} />

        <div className={'Card__content-wrapper'}>
          {renderContent()}
        </div>
      </div>

    </div>
  );
}

export default Card;
