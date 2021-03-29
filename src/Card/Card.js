import cl from 'classnames';
import './Card.scss';

function Card({ className, caption, content, onSelect, selected = false }) {

  const onHeaderClick = () => {
    if (onSelect !== undefined) {
      return onSelect(!selected);
    }
  };

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <div
          className={cl('Card__header', 'Card__clickable')}
          onClick={onHeaderClick}
        >
          <div>{caption}</div>
          <input type={'checkbox'} checked={selected} readOnly />
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
