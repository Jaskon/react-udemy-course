import cl from 'classnames';
import './Card.scss';

function Card({ className, caption, content,
                checkbox = false, selected = false,
                onSelect = undefined }) {

  const onHeaderClick = () => {
    if (onSelect !== undefined) {
      return onSelect(!selected);
    }
  };

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <div
          className={cl('Card__header', {'Card__clickable': checkbox})}
          onClick={onHeaderClick}
        >
          <div>{caption}</div>
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
