import { useState } from 'react';
import cl from 'classnames';
import './Card.scss';

function Card({ className, caption, content, checkbox, defaultSelected = false }) {
  const [checkboxState, setCheckboxState] = useState(defaultSelected);

  const onHeaderClick = () => {
    setCheckboxState(!checkboxState);
  };

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': checkboxState})}>
        <div
          className={cl('Card__header', {'Card__clickable': checkbox})}
          onClick={checkbox ? onHeaderClick : undefined}
        >
          <div>{caption}</div>
          {checkbox &&
            <input type={'checkbox'} className={'Card__clickable'} checked={checkboxState} readOnly/>
          }
        </div>

        <div className={'Card__divider'} />

        <div className={'Card__content'}>
          {content}
        </div>
      </div>

    </div>
  );
}

export default Card;
