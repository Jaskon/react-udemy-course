import cl from 'classnames';
import { BiEditAlt, BiSave, BiXCircle } from 'react-icons/bi';
import './CardHeader.scss';


function CardHeader({ editing, readOnly, caption, selected, onCaptionChange,
                      onEditStart, onSelect, onSave, onEditCancel }) {

  const onClick = () => {
    if (!editing) {
      onSelect();
    }
  };

  const editClickHandler = e => {
    // Prevent from clicking on the header
    e.stopPropagation();
    onEditStart();
  }

  const onSaveClick = e => {
    e.stopPropagation();
    onSave();
  }

  const onCancelClick = e => {
    e.stopPropagation();
    onEditCancel();
  }


  const renderHeaderButtons = () => {
    if (editing) {
      return !readOnly && <>
        <BiSave className={'Card__icon-save'} onClick={onSaveClick}/>
        <BiXCircle className={'Card__icon-cancel'} onClick={onCancelClick}/>
      </>;
    }

    return <>
      {!readOnly && <BiEditAlt className={'Card__icon-edit'} onClick={editClickHandler} />}
      <input type={'checkbox'} checked={selected} readOnly />
    </>;
  };

  const renderCaption = () => {
    if (editing) {
      return <input
        type="text"
        onChange={e => onCaptionChange(e.currentTarget.value)}
        defaultValue={caption}
      />;
    }

    return <div className={'Card__caption'}>{caption}</div>;
  };


  return (
    <div
      className={cl('Card__header', 'Card__clickable')}
      onClick={onClick}
    >
      <div className={'Card__caption-wrapper'}>{renderCaption()}</div>
      <div className={'Card__header-buttons'}>
        {renderHeaderButtons()}
      </div>
    </div>
  );
}

export default CardHeader;
